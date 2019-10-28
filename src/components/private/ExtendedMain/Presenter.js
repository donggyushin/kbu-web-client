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
    background:white;
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
    background:white;
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
    background:white;
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
    TurnOffStudentIDCard,
    TurnOnStudentIDCard,
    user,
    sheduleClicked,
    campusMapClicked
}) {
    return <Container>
        <MarginVertical />
        <Row>
            <Column>
                <HorizontalCard>
                    <TextContainer>
                        <MainText>공지사항</MainText>
                        <SubText>Notice</SubText>
                    </TextContainer>
                    <IconContainer>
                        <Icon src={require('assets/notice.png')} />
                    </IconContainer>
                </HorizontalCard>
                <MarginVertical />
                <HorizontalCard>
                    <TextContainer>
                        <MainText>수업</MainText>
                        <SubText>Lecture</SubText>
                    </TextContainer>
                    <IconContainer>
                        <Icon src={require('assets/lecture.png')} />
                    </IconContainer>
                </HorizontalCard>
            </Column>
            <MarginHorizontal />
            <VerticalCard>
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
        </Row>
        <MarginVertical />
        <Row>
            <NormalCard onClick={sheduleClicked}>
                <TextContainerForNomralCard>
                    <MainText>학사일정</MainText>
                    <SubText>Schedule</SubText>
                </TextContainerForNomralCard>
                <IconContainerForNormalCard>
                    <Icon src={require('assets/schedule.png')} />
                </IconContainerForNormalCard>
            </NormalCard>

            <MarginHorizontal />
            <NormalCard >
                <TextContainerForNomralCard>
                    <MainText>학적</MainText>
                    <SubText>Register</SubText>
                </TextContainerForNomralCard>
                <IconContainerForNormalCard>
                    <Icon src={require('assets/register.png')} />
                </IconContainerForNormalCard>
            </NormalCard>
        </Row>
        <MarginVertical />
        <Row>

            <VerticalCard onClick={campusMapClicked}>
                <TextContainerForVerticalCard>
                    <MainText>캠퍼스 맵</MainText>
                    <SubText>Campus Map</SubText>
                </TextContainerForVerticalCard>
                <IconContainerForVerticalCard>
                    <Icon src={require('assets/map.png')} />
                </IconContainerForVerticalCard>
            </VerticalCard>

            <MarginHorizontal />
            <Column>
                <HorizontalCard >
                    <TextContainer>
                        <MainText>교내식당</MainText>
                        <SubText>Cafeteria</SubText>
                    </TextContainer>
                    <IconContainer>
                        <Icon src={require('assets/cafeteria.png')} />
                    </IconContainer>
                </HorizontalCard>
                <MarginVertical />
                <HorizontalCard onClick={TurnOnStudentIDCard} >
                    <TextContainer>
                        <MainText>모바일 학생증</MainText>
                        <SubText>Student ID</SubText>
                    </TextContainer>
                    <IconContainer>
                        <Icon src={require('assets/idcard.png')} />
                    </IconContainer>
                </HorizontalCard>
            </Column>
        </Row>
        <CopyrightComponent />
        {studentId && <StudentID user={user} TurnOffStudentIDCard={TurnOffStudentIDCard} />}
    </Container>
}
