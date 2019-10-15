import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:90%;
    align-items:center;
    justify-content:center;
    background:#ecf0f1;
    border-radius:4px;

`

const IconContainer = styled.div`
    position: relative;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    `

const Icon = styled.i`
    position: absolute;
    font-size: 18px;
    left: 10px;
    color: gray;
`

const Input = styled.input`
    border:0;
    background:transparent;
    font-size:20px;
    color:#1F1F1F;
    height:35px;
    width:80%;
    outline:none;
`

const Line = styled.div`
    width:85%;
    background:#7f8c8d;
    height:1px;
    margin-top:4px;
    margin-bottom:4px;

`



const LoginTheme2 = ({
    id,
    password,
    handleInput
}) => <InputContainer>
        <IconContainer>
            <Input id={'id'} name={'id'} onChange={handleInput} value={id} placeholder={'ID'} />
            <Icon className={'fas fa-user'} />
        </IconContainer>
        <Line />
        <IconContainer>
            <Input id={'password'} name={'password'} type={'password'} onChange={handleInput} value={password} placeholder={'password'} />
            <Icon className={'fas fa-lock'} />
        </IconContainer>
    </InputContainer>

export default LoginTheme2;