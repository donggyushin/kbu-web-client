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

const RedLine = styled.div`
    height:4px;
    width:100%;
    background:#c0392b;
`


class PrivateComponent extends React.Component {

    state = {
        QRCode: false
    }

    render() {
        const { QRCode } = this.state;
        const { QRCodeOn, QRCodeOff } = this;
        const { logout } = this.props;
        return <Router>
            <DrawerComponent logout={logout} />
            {/* <RedLine /> */}
            <Switch>
                <Route path="/admin">
                    <AdminPage />
                </Route>
                <Route path="/">
                    <Main QRCodeOn={QRCodeOn} />
                </Route>
                <Route>
                    <Main />
                </Route>

            </Switch>
            <CopyrightComponent />
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