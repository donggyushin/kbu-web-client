import React from 'react';
import styled from 'styled-components';

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
    min-height:100px;
    background:white;
    margin-top:20px;
`


export default function ({ outsideOfDetailViewClicked, event }) {

    return (
        <Container>
            <Card>
                Detail View
            </Card>
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