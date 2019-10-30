import React from 'react';
import StudentID from './presenter';
import axios from 'axios'
import REST_API_ENDPOINT from 'constants/endpoint';

class StudentIDContainer extends React.Component {
    state = {
        qrcode: false,
        qrcodeimg: ""
    }

    componentDidMount() {
        document.body.style.overflow = 'hidden';
    }

    componentWillUnmount() {
        document.body.style.overflow = 'unset';
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