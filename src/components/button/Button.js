import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
    background:${props => props.disabled ? 'transparent' : '#2980b9'} ;
    color:${props => props.disabled ? 'gray' : '#1F1F1F'};
    border:0;
    width: 92px;
    height: 30px;
    font-weight:500;
    outline:none;
    font-size: 15px;
    cursor: ${props => props.disabled ? 'default' : 'pointer'};
`

const ButtonComponent = ({ text, buttonDisabled }) => <Container disabled={buttonDisabled}>{text}</Container>

export default ButtonComponent