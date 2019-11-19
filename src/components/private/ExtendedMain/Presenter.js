import React from 'react';
import styled from 'styled-components';
import CopyrightComponent from '../Copyright/Copyright';
import StudentID from './StudentID';
import { Link } from 'react-router-dom'

const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Row = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
`

const Column = styled.div`
    display:flex;
    width:60%;
    flex-direction:column;

`

const HorizontalCard = styled.div`
    background:${props => props.isLoggedIn ? 'white' : 'rgba(255,255,255,0.3)'};
    background:${props => props.whatever && 'white'};
    width:100%;
    height:100px;
    box-shadow: 0px 2px 3px 1px rgba(163,163,163,1);
    display:flex;
    &:active {
        background: #dfe4ea;
    }
`
const TextContainer = styled.div`
    width:65%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
const MainText = styled.div`
color:rgba(0, 0, 0, 0.65);
font-family: 'Nanum Gothic',sans-serif;
font-size: 17px;
    font-weight: bolder;
`

const SubText = styled.div`
font-family: 'Nanum Gothic',sans-serif;
font-size: 13px;
    color: #636e72;
`

const IconContainer = styled.div`
    width:35%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const Icon = styled.img`
    width:39px;
    object-fit:cover;
`


const VerticalCard = styled.div`
    background:${props => props.isLoggedIn ? 'white' : 'rgba(255,255,255,0.3)'};
    background:${props => props.whatever && 'white'};
    width:32%;
    height:210px;
    box-shadow: 0px 2px 3px 1px rgba(163,163,163,1);
    &:active {
        background: #dfe4ea;
    }
`
const TextContainerForVerticalCard = styled.div`
    width:100%;
    height:50%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const IconContainerForVerticalCard = styled.div`
    width:100%;
    height:50%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`


const MarginHorizontal = styled.div`
    width:10px;
`

const MarginVertical = styled.div`
    height:10px;
`

const NormalCard = styled.div`
    background:${props => props.isLoggedIn ? 'white' : 'rgba(255,255,255,0.3)'};
    background:${props => props.whatever && 'white'};
    width:46%;
    height:120px;
    display:flex;
    box-shadow: 0px 2px 3px 1px rgba(163,163,163,1);
    &:active {
        background: #dfe4ea;
    }
`

const TextContainerForNomralCard = styled.div`
    width:60%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

const IconContainerForNormalCard = styled.div`
    width:40%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

