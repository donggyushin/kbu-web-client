import React from 'react';
import styled from 'styled-components';
import { Input, Tooltip, Icon, Button } from 'antd';
import NewAccountDrawer from './NewAccountDrawer/NewAccountDrawer';
import VerifyPhoneComponent from './VerifyPhone/VerifyPhone';

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

    }


    render() {
        const { id, password, buttonDisabled, password2, name, studentId, phoneNumber,
            phoneVerifiedButton,
            phoneVerified,
        } = this.state;
        const { handleInput } = this;
        const {
            turnDownVerifyPhoneComponent,
            turnOnVerifyPhoneComponent
        } = this.props;
        return <Container>

            <NewAccountDrawer />
            <InputContainer>
                <Input
                    id={'name'}
                    value={name}
                    name={'name'}
                    className={'input'}
                    onChange={handleInput}
                    placeholder="이름"
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                // suffix={
                //     <Tooltip title="Extra information">
                //         <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                //     </Tooltip>
                // }
                />
                <br />
                <Input
                    id={'studentId'}
                    value={studentId}
                    name={'studentId'}
                    onChange={handleInput}
                    prefix={<Icon type="idcard" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    className={'input'} placeholder="학번" />
                <br />
                <Input
                    id={'id'}
                    value={id}
                    name={'id'}
                    onChange={handleInput}
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    className={'input'} placeholder="아이디" />
                <br />
                <Input.Password
                    id={'password'}
                    value={password}
                    name={'password'}
                    onChange={handleInput}
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    className={'input'} placeholder="비밀번호" />
                <br />
                <Input.Password
                    id={'password2'}
                    value={password2}
                    name={'password2'}
                    onChange={handleInput}
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    className={'input'} placeholder="비밀번호 확인" />
                <br />
                <Input
                    id={'phoneNumber'}
                    value={phoneNumber}
                    name={'phoneNumber'}
                    onChange={handleInput}
                    disabled={phoneVerified}
                    prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    className={'input'} placeholder="핸드폰 번호" />
                <br />
                {phoneVerified === false && <Button onClick={turnOnVerifyPhoneComponent} className={'button'} disabled={phoneVerifiedButton} type={"primary"}>핸드폰 번호 인증</Button>}

                <br />
                <br />
                <Button className={'button'} disabled={buttonDisabled} type={"primary"}>LOGIN</Button>
            </InputContainer>

        </Container>
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