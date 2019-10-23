import React from 'react';
import styled from 'styled-components';
import QRCode from 'qrcode.react';
import anime from 'animejs/lib/anime.es.js';
import Axios from 'axios';
import REST_API_ENDPOINT from 'constants/endpoint';
import { decodeJsonWebToken } from 'utils/jsonwebtoken';
import base64format from 'constants/base64format'

let interval
let timeout

const Container = styled.div`
    position:fixed;
    top:0;
    left:0;
    height:100%;
    width:100%;
    background:rgba(0,0,0,0.7);
    /* opacity:${props => props.view ? 1 : 0}; */
    transition:0.3s;
    /* display:${props => props.view ? "flex" : "none"}; */
    opacity:1;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`

const DateText = styled.div`
    color:white;
`

const TextContainer = styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    bottom:50px;
    font-family: 'Roboto', sans-serif;
font-family: 'Nanum Gothic', sans-serif;
font-size:19px;
font-style:normal;
letter-spacing:normal;
`

const LeftTime = styled.div`
    color:white;
    position: relative;
    top: 18px;
    font-size: 30px;
    font-weight: 800;
`

const CodeContainer = styled.div`
    position:relative;
    top:500px;
    display:flex;
    justify-content:center;
    align-items:center;
`

const QrCodeImage = styled.img`
    width:280px;
    
`

// I think I will need web or socket.io server here
// Because I have to get signal when the server received QR code information 

class QRCodeComponent extends React.Component {

    state = {
        leftTime: 15,
        loading: true,
        qrcodeImg: ""
    }




    constructor(props) {
        super(props);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        const decoded = decodeJsonWebToken(window.localStorage.getItem('token'));
        const { user } = this.props;
        Axios.post(REST_API_ENDPOINT + 'qr/', {
            id: decoded.id,
            sid: user.sid,
            token: localStorage.getItem('kbu')
        }).then(res => res.data)
            .then(data => {
                console.log(data)
                if (data.is_ok) {

                    this.setState({
                        qrcodeImg: base64format + data.result.img,
                        loading: false
                    })


                    // 여기부터
                    anime({
                        targets: '.qrcode-container',
                        translateY: -500
                    })

                    this.setState({
                        leftTime: 15
                    })

                    interval = setInterval(() => {
                        this.setState({
                            leftTime: this.state.leftTime - 1
                        })
                    }, 1000);

                    setTimeout(() => {
                        anime({
                            targets: '.qrcode-container',
                            translateY: 500
                        })
                    }, 14000);

                    timeout = setTimeout(() => {
                        const { QRCodeOff } = this.props;
                        QRCodeOff()
                    }, 15000);
                    // 여기까지 loading false 로 바꾸면 그때부터 시작

                } else {

                }

            }).catch(err => console.error(err))


        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {

        clearInterval(interval)
        clearTimeout(timeout)

        document.removeEventListener('mousedown', this.handleClickOutside);
        anime({
            targets: '.qrcode-container',
            translateY: 500
        })
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
            const { QRCodeOff } = this.props;
            QRCodeOff()
        }
    }


    render() {
        const { view } = this.props;
        const { leftTime, loading, qrcodeImg } = this.state;
        return <Container view={view}>
            {loading ? '' : <>

                <TextContainer>
                    {/* <DateText>
                        {'2019년 12월 24일 11시 55분 58초에'}
                    </DateText> */}
                    {/* <DateText>{'만료됩니다.'}</DateText> */}
                    <LeftTime>
                        {leftTime}
                    </LeftTime>
                </TextContainer>
                <CodeContainer className={'qrcode-container'} ref={this.setWrapperRef}>
                    {/* 이부분을 나중에 이미지로 대체합니다.  */}
                    {/* <QRCode
                        size={200}
                        value={'https://www.dgsh.nl/'} /> */}
                    <QrCodeImage src={qrcodeImg} />
                </CodeContainer>
            </>}
        </Container>
    }
}

export default QRCodeComponent;