import React from 'react';
import styled from 'styled-components';
import Cell from './Cell';

const Container = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.55);
    color:white;
    z-index:10;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Card = styled.div`
    width:80%;
    border-radius:15px;
    min-height:73%;
    background:white;
    margin-top:100px;
    display:flex;
    flex-direction:column;
    align-items:center;
    position:relative;
`

const Day = styled.div`
    color:black;
    font-size: 25px;
    font-weight: 200;
    margin-top: 9px;
`

const Date = styled.div`
    color:black;
    font-size:12px;
    margin-top: -5px;
    font-weight: 300;
    border-bottom: 1px solid rgba(0,0,0,0.06);
    width: 90%;
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
`

const XButton = styled.div`
    position:absolute;
    bottom:11px;
    right:11px;
    width:45px;
    height:45px;
    border-radius:50%;
    color:white;
    background:${props => props.backgroundColor};
    display:flex;
    justify-content:center;
    align-items:center;
`

const Icon = styled.i`
    color:white;
    font-size:26px;
`

export default function ({ refer, outsideOfDetailViewClicked, event }) {
    console.log('event: ', event)
    const { from, title, start, end } = event;
    const backgroundColor = get_color(from)
    return (
        <Container>
            <Card ref={refer}>
                <Day>6일</Day>
                <Date>수요일 10월 10일</Date>
                <Cell from={from} title={title} start={start} end={end} />
                <XButton onClick={outsideOfDetailViewClicked} backgroundColor={backgroundColor}>
                    <Icon className={'fas fa-times'} />
                </XButton>
            </Card>
        </Container>
    )
}

function get_color(from) {

    switch (from) {
        case 'google':
            return '#00b894'
        case 'offday':
            return '#e84393'

    }
}




function formatterFromDate(date) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    return `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분`
}