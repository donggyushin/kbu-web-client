import React from 'react';
import styled from 'styled-components';
import { Input, Icon, Button } from 'antd';
import NewAccountDrawer from './NewAccountDrawer/NewAccountDrawer';
import VerifyPhoneComponent from './VerifyPhone/VerifyPhone';
import axios from 'axios'
import REST_API_ENDPOINT from 'constants/endpoint';

const Container = styled.div`
    width:100%;
    margin-top:70px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-end;
`

const InputContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:80%;
`

class NewAccount extends React.Component {

    state = {
        id: "",
        password: "",
        password2: "",
        buttonDisabled: true,
        name: "",
        studentId: "",
        phoneNumber: "",
        phoneVerified: false,
        phoneVerifiedButton: true,
        verifiyPhoneNumberView: false

    }


    render() {
        const { id, password, buttonDisabled, password2, name, studentId, phoneNumber,
            phoneVerifiedButton,
            phoneVerified,
            verifiyPhoneNumberView
        } = this.state;
        const { handleInput, turnOnVerifyPhoneComponent, turnDownVerifyPhoneComponent, verifyPhone } = this;
        const {

            turnOnIntranetVerify,
            intranetVerified
        } = this.props;
        const { newAccountButtonClicked } = this;
        return <Container>

            <NewAccountDrawer />
            <InputContainer>
                <Button onClick={turnOnIntranetVerify} disabled={intranetVerified} type={'primary'}>인트라넷 인증</Button>
                <br />
                {phoneVerified ? <Input
                    id={'name'}
                    value={name}
                    name={'name'}
                    className={'input'}
                    onChange={handleInput}
                    placeholder="이름"
                    disabled={true}
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}

                /> : <Input
                        id={'name'}
                        value={name}
                        name={'name'}
                        className={'input'}
                        onChange={handleInput}
                        placeholder="이름"
                        disabled={!intranetVerified}
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}

                    />}

                <br />

                {phoneVerified ? <Input
                    id={'studentId'}
                    value={studentId}
                    name={'studentId'}
                    onChange={handleInput}
                    disabled={true}
                    prefix={<Icon type="idcard" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    className={'input'} placeholder="학번" /> : <Input
                        id={'studentId'}
                        value={studentId}
                        name={'studentId'}
                        onChange={handleInput}
                        disabled={!intranetVerified}
                        prefix={<Icon type="idcard" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        className={'input'} placeholder="학번" />}

                <br />
                {phoneVerified ? <Input
                    id={'id'}
                    value={id}
                    name={'id'}
                    onChange={handleInput}
                    disabled={true}
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    className={'input'} placeholder="아이디" /> : <Input
                        id={'id'}
                        value={id}
                        name={'id'}
                        onChange={handleInput}
                        disabled={!intranetVerified}
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        className={'input'} placeholder="아이디" />}

                <br />
                {phoneVerified ? <Input.Password
                    id={'password'}
                    value={password}
                    name={'password'}
                    onChange={handleInput}
                    disabled={true}
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    className={'input'} placeholder="비밀번호" /> : <Input.Password
                        id={'password'}
                        value={password}
                        name={'password'}
                        onChange={handleInput}
                        disabled={!intranetVerified}
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        className={'input'} placeholder="비밀번호" />}

                <br />
                {phoneVerified ? <Input.Password
                    id={'password2'}
                    value={password2}
                    name={'password2'}
                    onChange={handleInput}
                    disabled={true}
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    className={'input'} placeholder="비밀번호 확인" /> : <Input.Password
                        id={'password2'}
                        value={password2}
                        name={'password2'}
                        onChange={handleInput}
                        disabled={!intranetVerified}
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        className={'input'} placeholder="비밀번호 확인" />}

                <br />
                {phoneVerified ? <Input
                    id={'phoneNumber'}
                    value={phoneNumber}
                    name={'phoneNumber'}
                    onChange={handleInput}
                    disabled={true}
                    prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    className={'input'} placeholder="핸드폰 번호" /> : <Input
                        id={'phoneNumber'}
                        value={phoneNumber}
                        name={'phoneNumber'}
                        onChange={handleInput}
                        disabled={!intranetVerified}
                        prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        className={'input'} placeholder="핸드폰 번호" />}

                <br />
                {phoneVerified === false && <Button onClick={turnOnVerifyPhoneComponent} className={'button'} disabled={phoneVerifiedButton} type={"primary"}>핸드폰 번호 인증</Button>}

                <br />
                <br />
                <Button className={'button'} disabled={buttonDisabled} onClick={newAccountButtonClicked} type={"primary"}>회원가입</Button>
            </InputContainer>
            {verifiyPhoneNumberView && <VerifyPhoneComponent
                verifyPhone={verifyPhone}
                name={name}
                studentId={studentId}
                phoneNumber={phoneNumber}
                turnDownVerifyPhoneComponent={turnDownVerifyPhoneComponent}

            />

            }
        </Container>
    }

    newAccountButtonClicked = () => {
        const { name, studentId, id, password, phoneNumber } = this.state;
        axios.post(REST_API_ENDPOINT + `user/`, {
            name,
            studentId,
            id,
            password,
            phoneNumber
        })
            .then(res => res.data)
            .then(data => {
                const { ok, error, token } = data;
                if (ok) {
                    window.localStorage.setItem('token', token)
                    window.location.href = "/"
                } else {
                    alert(error)
                }
            })
            .catch(err => console.error(err))
    }

    verifyPhone = () => {
        this.setState({
            phoneVerified: true,
            buttonDisabled: false
        })
        console.log('here!')
        console.log(this.state.buttonDisabled)
        this.turnDownVerifyPhoneComponent();
    }


    turnOnVerifyPhoneComponent = () => {
        this.setState({
            verifiyPhoneNumberView: true
        })
    }

    turnDownVerifyPhoneComponent = () => {
        this.setState({
            verifiyPhoneNumberView: false,

        })
    }




    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        const { phoneVerified } = this.state;

        // 핸드폰 인증을 완료해놓고 핸드폰 번호를 바꾸면 핸드폰 verified 를 취소시킴
        if (phoneVerified) {
            if (e.target.name === 'phoneNumber') {
                this.setState({
                    phoneVerified: false
                })
            }
        }


        const id = document.getElementById('id').value;
        const password = document.getElementById('password').value;
        const password2 = document.getElementById('password2').value;
        const studentId = document.getElementById('studentId').value;
        const name = document.getElementById('name').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        // 핸드폰 본인 인증 버튼 활성화 체크
        if (phoneNumber.length === 11) {
            // 인트라넷 실제 정보와 유저가 기입한 정보가 서로 어느정도 일치하는지 확인 후 
            // phoneVerifiedButton을 false로 바꿔주고 그렇지 않은 경우에는 모두
            // true 로 바꿔준다.
            this.setState({
                phoneVerifiedButton: false
            })
        } else {
            this.setState({
                phoneVerifiedButton: true
            })
        }

        if (phoneVerified && id.length >= 4 && password.length >= 8 && password2.length >= 8 && studentId.length >= 9 && name.length >= 1 && phoneNumber.length >= 10) {
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

export default NewAccount;