import React from 'react';
import Main from './private/Main/Main';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import QRCodeComponent from './private/QRCode/QRCode';
import anime from 'animejs/lib/anime.es.js';
import DrawerComponent from './private/Main/Drawer/Drawer';
import AdminPage from './private/AdminPage/AdminPage';
import { decodeJsonWebToken } from 'utils/jsonwebtoken';
import Axios from 'axios';
import REST_API_ENDPOINT from 'constants/endpoint';
import ExtendedMain from './private/ExtendedMain';
import ShedulePDF from './private/Shedule/Shedule';
import KBUCampus from './private/CampusMap';
import Lecture from './private/Lecture';
import Mileage from './private/Mileage';
import Cafeteria from './private/Cafeteria';
import Notice from './private/Notice';
import Chapel from './private/Chapel';

let i = 0;

class PrivateComponent extends React.Component {

    state = {
        QRCode: false,
        user: {
            email: "",
            gender: "",
            grade: "",
            sid: "",
            img: "",
            img_height: 0,
            img_width: 0,
            major: "",
            phone: "",
            status: "",
            name: ""
        },
        loading: true,
        notice: {
            page: 1,
            notices: [],
            loading: true,
            loading2: true,
            error: ""
        },
        lecture: {
            schedule: [],
            loading: true,
            error: "",
            selected: "",
            semesters: [],
            colorMatches: {},
            colorSamples: ['#C2F3C6', '#ff9ff3', '#00b894', '#B9E6F1', '#0984e3', '#F7B32B', '#B33771', '#e66767', '#9c88ff', '#c23616', '#ffbe76', '#ff7979', '#badc58', '#54a0ff', '#6a89cc', '#fad390', '#f8c291', '#FFC6ED', '#81ecec', '#f6e58d']
        },
        location: "",
        mileage: {
            rows: [],
            loading: true,
            error: ""
        },
        chapel: {
            chapels: [],
            summary: {
                attendance: 0,
                late: 0,
                sure: 0,
                duty: 0
            },
            chapelLength: 0,
            loading: true,
            error: ""
        }

    }






    componentDidMount() {

        console.log('api 요청!')

        const decoded = decodeJsonWebToken(window.localStorage.getItem("token"));
        const userId = decoded.id;
        const userPassword = decoded.password;
        if (userId && userPassword) {
            Axios.post(REST_API_ENDPOINT + 'user/getuser', {
                id: userId,
                password: userPassword
            }).then(res => res.data)
                .then(data => {
                    localStorage.setItem('kbu', data.token);

                    localStorage.setItem('user', JSON.stringify(data.result))
                    let cachedata = (new Date().getMonth() + 1).toString() + new Date().getDate().toString();
                    localStorage.setItem('cachedate', cachedata)
                    if (data.is_ok) {
                        this.setState({
                            user: data.result,
                            loading: false
                        })

                    } else {
                        alert('정보를 불러오는데 실패하였습니다. ')
                        window.localStorage.removeItem('token');
                        window.location.href = '/'
                    }
                })
                .catch(err => console.error(err))

            const { page } = this.state.notice;
            Axios.post(REST_API_ENDPOINT + 'notice', {
                page
            }).then(res => res.data)
                .then(data => {
                    if (data.is_ok) {
                        console.log('notice data: ', data)
                        this.setState({
                            notice: {
                                notices: data.result.table_body,
                                loading: false,
                                loading2: false,
                                page: this.state.notice.page + 1
                            }
                        })
                    } else {
                        this.setState({
                            notice: {
                                error: "공지사항을 불러오는데 실패하였습니다. ",
                                loading: false,
                                loading2: false
                            }
                        })
                    }
                })
                .catch(err => console.error(err))


            Axios.post(REST_API_ENDPOINT + 'lecture', {
                id: decoded.id,
                pw: decoded.password
            })
                .then(res => res.data)
                .then(data => {
                    if (data.is_ok) {
                        console.log('schedules:', data.result)
                        this.setState({
                            lecture: {
                                ...this.state.lecture,
                                schedule: data.result.table_body,
                                // loading: false
                            }
                        })

                        console.log('lecture: ', data.result.table_body)

                        for (let index = 0; index < data.result.table_body.length; index++) {
                            const element = data.result.table_body[index];
                            for (let index = 0; index < element.length; index++) {
                                const element2 = element[index];

                                this.setState({
                                    lecture: {
                                        ...this.state.lecture,
                                        colorMatches: {
                                            ...this.state.lecture.colorMatches,
                                            [element2[0]]: this.state.lecture.colorSamples[i]
                                        }
                                    }
                                })
                                i++;
                            }
                        }

                        this.setState({
                            lecture: {
                                ...this.state.lecture,
                                loading: false
                            }
                        })

                    } else {
                        this.setState({
                            lecture: {
                                ...this.state.lecture,
                                error: '시간표를 가져오지 못하였습니다. 관리자에게 문의해주세요. '
                            }
                        })
                    }
                })
                .catch(err => console.error(err))

            Axios.post(REST_API_ENDPOINT + 'mileage', {
                id: decoded.id,
                pw: decoded.password
            })
                .then(res => res.data)
                .then(data => {
                    if (data.is_ok) {
                        this.setState({
                            mileage: {
                                ...this.state.mileage,
                                rows: data.result,
                                loading: false
                            }
                        })
                    } else {
                        this.setState({
                            mileage: {
                                ...this.state.mileage,
                                error: "마일리지 내역을 가져오는데 실패하였습니다. ",
                                loading: false
                            }
                        })
                    }
                })
                .catch(err => console.error(err))

            Axios.post(REST_API_ENDPOINT + 'chapel', {
                id: decoded.id,
                pw: decoded.password
            })
                .then(res => res.data)
                .then(data => {
                    if (data.is_ok) {
                        this.setState({
                            chapel: {
                                ...this.state.chapel,
                                summary: {
                                    attendance: data.result.summary.출석,
                                    late: data.result.summary.지각,
                                    sure: data.result.summary.확정,
                                    duty: data.result.summary.규정일수
                                },
                                chapels: data.result.table_body,
                                loading: false,
                                chapelLength: data.result.table_body.length
                            }
                        })
                    } else {
                        this.setState({
                            chapel: {
                                ...this.state.chapel,
                                error: "채플 내역을 불러오지 못했습니다. 관리자에게 문의해주세요. "
                            }
                        })
                    }
                })
                .catch(err => console.error(err))

        }


    }

