import React from 'react';
import styled from 'styled-components';
import { Input, Tooltip, Icon, Button } from 'antd';
import LoginDrawer from './LoginDrawer/LoginDrawer';
import axios from 'axios'
import REST_API_ENDPOINT from 'constants/endpoint';
import { generateJsonWebToken } from 'utils/jsonwebtoken';



const Container = styled.div`
    width:100%;
    height:85vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const InputContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:80%;
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
            <LoginDrawer />
            <InputContainer>
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
                <br />
                <Input.Password
                    id={'password'}
                    value={password}
                    name={'password'}
                    onChange={handleInput}
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    className={'input'} placeholder="비밀번호" />

                <br />
                <br />
                <Button onClick={loginButtonClicked} className={'button'} disabled={buttonDisabled} type={"primary"}>LOGIN</Button>
            </InputContainer>
        </Container>
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