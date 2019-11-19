import React from 'react';
import styled from 'styled-components';
import { Row, LeftText, RightText, Attendance, NormalAbsence, Late, ETC } from '../presenter'

const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    overflow:hidden;
`

export default function ({ summary }) {

    return <Container style={{ borderRadius: 7, border: '1px solid white' }}>
        <Row style={{ borderBottom: '1px solid white' }}>
            <Attendance>출석</Attendance>
            <NormalAbsence style={{ borderRight: '1px solid white', borderLeft: '1px solid white' }}>결석</NormalAbsence>
            <Late style={{ borderRight: '1px solid white' }}>지각</Late>
            <ETC>기타</ETC>
        </Row>
        <Row>
            <Attendance>{summary.attendance}</Attendance>
            <NormalAbsence style={{ borderRight: '1px solid white', borderLeft: '1px solid white' }}>{summary.normalAbsence}</NormalAbsence>
            <Late style={{ borderRight: '1px solid white' }}>{summary.late}</Late>
            <ETC>{summary.etcAbsence}</ETC>
        </Row>
    </Container>
}