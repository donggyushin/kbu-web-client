import React from 'react';
import StudentID from './presenter';
import anime from 'animejs/lib/anime.es.js';

class StudentIDContainer extends React.Component {
    state = {
        qrcode: false,
        qrcodeimg: ""
    }


    constructor(props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
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
            this.props.TurnOffStudentIDCard()
        }
    }

    componentDidMount() {
        document.body.style.overflow = 'hidden';
        document.addEventListener('touchend', this.handleClickOutside);
        document.addEventListener('mousedown', this.handleClickOutside);
        anime({
            targets: '.studentidcard',
            translateY: -700
        })

    }

    componentWillUnmount() {
        document.body.style.overflow = 'unset';
        document.removeEventListener('touchend', this.handleClickOutside);
        document.removeEventListener('mousedown', this.handleClickOutside);
        anime({
            targets: '.studentidcard',
            translateY: 700
        })
    }

    render() {
        const { TurnOffStudentIDCard, user, loading } = this.props;
        const { requestQrcode, shutdownQrcode } = this;
        const { qrcode, qrcodeimg } = this.state;
        return <StudentID
            requestQrcode={requestQrcode}
            shutdownQrcode={shutdownQrcode}
            TurnOffStudentIDCard={TurnOffStudentIDCard}
            qrcode={qrcode}
            qrcodeimg={qrcodeimg}
            user={user}
            loading={loading}
            setWrapperRef={this.setWrapperRef}
        />
    }

    requestQrcode = () => {
        // 서버에 qrcode 를 요청하고 img base64 code 를 받아오면
        // const
        // axios.post(REST_API_ENDPOINT + 'qr/', {

        // })

        this.setState({
            qrcode: true,
            qrcodeimg: "qrcode base64 code"
        })
    }

    shutdownQrcode = () => {
        this.setState({
            qrcode: false,
            qrcodeimg: ""
        })
    }
}

export default StudentIDContainer