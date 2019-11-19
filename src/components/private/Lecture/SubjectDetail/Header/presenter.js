import React from 'react';
import styled from 'styled-components';
import { Date, Time, ETC, Late, NormalAbsence, Attendance } from '../presenter'

const Container = styled.div`
    width:100%;
    display:flex;
    align-items:center;
`

export default function () {
    return <Container>
        <Date style={{
            borderBottom: '1px solid white',
            borderRight: '1px solid white'
        }}>날짜</Date>
        <Attendance style={{
            borderBottom: '1px solid white',
            borderRight: '1px solid white'
        }}>출석</Attendance>
        <NormalAbsence style={{
            borderBottom: '1px solid white',
            borderRight: '1px solid white'
        }}>결석</NormalAbsence>
        <Late style={{
            borderBottom: '1px solid white',
            borderRight: '1px solid white'
        }}>지각</Late>
        <ETC style={{
            borderBottom: '1px solid white'
        }}>기타</ETC>
    </Container>
}