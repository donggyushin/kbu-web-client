import React from 'react'
import styled, { keyframes } from 'styled-components'

const ShowUp = keyframes`
    from {
        top:1000px;
    }
    to {
        top:0;
    }
`

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    z-index: 3;
    display:flex;
    flex-direction:column;
    align-items:center;
    animation:${ShowUp} 0.5s linear;
`
const Header = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:80px;
`

const BigText = styled.span`
    font-size:21px;
    margin-left:15px;
    margin-bottom:7px;
    font-weight:600;
    color:black;
`

const XIcon = styled.i`
    font-size:20px;
    margin-right:17px;
    color:black;
`


const Timer = styled.span`
    font-size:17px;
    color:black;
    margin-top:26px;
    margin-bottom:50px;
`

const QrCodeImage = styled.img`
    width:60%;
`

const Rectangle1 = styled.img`
    width:100%;
`

const MobileText = styled.img``

export default function ({ img, loading, timer,
    closeButtonClicked }) {
    return <Container>
        <Header>
            <BigText>모바일 학생증</BigText>
            <XIcon onClick={closeButtonClicked} className={'fas fa-times'} />
        </Header>
        <Rectangle1 src={require('./images/Rectangle1.png')} />
        <Timer>{timer}</Timer>
        <QrCodeImage src={img} />
    </Container>
}