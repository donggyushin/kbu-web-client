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



class PrivateComponent extends React.Component {

    state = {
        QRCode: false
    }

    render() {
        const { QRCode } = this.state;
        const { QRCodeOn, QRCodeOff } = this;
        return <Router>
            <DrawerComponent />
            <Switch>
                <Route path="/">
                    <Main QRCodeOn={QRCodeOn} />
                </Route>
                <Route>
                    <Main />
                </Route>
            </Switch>
            <CopyrightComponent />
            <QRCodeComponent QRCodeOff={QRCodeOff} view={QRCode} />
        </Router>
    }

    QRCodeOn = () => {
        this.setState({
            QRCode: true
        })
        anime({
            targets: '.qrcode-container',
            translateY: -500
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