import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd'

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
            const { turnDownVerifyPhoneComponent } = this.props;
            turnDownVerifyPhoneComponent()
        }
    }


    render() {

        return <Container>
            <Card ref={this.setWrapperRef}>
                <Time>3:00</Time>

                <Input placeholder={'0629'} />
                <Button style={{
                    position: 'relative',
                    top: 43,
                    width: 200
                }} type={"primary"}>인증</Button>

            </Card>
        </Container>
    }
}

export default VerifyPhoneComponent