import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    display:flex;
    align-items:center;
    width:80%;
`

const Input = styled.input`
    padding-left: 36px;
    background: black;
    color: white;
    border: 0;
    height: 42px;
    width: 100%;
    border-radius: 4.2px;
    font-size: 19px;
`

const Icon = styled.i`
    position: absolute;
    font-size: 18px;
    left: 10px;
    color: gray;
`

const InputComponent = ({ placeholder, iconClassName }) => <Container>
    <Input placeholder={placeholder} />
    <Icon className={iconClassName} />
</Container>

export default InputComponent