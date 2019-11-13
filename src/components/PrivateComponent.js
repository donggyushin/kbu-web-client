import React from 'react';
import Main from './private/Main/Main';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import DrawerComponent from './private/Main/Drawer/Drawer';
import AdminPage from './private/AdminPage/AdminPage';
import ExtendedMain from './private/ExtendedMain';
import ShedulePDF from './private/Shedule/Shedule';
import KBUCampus from './private/CampusMap';
import Lecture from './private/Lecture';
import Mileage from './private/Mileage';
import Cafeteria from './private/Cafeteria';
import Notice from './private/Notice';
import Chapel from './private/Chapel';
import { connect } from 'react-redux'
import { fetchUser } from '../actions/userAction';
import { fetchNotice, fetchNextNotice } from '../actions/noticeAction'
import { fetchLecture } from '../actions/lectureAction'
import { fetchMileage } from '../actions/mileageAction'
import { fetchChapel } from '../actions/chapelAction'
import Calendar from './private/Calendar';



class PrivateComponent extends React.Component {

    componentDidMount() {

        this.props.fetchUser()

    }




    render() {
        const { handleLocation, noticeClicked, mainClicked,
            lectureClicked,
            mileageClicked,
            scheduleClicked,
            chapelClicked,
            mapClicked,
            cafeteriaClicked
        } = this;

        const { logout, user, fetchNotice, notice, fetchNextNotice, fetchLecture, lecture, mileage, fetchMileage, fetchChapel, chapel } = this.props;
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
                        noticeClicked={noticeClicked} handleLocation={handleLocation} loading={user.loading} user={user} />

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
                    <Lecture requestLecture={fetchLecture} lecture={lecture} colorMatches={lecture.colorMatches} />
                </Route>
                <Route path={'/mileage'}>
                    <DrawerComponent mainClicked={mainClicked} location={"마일리지"} user={user} logout={logout} />
                    <Mileage requestMileage={fetchMileage} mileage={mileage} />
                </Route>
                <Route path={'/cafeteria'}>
                    <DrawerComponent mainClicked={mainClicked} location={"학식"} user={user} logout={logout} />
                    <Cafeteria />
                </Route>
                <Route path={'/notice'}>
                    <DrawerComponent mainClicked={mainClicked} location={"공지사항"} user={user} logout={logout} />
                    <Notice requestNotice={fetchNotice} noticeRequestNext={fetchNextNotice} notice={notice} />
                </Route>
                <Route path={'/chapel'}>
                    <DrawerComponent mainClicked={mainClicked} location={"채플"} user={user} logout={logout} />
                    <Chapel requestChapel={fetchChapel} chapel={chapel} />
                </Route>
                <Route path={'/calendar'}>
                    <DrawerComponent mainClicked={mainClicked} location={"학사일정"} user={user} logout={logout} />
                    <Calendar />
                </Route>
                <Route>
                    <DrawerComponent mainClicked={mainClicked} location={""} user={user} logout={logout} />
                    <Main />
                </Route>

            </Switch>
        </Router>
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


}

const mapStateToProps = state => {
    return {
        user: state.user,
        notice: state.notice,
        lecture: state.lecture,
        mileage: state.mileage,
        chapel: state.chapel
    }
}

export default connect(mapStateToProps, {
    fetchUser,
    fetchNotice,
    fetchNextNotice,
    fetchLecture,
    fetchMileage,
    fetchChapel
})(PrivateComponent)