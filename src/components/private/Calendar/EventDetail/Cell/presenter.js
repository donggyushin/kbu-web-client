import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    color:black;
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
`

const Row = styled.div`
    display:flex;
    align-items:center;
    width:100%;
    width: 83%;
    margin-top: 21px;
`

const Circle = styled.div`
    width:6px;
    height:6px;
    border-radius:50%;
    background:${props => props.backgroundColor};
    margin-right: 15px;
`

const Title = styled.div``

const Period = styled.div`
    width: 83%;
    font-size: 12px;
    color: gray;
    margin-left: 38px;
    font-weight: 300;
`

export default function ({ from, title, start, end }) {
    const circle_color = get_color(from)
    return <Container>
        <Row>
            <Circle backgroundColor={circle_color} />
            <Title>{title}</Title>
        </Row>
        <Period>{get_month(start)}월 {get_day(start)}일 - {get_month(end)}월 {get_day(end)}일</Period>
    </Container>
}

function get_color(from) {

    switch (from) {
        case 'google':
            return '#00b894'
        case 'offday':
            return '#e84393'

    }
}

function get_month(date_str) {
    const part = date_str.split('-');
    return part[1]
}

function get_day(date_str) {
    const part = date_str.split('-');
    return part[2]
}