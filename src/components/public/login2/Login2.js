import React from 'react';
import styled from 'styled-components';
import { Input, Tooltip, Icon, Button } from 'antd';
import LoginDrawer from './LoginDrawer/LoginDrawer';
import axios from 'axios'
import REST_API_ENDPOINT from 'constants/endpoint';
import { generateJsonWebToken } from 'utils/jsonwebtoken';
import ThemeColor from 'constants/themeColor';




const Container = styled.div`
    width:100%;
    height: 100vh;
    display:flex;
    padding-top:85px;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    background:white;
    padding-bottom:150px;
`

const InputContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:80%;
`
const LogoContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-bottom: 43px;
    /* position: relative; */
    /* bottom: 73px; */
`

const CustomButton = styled.button`
    background: ${props => props.disabled ? '#b2bec3' : '#0984e3'} ;
    border: 0;
    color: white;
    height: 71px;
    font-size: 25px;
    border-radius: 4px;
`


const KbuCardLogo = styled.img`
    width: 150px;
`

const LogoText = styled.div`
    color:${ThemeColor.theme};
    font-size: 26px;
    font-weight: 600;
    color: white;
    font-size: 26px;
    font-weight: 600;
    display:flex;
    justify-content:center;
    font-family: baemin;
    font-size: 33px;
`


class Login2Component extends React.Component {

    state = {
        id: "",
        password: "",
        buttonDisabled: true
    }

    render() {
        const { id, password, buttonDisabled } = this.state;
        const { handleInput, loginButtonClicked } = this;
        return <Container>
            {/* <LoginDrawer /> */}
            <InputContainer>

                <LogoContainer>
                    {/* <LogoText>성서봇2</LogoText> */}
                    <KbuCardLogo src={require('../../../assets/logo.png')} />
                </LogoContainer>
                <Input
                    id={'id'}
                    value={id}
                    name={'id'}
                    className={'input'}
                    onChange={handleInput}
                    placeholder="아이디"
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    suffix={
                        <Tooltip title="Extra information">
                            <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                    }
                />
                <br />

                <Input.Password
                    id={'password'}
                    value={password}
                    onKeyDown={this.onEnterPressed}
                    name={'password'}
                    onChange={handleInput}
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    className={'input'} placeholder="비밀번호" />

                <br />
                <br />

                <CustomButton onClick={loginButtonClicked} disabled={buttonDisabled}>LOGIN</CustomButton>
            </InputContainer>
        </Container>
    }

    onEnterPressed = e => {
        if (e.key === 'Enter') {
            this.loginButtonClicked();
        }
    }

    loginButtonClicked = () => {
        const { id, password } = this.state;
        axios.post(REST_API_ENDPOINT + `user/login`, {
            id,
            password
        }).then(res => res.data)
            .then(result => {
                console.log(result);
                if (result.is_ok) {
                    const token = generateJsonWebToken(id, password);
                    console.log('token: ', token);
                    window.localStorage.setItem('token', token)
                    window.location.href = '/'
                } else {
                    alert(result.result)
                    this.setState({
                        id: "",
                        password: ""
                    })
                    return;
                }

            })
            .catch(err => console.error(err.message))
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        const id = document.getElementById('id').value;
        const password = document.getElementById('password').value;
        if (id.length >= 4 && password.length >= 4) {
            this.setState({
                buttonDisabled: false
            })
        } else {
            this.setState({
                buttonDisabled: true
            })
        }
    }
}

export default Login2Component;