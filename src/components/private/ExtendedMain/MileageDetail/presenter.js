import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
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

export default function () {
    return <Container>
        <Image src={require('./images/credit-card.png')} />
        <Text>마일리지</Text>
        <EngText>
            Mileage
        </EngText>
    </Container>
}