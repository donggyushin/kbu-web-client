import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:100%;
    align-items:center;
    display:flex;
    flex-direction:column;
`

const Card = styled.div`
    width:85%;
    min-height:80vh;
    background-color:white;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    margin-top:20px;
    border-radius:5px;
    margin-bottom: 20px;
`

export default function () {
    return <Container>
        <Card>
            페이지 준비중...
        </Card>
    </Container>
}