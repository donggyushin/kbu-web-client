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
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
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
font-size:11px;
color:gray;
`

const Image = styled.img`
width:40px;
`

export default function ({ redirectToLoginPage }) {
    return <Container onClick={() => { redirectToLoginPage('/lecture') }}>
        <Background />
        <Text>
            <Korean>수업</Korean>
            <English>Lecture</English>
        </Text>
        <Image src={require('./images/teaching.png')} />
    </Container>
}