import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.6);
    color:white;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Card = styled.div`
    width: 90%;
    padding-bottom: 50px !important;
    background: ${props => props.background && props.background};
    color: white;
    z-index: 10;
    margin-top: 25px;
    padding: 10px;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const XButtonContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:flex-end;
`

const XButton = styled.div`
    font-size: 22px;
    /* margin-right: 3px; */
    background: rgba(255,255,255,0.3);
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    border-radius: 50%;
`

const InfoContainer = styled.div`
    width:85%;
    display:flex;
    flex-direction:column;
`

const Row = styled.div`
    display:flex;
    width:100%;
`

const LeftText = styled.div`
    width:30%;
`

const RightText = styled.div`
    width:70%;
`

export default function ({ subject, background, closeDetailView }) {
    console.log('subject: ', subject)
    console.log('background: ', background)
    return <Container>
        <Card background={background}>
            <XButtonContainer>
                <XButton onClick={closeDetailView}>X</XButton>
            </XButtonContainer>
            <InfoContainer>
                <Row>
                    <LeftText>과목명</LeftText>
                    <RightText>{subject[0]}</RightText>
                </Row>
                <Row>
                    <LeftText>장소</LeftText>
                    <RightText>{subject[1]}</RightText>
                </Row>
                <Row>
                    <LeftText>시작시간</LeftText>
                    <RightText>{subject[2]}</RightText>
                </Row>
                <Row>
                    <LeftText>끝나는 시간</LeftText>
                    <RightText>{subject[3]}</RightText>
                </Row>
            </InfoContainer>
        </Card>
    </Container>
}