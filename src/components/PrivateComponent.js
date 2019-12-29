import React from 'react';
import Main from './private/Main/Main';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
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
import SignUpPage from './public/SignUp';
import NavigationBar from './global/NavigationBar';
import LoginPage from './public/login';
import TodaysPrayerForm from './private/TodaysPrayerForm';
import TodaysPrayer from './private/TodaysPrayer';



class PrivateComponent extends React.Component {

    componentDidMount() {

        if (this.props.isLoggedIn) {
            console.log('?')
            this.props.fetchUser()

        }

    }




    render() {

        const { isLoggedIn, logout, user, fetchNotice, notice, fetchNextNotice, fetchLecture, lecture, mileage, fetchMileage, fetchChapel, chapel } = this.props;
        return <Router>

            <Switch>
                <Route exact path="/">
                    {/* <DrawerComponent isLoggedIn={isLoggedIn} mainClicked={mainClicked} location={""} user={user} logout={logout} /> */}
                    <NavigationBar logout={logout} isLoggedIn={isLoggedIn} />
                    <ExtendedMain
                        isLoggedIn={isLoggedIn}
                        loading={user.loading} user={user}
                    />

                </Route>
                <Route path="/admin">
                    {/* <DrawerComponent isLoggedIn={isLoggedIn} mainClicked={mainClicked} location={"관리자 페이지"} user={user} logout={logout} /> */}
                    <NavigationBar location={'관리자 페이지'} logout={logout} isLoggedIn={isLoggedIn} />
                    <AdminPage user={user} />
                </Route>
                <Route path={'/schedule'}>
                    {/* <DrawerComponent isLoggedIn={isLoggedIn} mainClicked={mainClicked} location={"학사 일정"} user={user} logout={logout} /> */}
                    <NavigationBar location={'학사일정'} logout={logout} isLoggedIn={isLoggedIn} />
                    <ShedulePDF />
                </Route>
                <Route path={'/map'}>
                    {/* <DrawerComponent isLoggedIn={isLoggedIn} mainClicked={mainClicked} location={"학교지도"} user={user} logout={logout} /> */}
                    <NavigationBar location={'학교지도'} logout={logout} isLoggedIn={isLoggedIn} />
                    <KBUCampus />
                </Route>
                <Route path={'/lecture'}>
                    {/* <DrawerComponent isLoggedIn={isLoggedIn} mainClicked={mainClicked} location={"수업"} user={user} logout={logout} /> */}
                    <NavigationBar location={'시간표'} logout={logout} isLoggedIn={isLoggedIn} />
                    <Lecture requestLecture={fetchLecture} lecture={lecture} colorMatches={lecture.colorMatches} />
                </Route>
                <Route path={'/mileage'}>
                    {/* <DrawerComponent isLoggedIn={isLoggedIn} mainClicked={mainClicked} location={"마일리지"} user={user} logout={logout} /> */}
                    <NavigationBar location={'마일리지'} logout={logout} isLoggedIn={isLoggedIn} />
                    <Mileage requestMileage={fetchMileage} mileage={mileage} />
                </Route>
                <Route path={'/cafeteria'}>
                    {/* <DrawerComponent isLoggedIn={isLoggedIn} mainClicked={mainClicked} location={"학식"} user={user} logout={logout} /> */}
                    <NavigationBar location={'학식'} logout={logout} isLoggedIn={isLoggedIn} />
                    <Cafeteria />
                </Route>
                <Route path={'/notice'}>
                    {/* <DrawerComponent isLoggedIn={isLoggedIn} mainClicked={mainClicked} location={"공지사항"} user={user} logout={logout} /> */}
                    <NavigationBar location={'공지사항'} logout={logout} isLoggedIn={isLoggedIn} />
                    <Notice requestNotice={fetchNotice} noticeRequestNext={fetchNextNotice} notice={notice} />
                </Route>
                <Route path={'/chapel'}>
                    {/* <DrawerComponent isLoggedIn={isLoggedIn} mainClicked={mainClicked} location={"채플"} user={user} logout={logout} /> */}
                    <NavigationBar location={'채플'} logout={logout} isLoggedIn={isLoggedIn} />
                    <Chapel requestChapel={fetchChapel} chapel={chapel} />
                </Route>
                <Route path={'/calendar'}>
                    <NavigationBar location={'학사일정'} logout={logout} isLoggedIn={isLoggedIn} />
                    <Calendar />
                </Route>
                <Route path={'/prayerform'}>
                    <NavigationBar location={'오늘의 기도(관리자)'} logout={logout} isLoggedIn={isLoggedIn} />
                    <TodaysPrayerForm />
                </Route>
                <Route path={'/prayer'}>
                    <NavigationBar location={'오늘의 기도'} logout={logout} isLoggedIn={isLoggedIn} />
                    <TodaysPrayer />
                </Route>
                <Route path={'/login'}>
                    {/* <DrawerComponent isLoggedIn={isLoggedIn} mainClicked={mainClicked} location={"로그인"} user={user} logout={logout} /> */}
                    <LoginPage />
                </Route>
                <Route path={'/signup'}>
                    <SignUpPage />
                </Route>

                <Route>
                    {/* <DrawerComponent isLoggedIn={isLoggedIn} mainClicked={mainClicked} location={""} user={user} logout={logout} /> */}
                    <NavigationBar location={'성서봇'} logout={logout} isLoggedIn={isLoggedIn} />
                    <Main />
                </Route>

            </Switch>
        </Router>
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