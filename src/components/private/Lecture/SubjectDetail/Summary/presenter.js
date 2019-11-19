import React from 'react';
import styled from 'styled-components';
import { Row, LeftText, RightText } from '../presenter'

const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
`

export default function ({ summary }) {

    return <Container>
        <Row>
            <LeftText>출석</LeftText>
            <RightText>{summary.attendance}</RightText>
        </Row>
        <Row>
            <LeftText>일반결석</LeftText>
            <RightText>{summary.normalAbsence}</RightText>
        </Row>
        <Row>
            <LeftText>지각</LeftText>
            <RightText>{summary.late}</RightText>
        </Row>
        <Row>
            <LeftText>기타</LeftText>
            <RightText>{summary.etcAbsence}</RightText>
        </Row>
    </Container>
}