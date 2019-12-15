import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height:30vh;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`

const Image = styled.img`
    width:40%;
`

export default function () {
    return <Container>
        <Image src={require('./images/notice.png')} />
    </Container>
}