import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    
    background:white;
    margin-bottom:20px;
    padding:10px;
    padding-bottom:6px;
    padding-left:13px;
    width:100%;
    box-shadow: 0px 2px 5px -1px rgba(0,0,0,0.75);
`
const RedText = styled.div`
    color:#e74c3c;
`

const Date = styled.div`
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 23px;
    letter-spacing: 0.7px;
`

const Row = styled.div`
    display:flex;
    margin-bottom:11px;
`

const LeftText = styled.div`
    width:20%;
    color:gray;
`

const RightText = styled.div``

const ImageContainer = styled.div`
    display:flex;
    width:100%;
    height:100%;
    align-items:center;
    justify-content:center;
`

const Image = styled.img`
    width:100%;
`

const Left = styled.div`
    width:60%;
`

const Right = styled.div`
    width:30%;
`

export default function ({
    comment,
    countNumber,
    date,
    day,
    late,
    year,
    month,
    time

}) {
    return <Container>
        <Left>
            <Date>{year.substr(2)}/{month}/{day} ({date})</Date>
            <Row>
                <LeftText>시각</LeftText>
                <RightText>{time}</RightText>
            </Row>
            <Row>
                <LeftText>출석</LeftText>
                <RightText>{late ? <RedText>지각</RedText> : '출석 인정'}</RightText>
            </Row>
            <Row>
                <LeftText>비고</LeftText>
                <RightText>{comment}</RightText>
            </Row>
        </Left>
        <Right>
            <ImageContainer>
                <Image src={late ? require('./bad.png') : require('./good.png')} />
            </ImageContainer>
        </Right>
    </Container>
}