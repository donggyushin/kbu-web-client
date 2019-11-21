import React from 'react';
import styled from 'styled-components';
import { Input, Tooltip, Icon, Button } from 'antd';
import axios from 'axios'
import REST_API_ENDPOINT from 'constants/endpoint';
import { generateJsonWebToken } from 'utils/jsonwebtoken';
import NormalLoading from 'components/global/normalLoading';
import { Link } from 'react-router-dom'
import InfoModal from 'components/global/Modal';
import { connect } from 'react-redux'
import { loginUser } from 'actions/userAction'

const Container = styled.div`
    width:100%;
    height: 110vh;
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


const LinkToSignUp = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 22px;
    font-size: 18px;
`


class Login2Component extends React.Component {

    state = {
        id: "",
        password: "",
        buttonDisabled: true,
        loginLoading: false
    }

    componentDidMount() {
        if (this.props.isLoggedIn) {
            InfoModal('경고', '로그인 한 유저는 들어올 수 없는 페이지입니다. ', () => {
                window.location.href = '/'
            })
        }
    }


    render() {
        const { id, password, buttonDisabled, loginLoading } = this.state;
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
                <Link to={'/signup'}>
                    <LinkToSignUp>아직 회원이 아니신가요?</LinkToSignUp>
                </Link>
            </InputContainer>
            {loginLoading && <NormalLoading />}
        </Container>
    }

    onEnterPressed = e => {
        if (e.key === 'Enter') {
            this.loginButtonClicked();
        }
    }

    loginButtonClicked = () => {
        const { id, password } = this.state;
        this.setState({
            loginLoading: true
        })
        axios.post(REST_API_ENDPOINT + `user/login`, {
            id,
            password
        }).then(res => res.data)
            .then(result => {
                if (result.is_ok) {
                    const token = generateJsonWebToken(id, password);
                    console.log('token: ', token);
                    this.setState({
                        loginLoading: false
                    })
                    window.localStorage.setItem('token', token)
                    window.location.href = '/'
                } else {
                    InfoModal('로그인에 실패하였습니다. ', result.result)

                    this.setState({
                        password: "",
                        loginLoading: false
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

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    }
}

export default connect(mapStateToProps, {
    loginUser
})(Login2Component);