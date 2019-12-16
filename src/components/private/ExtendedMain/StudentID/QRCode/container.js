import React from 'react';
import QrcodePresenter from './presenter';
import anime from 'animejs/lib/anime.es.js';
import axios from 'axios';
import REST_API_ENDPOINT from 'constants/endpoint';
import { decodeJsonWebToken } from 'utils/jsonwebtoken';
import { base64formatter } from 'utils/base64formatter';
import { connect } from 'react-redux'
import { decreaseTimer, fetchQrcode, turnOnExtendedQrCode, initQrCode } from 'actions/qrcodeAction'

var repeat;

class QRCodeContainer extends React.Component {

    state = {
        timer: 15,
        qrcodeImgUrl: "",
        loading: true
    }

    componentDidMount() {
        if (this.props.loading) {
            const { user } = this.props;

            const decoded = decodeJsonWebToken(window.localStorage.getItem('token'));
            // qrcode image 요청
            axios.post(REST_API_ENDPOINT + 'qr/', {
                id: decoded.id,
                token: localStorage.getItem('kbu'),
                sid: this.props.user.sid,
                name: user.name
            })
                .then(res => res.data)
                .then(data => {
                    const { is_ok, result } = data;
                    if (is_ok) {
                        const { img } = result;
                        // this.setState({
                        //     qrcodeImgUrl: base64formatter(img),
                        //     loading: false
                        // })
                        this.props.fetchQrcode(base64formatter(img))
                        anime({
                            targets: '.qrcodecontainer',
                            translateY: -300
                        })

                        repeat = setInterval(() => {
                            this.props.decreaseTimer()
                        }, 1000);

                        setTimeout(() => {
                            // turn off qrcode
                            if (this.props.timer < 1) {

                                this.props.shutdownQrcode()
                                clearInterval(repeat)
                                this.props.initQrCode()
                            }
                        }, 15000);
                    } else {
                        alert('QR CODE 를 불러오는데 실패하였습니다! 관리자에게 문의해주세요!');
                        window.location.href = '/'
                    }

                })
                .catch(err => console.error(err))
        }


    }

    componentWillUnmount() {
        this.props.initQrCode();

        clearInterval(repeat);
        // anime({
        //     targets: '.qrcodecontainer',
        //     translateY: 300
        // })
        // this.props.shutdownQrcode();
    }

    render() {
        const { img, timer, loading } = this.props;
        const { qrcodeClicked } = this;
        return <QrcodePresenter
            qrcodeImgUrl={img}
            loading={loading}
            timer={timer}
            qrcodeClicked={qrcodeClicked}
        />
    }

    qrcodeClicked = () => {
        this.props.turnOnExtendedQrCode()
    }

}

const mapStateToProps = state => {
    return {
        timer: state.qrcode.timer,
        img: state.qrcode.img,
        loading: state.qrcode.loading
    }
}

export default connect(mapStateToProps, { decreaseTimer, turnOnExtendedQrCode, initQrCode, fetchQrcode })(QRCodeContainer)