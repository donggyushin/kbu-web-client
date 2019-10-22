import React from 'react';
import Main from './private/Main/Main';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import QRCodeComponent from './private/QRCode/QRCode';
import anime from 'animejs/lib/anime.es.js';
import DrawerComponent from './private/Main/Drawer/Drawer';
import CopyrightComponent from './private/Copyright/Copyright';
import AdminPage from './private/AdminPage/AdminPage';
import styled from 'styled-components'
import { decodeJsonWebToken } from 'utils/jsonwebtoken';
import Axios from 'axios';
import REST_API_ENDPOINT from 'constants/endpoint';

const RedLine = styled.div`
    height:4px;
    width:100%;
    background:#c0392b;
`


class PrivateComponent extends React.Component {

    state = {
        QRCode: false,
        user: {
            email: "",
            gender: "",
            grade: "",
            id: "",
            img: "",
            img_height: 0,
            img_width: 0,
            major: "",
            phone: "",
            status: "",
            name: ""
        },
        loading: true
    }

    componentDidMount() {
        const decoded = decodeJsonWebToken(window.localStorage.getItem("token"));
        const userId = decoded.id;
        const userPassword = decoded.password;
        if (userId && userPassword) {
            Axios.post(REST_API_ENDPOINT + 'user/getuser', {
                id: userId,
                password: userPassword
            }).then(res => res.data)
                .then(data => {
                    console.log(data)
                    if (data.is_ok) {
                        this.setState({
                            user: data.result,
                            loading: false
                        })
                    } else {
                        alert('정보를 불러오는데 실패하였습니다. ')
                        window.localStorage.removeItem('token');
                        window.location.href = '/'
                    }
                })
                .catch(err => console.error(err))
        }
    }

    render() {
        const { QRCode, user, loading } = this.state;
        const { QRCodeOn, QRCodeOff } = this;
        const { logout } = this.props;
        return <Router>
            <DrawerComponent user={user} logout={logout} />
            {/* <RedLine /> */}
            <Switch>
                <Route path="/admin">
                    <AdminPage />
                </Route>
                <Route path="/">
                    <Main user={user} loading={loading} QRCodeOn={QRCodeOn} />
                </Route>
                <Route>
                    <Main />
                </Route>

            </Switch>
            {/* <CopyrightComponent /> */}
            {QRCode && <QRCodeComponent QRCodeOff={QRCodeOff} view={QRCode} />}

        </Router>
    }

    QRCodeOn = () => {
        this.setState({
            QRCode: true
        })

    }

    QRCodeOff = () => {
        this.setState({
            QRCode: false
        })
        anime({
            targets: '.qrcode-container',
            translateY: 500
        })
    }
}

export default PrivateComponent