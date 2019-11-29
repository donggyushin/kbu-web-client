import React from 'react'
import styled from 'styled-components'
import { Button, TextField } from '@material-ui/core'
import NormalLoading from 'components/global/normalLoading'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    position:relative;
`

export default function ({
    id,
    password,
    handleInput,
    newAccountButtonDisabled,
    newAccountButtonClicked,

}) {
    return <Container>
        <TextField value={id} onChange={handleInput} name={'id'} label={'아이디'} />
        <TextField value={password} onChange={handleInput} name={'password'} type={'password'} label={'비밀번호'} />
        <Button onClick={newAccountButtonClicked} disabled={newAccountButtonDisabled} variant={"outlined"} color="primary">회원가입</Button>

    </Container>
}