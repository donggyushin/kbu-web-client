import React from 'react';
import styled from 'styled-components';
import { Date, Time, ETC, Late, NormalAbsence, Attendance } from '../presenter'

const Container = styled.div`
    width:90%;
    display:flex;
    align-items:center;
    height:21px !important;
    flex-shrink:0;
    margin-top:20px;
    border-top-right-radius: 7px;
    border-left: 1px solid white;
    border-top: 1px solid white;
    border-top-left-radius: 7px;
    border-right: 1px solid white;
`

export default function () {
    return <Container className={'height25'}>
        <Date style={{

            borderRight: '1px solid white'
        }}>날짜</Date>
        <Attendance style={{

            borderRight: '1px solid white'
        }}>출석</Attendance>
        <NormalAbsence style={{

            borderRight: '1px solid white'
        }}>결석</NormalAbsence>
        <Late style={{

            borderRight: '1px solid white'
        }}>지각</Late>
        <ETC style={{

        }}>기타</ETC>
    </Container>
}