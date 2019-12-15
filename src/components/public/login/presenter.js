import React from 'react'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import NormalLoading from 'components/global/normalLoading'

const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const Card = styled.div`
    width:90%;
    border:1px solid gainsboro;
    border-radius:7px;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-bottom:50px;

`

const Logo = styled.div`
    display:flex;
    font-size: 20px;
    font-weight: 500;
    color: black;
    margin-top: 48px;
    margin-bottom: 20px;
`


const BigText = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: black;
    margin-bottom: 10px;
`

const NormalText = styled.div`
    margin-bottom: 33px;
    font-size: 12px;
`

const ButtonContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:flex-end;
    padding-right:30px;
`

const LinkText = styled.div`
    margin-bottom:15px;
`

export default function ({ handleInput, id,
    pw, loading, login, handleKeyPress }) {
    return <Container>
        <Card>
            <Link to={'/'}>
                <Logo>
                    성서봇
            </Logo>
            </Link>
            <BigText>로그인</BigText>
            <NormalText>성서봇 계정으로 로그인해주세요</NormalText>
            <TextField name={'id'} value={id} onChange={handleInput} id="outlined-basic" label="아이디" variant="outlined" />
            <TextField onKeyPress={handleKeyPress} name={'pw'} type={'password'} value={pw} onChange={handleInput} id="outlined-basic" label="비밀번호" variant="outlined" />
            <Link to={'/signup'}>
                <LinkText>아직 계정이 없으신가요?</LinkText>
            </Link>
            <ButtonContainer>
                <Button onClick={login} variant="contained" color="primary">
                    로그인
                </Button>
            </ButtonContainer>
        </Card>
        {loading && <NormalLoading />}
    </Container>
}