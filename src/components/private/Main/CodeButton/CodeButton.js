import React from 'react';
import styled from 'styled-components';

const Container = styled.button`  
    background: #1e3799;
    color: white;
    border: 0;
    border-radius: 5px;
    font-size: 29px;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 5px;
    padding-bottom: 5px;
    font-weight: 600;
    cursor: pointer;

`

const CodeButton = ({ QRCodeOn }) => <Container onClick={QRCodeOn}>
    CODE
</Container>

export default CodeButton