import React from 'react';
import StudentID from './presenter';

class StudentIDContainer extends React.Component {
    state = {
        qrcode: false,
        qrcodeimg: ""
    }
    render() {
        const { TurnOffStudentIDCard, user } = this.props;
        const { requestQrcode, shutdownQrcode } = this;
        const { qrcode, qrcodeimg } = this.state;
        return <StudentID
            requestQrcode={requestQrcode}
            shutdownQrcode={shutdownQrcode}
            TurnOffStudentIDCard={TurnOffStudentIDCard}
            qrcode={qrcode}
            qrcodeimg={qrcodeimg}
            user={user}
        />
    }

    requestQrcode = () => {
        // 서버에 qrcode 를 요청하고 img base64 code 를 받아오면
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