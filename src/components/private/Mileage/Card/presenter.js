import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width:69%;
    height:65%;
    background:white;
    border-radius:19px;
    box-shadow: 0px 13px 34px -8px rgba(0,0,0,0.75);
    display:flex;
    flex-direction:column;
    align-items:center;
    overflow:hidden;
`

const Top = styled.div`
    background: #353b48;
    width:100%;
    height:65%;
    color:white;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding:20px;
    padding-left:15px;
    padding-right:15px;
`

const ThickText = styled.div`
    font-weight:500;
`

const PointAndGrayTextContainer = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
    align-items:center;
`

const GrayText = styled.div`
    color:gainsboro;
    font-size:11px;
`

const Point = styled.div`
    color:#f1c40f;
    font-weight:600;
`

const Bottom = styled.div`
    width:100%;
    height:35%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const Text = styled.div`
    font-size:12px;
`

export default function () {
    return <Container>
        <Top>
            <ThickText>KBU mart</ThickText>
            <PointAndGrayTextContainer>
                <GrayText>사용가능 마일리지</GrayText>
                <Point>3,000 P</Point>
            </PointAndGrayTextContainer>
        </Top>
        <Bottom>
            <Text>바코드 결제기능을 준비중입니다. </Text>
        </Bottom>
    </Container>
}