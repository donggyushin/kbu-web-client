import React from 'react'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

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

export default function ({ slide }) {
    return <Container>
        <Card>
            <Link to={'/'}>
                <Logo>
                    성서봇
            </Logo>
            </Link>
            <BigText>회원가입</BigText>
            <NormalText>인트라넷 계정으로 인증해주세요</NormalText>
            <TextField id="outlined-basic" label="인트라넷 아이디" variant="outlined" />
            <TextField type={'password'} id="outlined-basic" label="인트라넷 비밀번호" variant="outlined" />
            <Link to={'/login'}>
                <LinkText>계정이 이미 있으신가요?</LinkText>
            </Link>
            <ButtonContainer>
                <Button onClick={slide} variant="contained" color="primary">
                    다음
                </Button>
            </ButtonContainer>
        </Card>
    </Container>
}