export default function ExtendedMainPresenter({ studentId,
    touchable,
    askGoToLoginPage,
    TurnOffStudentIDCard,
    TurnOnStudentIDCard,
    user,
    isLoggedIn,
    scheduleClicked,
    mapClicked,
    cafeteriaClicked,
    chapelClicked,
    loading,
    noticeClicked,
    lectureClicked,
    mileageClicked

}) {
    return <Container>
        <MarginVertical />
        <Row>

            <Column>
                {(() => {
                    if (touchable === false) {
                        return <HorizontalCard whatever={true} isLoggedIn={isLoggedIn} >
                            <TextContainer>
                                <MainText>공지사항</MainText>
                                <SubText>Notice</SubText>
                            </TextContainer>
                            <IconContainer>
                                <Icon src={require('assets/notice.png')} />
                            </IconContainer>
                        </HorizontalCard>

                    } else {
                        return <Link onClick={noticeClicked} to={'/notice'}>
                            <HorizontalCard whatever={true} isLoggedIn={isLoggedIn} >
                                <TextContainer>
                                    <MainText>공지사항</MainText>
                                    <SubText>Notice</SubText>
                                </TextContainer>
                                <IconContainer>
                                    <Icon src={require('assets/notice.png')} />
                                </IconContainer>
                            </HorizontalCard>
                        </Link>
                    }
                })()}

                <MarginVertical />
                {(() => {
                    if (touchable === false) {
                        return <HorizontalCard onClick={askGoToLoginPage} isLoggedIn={isLoggedIn} >
                            <TextContainer>
                                <MainText>수업</MainText>
                                <SubText>Lecture</SubText>
                            </TextContainer>
                            <IconContainer>
                                <Icon src={require('assets/lecture.png')} />
                            </IconContainer>
                        </HorizontalCard>
                    } else if (isLoggedIn) {
                        return <Link onClick={lectureClicked} to={'/lecture'}>
                            <HorizontalCard isLoggedIn={isLoggedIn} >
                                <TextContainer>
                                    <MainText>수업</MainText>
                                    <SubText>Lecture</SubText>
                                </TextContainer>
                                <IconContainer>
                                    <Icon src={require('assets/lecture.png')} />
                                </IconContainer>
                            </HorizontalCard>
                        </Link>
                    } else {
                        return <HorizontalCard onClick={askGoToLoginPage} isLoggedIn={isLoggedIn} >
                            <TextContainer>
                                <MainText>수업</MainText>
                                <SubText>Lecture</SubText>
                            </TextContainer>
                            <IconContainer>
                                <Icon src={require('assets/lecture.png')} />
                            </IconContainer>
                        </HorizontalCard>
                    }
                })()}


            </Column>
            <MarginHorizontal />
            {(() => {
                if (touchable === false) {
                    return <div onClick={askGoToLoginPage} style={{
                        width: '32%'
                    }}>
                        <VerticalCard isLoggedIn={isLoggedIn} style={{ width: '100%' }} >
                            <TextContainerForVerticalCard>
                                <MainText>
                                    마일리지
                            </MainText>
                                <SubText>
                                    Mileage
                            </SubText>
                            </TextContainerForVerticalCard>
                            <IconContainerForVerticalCard>
                                <Icon src={require('assets/mileage.png')} />
                            </IconContainerForVerticalCard>
                        </VerticalCard>
                    </div>
                } else if (isLoggedIn) {
                    return <Link onClick={mileageClicked} style={{
                        width: '32%'
                    }} to={'/mileage'}>
                        <VerticalCard isLoggedIn={isLoggedIn} style={{ width: '100%' }} >
                            <TextContainerForVerticalCard>
                                <MainText>
                                    마일리지
                            </MainText>
                                <SubText>
                                    Mileage
                            </SubText>
                            </TextContainerForVerticalCard>
                            <IconContainerForVerticalCard>
                                <Icon src={require('assets/mileage.png')} />
                            </IconContainerForVerticalCard>
                        </VerticalCard>
                    </Link>
                } else {
                    return <div onClick={askGoToLoginPage} style={{
                        width: '32%'
                    }}>
                        <VerticalCard isLoggedIn={isLoggedIn} style={{ width: '100%' }} >
                            <TextContainerForVerticalCard>
                                <MainText>
                                    마일리지
                            </MainText>
                                <SubText>
                                    Mileage
                            </SubText>
                            </TextContainerForVerticalCard>
                            <IconContainerForVerticalCard>
                                <Icon src={require('assets/mileage.png')} />
                            </IconContainerForVerticalCard>
                        </VerticalCard>
                    </div>
                }
            })()}



        </Row>
        <MarginVertical />
        <Row>
            {(() => {
                if (touchable) {
                    return <Link onClick={scheduleClicked} style={{
                        width: '46%'
                    }} to={'/calendar'}>
                        <NormalCard whatever={true} isLoggedIn={isLoggedIn} style={{
                            width: '100%'
                        }}>
                            <TextContainerForNomralCard>
                                <MainText>학사일정</MainText>
                                <SubText>Schedule</SubText>
                            </TextContainerForNomralCard>
                            <IconContainerForNormalCard>
                                <Icon src={require('assets/schedule.png')} />
                            </IconContainerForNormalCard>
                        </NormalCard>
                    </Link>
                } else {
                    return <div style={{
                        width: '46%'
                    }} >
                        <NormalCard whatever={true} isLoggedIn={isLoggedIn} style={{
                            width: '100%'
                        }}>
                            <TextContainerForNomralCard>
                                <MainText>학사일정</MainText>
                                <SubText>Schedule</SubText>
                            </TextContainerForNomralCard>
                            <IconContainerForNormalCard>
                                <Icon src={require('assets/schedule.png')} />
                            </IconContainerForNormalCard>
                        </NormalCard>
                    </div>
                }
            })()}

            <MarginHorizontal />
            {(() => {
                if (touchable === false) {
                    return <div style={{
                        width: '46%'
                    }}>
                        <NormalCard isLoggedIn={isLoggedIn} style={{ width: '100%' }} >
                            <TextContainerForNomralCard>
                                <MainText>채플</MainText>
                                <SubText>Chapel</SubText>
                            </TextContainerForNomralCard>
                            <IconContainerForNormalCard>
                                <Icon src={require('assets/chapel.png')} />
                            </IconContainerForNormalCard>
                        </NormalCard>
                    </div>
                } else if (isLoggedIn === true) {
                    return <Link onClick={chapelClicked} style={{
                        width: '46%'
                    }} to={'/chapel'}>
                        <NormalCard isLoggedIn={isLoggedIn} style={{ width: '100%' }} >
                            <TextContainerForNomralCard>
                                <MainText>채플</MainText>
                                <SubText>Chapel</SubText>
                            </TextContainerForNomralCard>
                            <IconContainerForNormalCard>
                                <Icon src={require('assets/chapel.png')} />
                            </IconContainerForNormalCard>
                        </NormalCard>
                    </Link>
                } else {
                    return <div onClick={askGoToLoginPage} style={{
                        width: '46%'
                    }}>
                        <NormalCard isLoggedIn={isLoggedIn} style={{ width: '100%' }} >
                            <TextContainerForNomralCard>
                                <MainText>채플</MainText>
                                <SubText>Chapel</SubText>
                            </TextContainerForNomralCard>
                            <IconContainerForNormalCard>
                                <Icon src={require('assets/chapel.png')} />
                            </IconContainerForNormalCard>
                        </NormalCard>
                    </div>
                }
            })()}


        </Row>
        <MarginVertical />
        <Row>
            {(() => {
                if (touchable) {
                    return <Link onClick={mapClicked} to={'/map'} style={{ width: '32%' }}>
                        <VerticalCard whatever={true} isLoggedIn={isLoggedIn} style={{ width: '100%' }}>
                            <TextContainerForVerticalCard>
                                <MainText>캠퍼스 맵</MainText>
                                <SubText>Campus Map</SubText>
                            </TextContainerForVerticalCard>
                            <IconContainerForVerticalCard>
                                <Icon src={require('assets/map.png')} />
                            </IconContainerForVerticalCard>
                        </VerticalCard>
                    </Link>
                } else {
                    return <div style={{ width: '32%' }}>
                        <VerticalCard whatever={true} isLoggedIn={isLoggedIn} style={{ width: '100%' }}>
                            <TextContainerForVerticalCard>
                                <MainText>캠퍼스 맵</MainText>
                                <SubText>Campus Map</SubText>
                            </TextContainerForVerticalCard>
                            <IconContainerForVerticalCard>
                                <Icon src={require('assets/map.png')} />
                            </IconContainerForVerticalCard>
                        </VerticalCard>
                    </div>
                }
            })()}

            <MarginHorizontal />
            <Column>
                {(() => {
                    if (touchable === false) {
                        return <HorizontalCard whatever={true} isLoggedIn={isLoggedIn}>
                            <TextContainer>
                                <MainText>교내식당</MainText>
                                <SubText>Cafeteria</SubText>
                            </TextContainer>
                            <IconContainer>
                                <Icon src={require('assets/cafeteria.png')} />
                            </IconContainer>
                        </HorizontalCard>


                    } else {
                        return <Link onClick={cafeteriaClicked} to={'/cafeteria'}>
                            <HorizontalCard whatever={true} isLoggedIn={isLoggedIn}>
                                <TextContainer>
                                    <MainText>교내식당</MainText>
                                    <SubText>Cafeteria</SubText>
                                </TextContainer>
                                <IconContainer>
                                    <Icon src={require('assets/cafeteria.png')} />
                                </IconContainer>
                            </HorizontalCard>
                        </Link>
                    }
                })()}

                <MarginVertical />
                {(() => {

                    if (touchable === false) {
                        return <HorizontalCard isLoggedIn={isLoggedIn}>
                            <TextContainer>
                                <MainText>모바일 학생증</MainText>
                                <SubText>Student ID</SubText>
                            </TextContainer>
                            <IconContainer>
                                <Icon src={require('assets/idcard.png')} />
                            </IconContainer>
                        </HorizontalCard>
                    }
                    else if (isLoggedIn === true) {
                        return <HorizontalCard isLoggedIn={isLoggedIn} onClick={isLoggedIn && TurnOnStudentIDCard} >
                            <TextContainer>
                                <MainText>모바일 학생증</MainText>
                                <SubText>Student ID</SubText>
                            </TextContainer>
                            <IconContainer>
                                <Icon src={require('assets/idcard.png')} />
                            </IconContainer>
                        </HorizontalCard>
                    } else {
                        return <HorizontalCard isLoggedIn={isLoggedIn} onClick={askGoToLoginPage} >
                            <TextContainer>
                                <MainText>모바일 학생증</MainText>
                                <SubText>Student ID</SubText>
                            </TextContainer>
                            <IconContainer>
                                <Icon src={require('assets/idcard.png')} />
                            </IconContainer>
                        </HorizontalCard>
                    }

                })()}


            </Column>
        </Row>
        <CopyrightComponent />
        {studentId && <StudentID loading={loading} user={user} TurnOffStudentIDCard={TurnOffStudentIDCard} />}
    </Container>
}
