import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:space-around;
    align-items:center;
    position:relative;
`

const Background = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.1);
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
    font-size:10px;
    color:gray;
`

const Image = styled.img`
    width:40px;
`

export default function ({ redirectToLoginPage }) {
    return <Container onClick={redirectToLoginPage}>
        <Background />
        <Text>
            <Korean>모바일 학생증</Korean>
            <English>Mobile ID Card</English>
        </Text>
        <Image src={require('./images/id.png')} />
    </Container>
}