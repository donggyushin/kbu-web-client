import React from 'react'
import styled from 'styled-components'
import Clock from 'react-clock'
import 'react-clock/dist/Clock.css';

const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;

`

// const Clock = styled.img`
//     width:49px;
// `

const Button = styled.div`
    background:${props => props.background && props.background};
    color:white;
    padding-left:4px;
    padding-right:4px;
    border-radius:4px;
    margin-top:10px;
`

const Timer = styled.div`
    color:black;
    margin-bottom:10px;
`

export default function ({
    clockMessage,
    date,
    currentLecture
}) {
    return <Container>
        {/* <Clock src={require('./images/clock.png')} /> */}
        <Clock
            value={date}
            size={50}
            minuteMarksWidth={0}
            hourMarksWidth={0}
            hourHandWidth={2}
        />
        <Button background={currentLecture.background}>{currentLecture.name}</Button>
        <Timer>{clockMessage}</Timer>
    </Container>
}