    render() {
        const { QRCode, user, loading, notice, lecture, location, mileage,
            chapel
        } = this.state;
        const { QRCodeOn, QRCodeOff, noticeRequestNext, handleLocation, noticeClicked, mainClicked,
            lectureClicked,
            mileageClicked,
            scheduleClicked,
            chapelClicked,
            mapClicked,
            cafeteriaClicked
        } = this;
        const { logout } = this.props;
        return <Router>

            <Switch>
                <Route exact path="/">
                    <DrawerComponent mainClicked={mainClicked} location={""} user={user} logout={logout} />
                    <ExtendedMain
                        chapelClicked={chapelClicked}
                        scheduleClicked={scheduleClicked}
                        mileageClicked={mileageClicked}
                        lectureClicked={lectureClicked}
                        mapClicked={mapClicked}
                        cafeteriaClicked={cafeteriaClicked}
                        noticeClicked={noticeClicked} handleLocation={handleLocation} loading={loading} user={user} />

                </Route>
                <Route path="/admin">
                    <DrawerComponent mainClicked={mainClicked} location={"관리자 페이지"} user={user} logout={logout} />
                    <AdminPage user={user} />
                </Route>
                <Route path={'/schedule'}>
                    <DrawerComponent mainClicked={mainClicked} location={"학사 일정"} user={user} logout={logout} />
                    <ShedulePDF />
                </Route>
                <Route path={'/map'}>
                    <DrawerComponent mainClicked={mainClicked} location={"학교지도"} user={user} logout={logout} />
                    <KBUCampus />
                </Route>
                <Route path={'/lecture'}>
                    <DrawerComponent mainClicked={mainClicked} location={"수업"} user={user} logout={logout} />
                    <Lecture lecture={lecture} colorMatches={this.state.lecture.colorMatches} />
                </Route>
                <Route path={'/mileage'}>
                    <DrawerComponent mainClicked={mainClicked} location={"마일리지"} user={user} logout={logout} />
                    <Mileage mileage={mileage} />
                </Route>
                <Route path={'/cafeteria'}>
                    <DrawerComponent mainClicked={mainClicked} location={"학식"} user={user} logout={logout} />
                    <Cafeteria />
                </Route>
                <Route path={'/notice'}>
                    <DrawerComponent mainClicked={mainClicked} location={"공지사항"} user={user} logout={logout} />
                    <Notice noticeRequestNext={noticeRequestNext} notice={notice} />
                </Route>
                <Route path={'/chapel'}>
                    <DrawerComponent mainClicked={mainClicked} location={"채플"} user={user} logout={logout} />
                    <Chapel chapel={chapel} />
                </Route>
                <Route>
                    <DrawerComponent mainClicked={mainClicked} location={""} user={user} logout={logout} />
                    <Main />
                </Route>

            </Switch>
            {/* <CopyrightComponent /> */}
            {QRCode && <QRCodeComponent loading={loading} user={user} QRCodeOff={QRCodeOff} view={QRCode} />}

        </Router>
    }

    noticeRequestNext = () => {

        const { loading2, page } = this.state.notice;
        if (loading2) {
            return;
        }
        this.setState({
            notice: {
                ...this.state.notice,
                loading2: true
            }
        })
        Axios.post(REST_API_ENDPOINT + 'notice', {
            page
        })
            .then(res => res.data)
            .then(data => {
                if (data.is_ok) {

                    this.setState({
                        notice: {
                            ...this.state.notice,
                            notices: this.state.notice.notices.concat(data.result.table_body),
                            loading2: false,
                            page: this.state.notice.page + 1
                        }
                    })
                } else {
                    this.setState({
                        notice: {
                            loading2: false,
                            error: '공지사항을 불러오는데 실패하였습니다. 관리자에게 문의해주세요. '
                        }
                    })
                }
            })
            .catch(err => console.error(err))
    }

    handleLocation = () => {
        this.setState({
            location: window.location.href.split('/')[3]
        })
    }

    cafeteriaClicked = () => {
        this.setState({
            location: '교내 식당'
        })
    }

    mapClicked = () => {
        this.setState({
            location: "캠퍼스 맵"
        })
    }

    chapelClicked = () => {
        this.setState({
            location: "채플"
        })
    }

    scheduleClicked = () => {
        this.setState({
            location: "학사일정"
        })
    }

    mileageClicked = () => {
        this.setState({
            location: "마일리지"
        })
    }

    lectureClicked = () => {
        this.setState({
            location: "수업"
        })
    }

    mainClicked = () => {
        this.setState({
            location: ""
        })
    }

    noticeClicked = () => {
        this.setState({
            location: '공지사항'
        })
    }



    QRCodeOn = () => {
        this.setState({
            QRCode: true
        })

    }

    QRCodeOff = () => {
        this.setState({
            QRCode: false
        })
        anime({
            targets: '.qrcode-container',
            translateY: 500
        })
    }
}

export default PrivateComponent