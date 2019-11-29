import React from 'react'
import styled from 'styled-components'
import { TextField, Button } from '@material-ui/core'
import NormalLoading from 'components/global/normalLoading'

const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
`

export default function ({ handleInput,
    intranetId,
    intranetPassword,
    nextButtonClicked,
    nextButtonDisabled,
    loading
}) {
    return <Container>
        <TextField name={'intranetId'} value={intranetId} onChange={handleInput} id="standard-basic" autoComplete={false} label="인트라넷 아이디" />
        <TextField name={'intranetPassword'} value={intranetPassword} onChange={handleInput} id="standard-basic" autoComplete={false} type={'password'} label="비밀번호" />
        <Button onClick={nextButtonClicked} disabled={nextButtonDisabled} variant={"outlined"} color="primary">다음 단계</Button>

    </Container>
}