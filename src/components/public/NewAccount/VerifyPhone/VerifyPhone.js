import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd'
import axios from 'axios';
import REST_API_ENDPOINT from 'constants/endpoint';

let tiktok

const Container = styled.div`
    position:fixed;
    z-index:3;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.7);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const Card = styled.div`
    width:90%;
    height:400px;
    background:white;
    opacity:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const Time = styled.div`
    font-size: 20px;
    color: #74b9ff;
    font-weight: 500;
    position: relative;
    bottom: 50px;
`

const Row = styled.div`
    display:flex;
    align-items:center;
`

const Input = styled.input`
    outline: none;
    text-align: center;
    font-size: 29px;
    margin-top: 0px;
    background: #fff;
    border: none;
    box-shadow: inset 0 0 0 2px #0079bf;
`





class VerifyPhoneComponent extends React.Component {

    state = {
        leftTime: 180,
        verifyCode: ""
    }

    constructor(props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        const {
            name,
            studentId,
            phoneNumber
        } = this.props;

        this.setState({
            leftTime: 180
        })

        axios.post(REST_API_ENDPOINT + 'verifyphone/', {
            name,
            studentId,
            phoneNumber
        }).then(res => res.data)
            .then(data => {
                const { ok, error } = data;
                if (ok) {
                    // Doing nothing
                } else {
                    alert(error)
                }
            })
            .catch(err => console.error(err))

        document.addEventListener('mousedown', this.handleClickOutside);
        const { turnDownVerifyPhoneComponent } = this.props;
        tiktok = setInterval(() => {
            this.setState({
                leftTime: this.state.leftTime - 1
            })
            if (this.state.leftTime === 0) {
                this.setState({
                    leftTime: 180
                })
                turnDownVerifyPhoneComponent()
            }
        }, 1000);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
        clearInterval(tiktok);
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
            const { turnDownVerifyPhoneComponent } = this.props;
            turnDownVerifyPhoneComponent()
        }
    }


    render() {
        const { leftTime, verifyCode } = this.state;
        const { handleInput, verifyButtonClicked } = this;
        return <Container>
            <Card ref={this.setWrapperRef}>
                <Time>{parseInt(leftTime / 60)} : {(leftTime % 60) > 9 ? parseInt(leftTime % 60) : '0' + parseInt(leftTime % 60)}</Time>

                <Input onChange={handleInput} placeholder={'0629'} value={verifyCode} name={'verifyCode'} />
                <Button
                    onClick={verifyButtonClicked}
                    style={{
                        position: 'relative',
                        top: 43,
                        width: 200
                    }} type={"primary"}>인증</Button>

            </Card>
        </Container>
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    verifyButtonClicked = () => {
        const { verifyCode } = this.state;
        const {
            name,
            studentId,
            phoneNumber
        } = this.props;

        axios.post(REST_API_ENDPOINT + 'verifyphone/verify', {
            verifyCode,
            phoneNumber
        }).then(res => res.data)
            .then(data => {
                const { ok, error } = data;
                if (ok) {
                    alert('인증이 완료되었습니다. ')
                    // 인증 완료
                    const { verifyPhone } = this.props;
                    verifyPhone()
                } else {
                    alert(error)
                }
            })
            .catch(err => console.error(err))

    }
}

export default VerifyPhoneComponent