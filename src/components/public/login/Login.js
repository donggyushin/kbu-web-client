import React from 'react';
import styled from 'styled-components';
import InputComponent from 'components/input/InputComponent';
import ButtonComponent from 'components/button/Button';
import LoginTheme1 from './loginTheme1/LoginTheme1';
import LoginTheme2 from './loginTheme2/LoginTheme2';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    min-height:100vh;
`
const Margin = styled.div`
    height:29px;
`




class LoginComponent extends React.Component {
    state = {
        id: "",
        password: "",
        buttonDisabled: true
    }

    componentDidMount() {
        this.setState({
            id: "",
            password: "",
            buttonDisabled: true
        })
    }


    render() {
        const { buttonDisabled, id, password } = this.state;
        const { handleInput } = this;
        return <Container>
            {/* <LoginTheme1 /> */}
            <LoginTheme2
                id={id}
                password={password}
                handleInput={handleInput}
            />
            <Margin />
            <ButtonComponent buttonDisabled={buttonDisabled} text={'LOGIN'} />
        </Container>
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })

        if (document.getElementById('id').value.length >= 4 && document.getElementById('password').value.length >= 4) {
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

export default LoginComponent