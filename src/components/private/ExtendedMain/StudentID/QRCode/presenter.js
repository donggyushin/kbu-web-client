import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    width:85%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    position: relative;
    top: 300px;
    color:black;
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
    margin-top:-15px;
`

export default function QrcodePresenter({ img, timer,
    qrcodeImgUrl,
    loading
}) {
    return <Container className={'qrcodecontainer'}>
        {loading ? 'QR code 읽어오는중...' : <>
            <QRCodeImage src={qrcodeImgUrl} />

            <Timer>{timer}</Timer>
        </>}
    </Container>


}