import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    height:100%;
    position:relative;
    justify-content:center;
`

const Background = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.1);
`

const Image = styled.img`
    width:100px;
`

const Text = styled.div`
    font-size: 13px;
    font-weight: 700;
    color: black;
`

const EngText = styled.div`
    font-size:11px;
    color:gray;
`

export default function ({ redirectToLoginPage }) {
    return <Container onClick={() => { redirectToLoginPage('/mileage') }}>
        <Background />
        <Image src={require('./images/credit-card.png')} />
        <Text>마일리지</Text>
        <EngText>
            Mileage
        </EngText>
    </Container>
}