import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;

`

const Clock = styled.img`
    width:49px;
`

const Timer = styled.div`
    color:black;
    margin-bottom:10px;
`

export default function ({ clockMessage }) {
    return <Container>
        <Clock src={require('./images/clock.png')} />
        <Timer>{clockMessage}</Timer>
    </Container>
}