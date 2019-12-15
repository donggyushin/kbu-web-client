import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
`

const Text = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Korean = styled.div`
font-size: 13px;
    font-weight: 700;
    color: black;
`

const English = styled.div`
font-size: 11px;
    color: gray;
`

const Image = styled.img`
    width:40px;
`

export default function () {
    return <Container>
        <Text>
            <Korean>공지사항</Korean>
            <English>Notice</English>
        </Text>
        <Image src={require('./images/megaphone.png')} />
    </Container>
}