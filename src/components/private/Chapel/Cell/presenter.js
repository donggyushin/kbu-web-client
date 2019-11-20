import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    align-items:center;
    border-bottom:1px solid gainsboro;
    margin-bottom:11px;
    padding-bottom:5px;
    font-size:16px;
    height:50px;
    
`

const Count = styled.div`
    width: 10%;
`

const DateAndRemarkContainer = styled.div`
    display:flex;
    flex-direction:column;
    width: 75%;
`

const Row = styled.div`
    display:flex;
`

const Date = styled.div`
    margin-right:10px;
`

const Day = styled.div``

const Remark = styled.div`
    font-size:11px;
`

const Late = styled.div``

const RedText = styled.div`
    color:#eb4d4b;
`


export default function ({
    comment,
    countNumber,
    date,
    day,
    late
}) {
    return <Container>
        <Count>{countNumber}.</Count>
        <DateAndRemarkContainer>
            <Row>
                <Date>{date}</Date>
                <Day>{day}</Day>
            </Row>
            <Remark>{comment}</Remark>
        </DateAndRemarkContainer>
        <Late>{late ? <RedText>지각</RedText> : '출석'}</Late>

    </Container>
}