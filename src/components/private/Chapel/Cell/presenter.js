import React from 'react';
import styled from 'styled-components';
import CellInfo from './Info';

const ColumnContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    font-family:'applesdBold';
    /* border-bottom:1px solid gainsboro; */
`

const Container = styled.div`
    display:flex;
    align-items:center;
    width:100%;
    height:84px;

`
const Image = styled.img`
    width:69px;
    margin-left: 14px;
    margin-right: 14px;
`
const AttendanceAndDateContainer = styled.div`
    width:60%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    
`

const Attendance = styled.span`
    font-size:15px;
    color:black;
`

const Date = styled.span`
    font-size:13px;
    color:#494747;
    font-family:'applesdLight';
`

const Arrow = styled.i`
    font-size: 17px;
    padding-right: 10px;
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 32px;
    transform: ${props => props.reverse && 'rotate(180deg)'}; 
    transition:0.7s;
`

export default function ({
    sure,
    time,
    year,
    month,
    comment,
    countNumber,
    date,
    day,
    late,
    detail,
    turnDownInfo,
    turnOnInfo,
    first
}) {
    return <ColumnContainer>
        <Container>
            <Image src={late === '출석' ? require('./good.png') : require('./bad.png')} />
            <AttendanceAndDateContainer>
                <Attendance>
                    {late}
                </Attendance>
                <Date>
                    {year}년 {month}월 {day}일
            </Date>
            </AttendanceAndDateContainer>
            {detail ? <Arrow onClick={turnDownInfo} reverse={true} className={'fas fa-sort-down'} /> : <Arrow onClick={turnOnInfo} className={'fas fa-sort-down'} />}


        </Container>
        <CellInfo first={first} detail={detail} />
    </ColumnContainer>

}