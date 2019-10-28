import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    width:50%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    position: relative;
    top: 300px;
`

const QRCodeImage = styled.img`
    width:100%;
`

const MarginHeight = styled.div`
    height:10px;
`

const Timer = styled.div`
    font-size: 20px;
    font-weight: 500;
    font-family:'1997';
`

export default function QrcodePresenter({ img, timer }) {
    return <Container className={'qrcodecontainer'}>
        <QRCodeImage src={require('assets/sampleqrcode.png')} />
        <MarginHeight />
        <Timer>{timer}</Timer>
    </Container>


}