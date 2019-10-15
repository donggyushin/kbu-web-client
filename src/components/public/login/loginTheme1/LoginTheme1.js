import React from 'react';
import styled from 'styled-components';
import InputComponent from 'components/input/InputComponent';

const InputContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    align-items:center;
    justify-content:center;
`

const Margin = styled.div`
    height:29px;
`

const LoginTheme1 = () => <InputContainer>
    <InputComponent placeholder={'ID'} iconClassName={'far fa-user'} />
    <Margin />
    <InputComponent placeholder={'Password'} iconClassName={'fas fa-lock'} />
</InputContainer>

export default LoginTheme1;