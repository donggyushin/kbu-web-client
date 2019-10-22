import React from 'react';
import styled from 'styled-components';
import { Input, Button } from 'antd'

const Container = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:3;
    background:rgba(0,0,0,0.7); 
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const Card = styled.div`
    width:80%;
    height:400px;
    background:white;
    border-radius:3px;
    color:black;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const InputsContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:80%;
`

class IntranetVerifyView extends React.Component {
    constructor(props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    /**
     * Set the wrapper ref
     */
    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    /**
     * Alert if clicked on outside of element
     */
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            const { turnDownIntranetVerify } = this.props;
            turnDownIntranetVerify()

        }
    }

    state = {
        intranetId: "",
        intranetPassword: ""
    }

    render() {
        const {
            intranetId,
            intranetPassword
        } = this.state;
        const { handleInput, verifyButtonClicked } = this;
        return <Container>
            <Card ref={this.setWrapperRef}>
                <InputsContainer>
                    <br />
                    <Input
                        onChange={handleInput}
                        name={'intranetId'} value={intranetId} placeholder={'인트라넷 아이디'} />
                    <br />
                    <Input.Password
                        onChange={handleInput}
                        name={'intranetPassword'} value={intranetPassword} placeholder={'인트라넷 비밀번호'} />
                    <br />
                </InputsContainer>
                <Button onClick={verifyButtonClicked}>인증하기</Button>
            </Card>
        </Container>
    }

    verifyButtonClicked = () => {
        const { intranetPassword, intranetId } = this.state
        const { verifyIntranetAccount, turnDownIntranetVerify } = this.props;


        verifyIntranetAccount(intranetId, intranetPassword)
        turnDownIntranetVerify()

        this.setState({
            intranetId: "",
            intranetPassword: ""
        })
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
}

export default IntranetVerifyView