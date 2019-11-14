import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.9);
    color:white;
    z-index:10;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const XButton = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: rgba(255,255,255,0.3);
    font-size: 20px;
    font-weight: 300;
    margin-top: 30px;
    cursor: pointer;
`

const TextCard = styled.div`
    display:flex;
    flex-direction:column;
    margin-top: 50px;
`

const Row = styled.div`
    display:flex;
`

const Label = styled.div`
    font-size: 13px;
`

const Title = styled.div`
    font-size:21px;
    margin-bottom:20px;
`

const Date = styled.div`
    font-size: 13px;
`

export default function ({ outsideOfDetailViewClicked, event }) {
    console.log('event: ', event)
    return (
        <Container>
            Event Detail View
            <XButton onClick={outsideOfDetailViewClicked}>X</XButton>
            <TextCard>
                <Row>
                    <Title>{event.title}</Title>
                </Row>
                <Row>
                    <Label>From:</Label>
                    <Date>{formatterFromDate(event.start)}</Date>
                </Row>
                <Row>
                    <Label>To:</Label>
                    <Date>{formatterFromDate(event.end)}</Date>
                </Row>
            </TextCard>
        </Container>
    )
}

function formatterFromDate(date) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    return `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분`
}