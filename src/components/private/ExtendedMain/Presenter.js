import React from 'react';
import styled from 'styled-components';
import CopyrightComponent from '../Copyright/Copyright';
import StudentID from './StudentID';
import { Link } from 'react-router-dom'
import ChapelDetail from './ChapelDetail';
import MileageDetail from './MileageDetail';
import NoticeDetail from './NoticeDetail'
import CafeteriaDetail from './CafeteriaDetail';
import MobileCardDetail from './MobileCardDetail';
import LectureDetail from './LectureDetail';
import ScheduleDetail from './ScheduleDetail';
import NotLoggedInChapelCard from './NotLoggedInChapel';
import NotLoggedInMileage from './NotLoggedInMileage';
import NotLoggedInMobileCard from './NotLoggedInMobileCard';
import NotLoggedInLecture from './NotLoggedInLecture';
import ExtendedQrCode from './ExtendedQrCode';
import TodaysPrayerDetail from './TodaysPrayerDetail';

const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
`


const MarginVertical = styled.div`
    height:10px;
`

const Row = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:100%;
    padding-left:10px;
    padding-right:10px;
    margin-bottom:6px;
`

const CardTypeOne = styled.div`
    background:white;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    box-shadow: 0px 2px 3px 1px rgba(163,163,163,1);
    height:${props => props.cardTypeOneHeight + 'px'};
`

const CardTypeTwo = styled.div`
    height:${props => props.cardTypeTwoHeight + 'px'};
    background:white;
    width:100%;
    box-shadow: 0px 2px 3px 1px rgba(163,163,163,1);
`

const CardTypeThreeContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:60%;
`

const CardTypeThree = styled.div`
    width:100%;
    background:white;
    box-shadow: 0px 2px 3px 1px rgba(163,163,163,1);
    height:${props => parseInt(props.cardTypeTwoHeight / 2) - 3 + 'px'};
`

const Height = styled.div`
    height:6px;
`

const CardTypeFour = styled.div`
    width:100%;
    background:white;
    box-shadow: 0px 2px 3px 1px rgba(163,163,163,1);
    height:${props => props.cardTypeFourHeight + 'px'};
`

export default function ExtendedMainPresenter({ studentId,
    TurnOffStudentIDCard,
    TurnOnStudentIDCard,
    user,
    loading,
    cardTypeOneHeight,
    cardTypeTwoHeight,
    cardTypeFourHeight,
    redirectToLoginPage,
    extendedQrCode,
    chapelTime
}) {

    return <Container>
        <MarginVertical />
        {chapelTime && <TodaysPrayerDetail />}
        <Row>
            {user.sid ? <Link style={{
                width: '49%'
            }} to={'/chapel'}>
                <CardTypeOne cardTypeOneHeight={cardTypeOneHeight}>
                    <ChapelDetail user={user} />
                </CardTypeOne>
            </Link> : <div style={{ width: '49%' }}>
                    <CardTypeOne cardTypeOneHeight={cardTypeOneHeight}>
                        <NotLoggedInChapelCard redirectToLoginPage={redirectToLoginPage} />
                    </CardTypeOne>
                </div>}
            {user.sid ? <Link to={'/mileage'} style={{ width: '49%' }}>
                <CardTypeOne style={{
                    justifyContent: 'center'
                }} cardTypeOneHeight={cardTypeOneHeight}>
                    <MileageDetail />
                </CardTypeOne>
            </Link> : <div style={{ width: '49%' }}>
                    <CardTypeOne style={{
                        justifyContent: 'center'
                    }} cardTypeOneHeight={cardTypeOneHeight}>
                        <NotLoggedInMileage redirectToLoginPage={redirectToLoginPage} />
                    </CardTypeOne>
                </div>}

        </Row>
        <Row>
            <Link to={'/notice'} style={{ width: '38%' }}>
                <CardTypeTwo cardTypeTwoHeight={cardTypeTwoHeight}>
                    <NoticeDetail />
                </CardTypeTwo>
            </Link>
            <CardTypeThreeContainer>
                <Link to={'/cafeteria'} style={{ width: '100%' }}>
                    <CardTypeThree cardTypeTwoHeight={cardTypeTwoHeight}>
                        <CafeteriaDetail />
                    </CardTypeThree>
                </Link>
                <Height />
                <CardTypeThree cardTypeTwoHeight={cardTypeTwoHeight}>
                    {user.sid ? <MobileCardDetail TurnOnStudentIDCard={TurnOnStudentIDCard} /> :
                        <NotLoggedInMobileCard redirectToLoginPage={redirectToLoginPage} />}

                </CardTypeThree>
            </CardTypeThreeContainer>
        </Row>
        <Row>
            {user.sid ? <Link style={{
                width: '49%'
            }} to={'/lecture'}>
                <CardTypeFour cardTypeFourHeight={cardTypeFourHeight}>
                    <LectureDetail />
                </CardTypeFour>
            </Link> : <div style={{ width: '49%' }}>
                    <CardTypeFour cardTypeFourHeight={cardTypeFourHeight}>
                        <NotLoggedInLecture redirectToLoginPage={redirectToLoginPage} />
                    </CardTypeFour>
                </div>}

            <Link style={{
                width: '49%'
            }}
                to={'/calendar'}
            >
                <CardTypeFour cardTypeFourHeight={cardTypeFourHeight}>
                    <ScheduleDetail />
                </CardTypeFour>
            </Link>
        </Row>

        <CopyrightComponent />
        {studentId && <StudentID loading={loading} user={user} TurnOffStudentIDCard={TurnOffStudentIDCard} />}
        {extendedQrCode && <ExtendedQrCode />}
    </Container>
}
