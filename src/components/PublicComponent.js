import React from 'react';
import styled from 'styled-components';
import Login2Component from './public/login2/Login2';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import CopyrightComponent from './private/Copyright/Copyright';
import NewAccount from './public/NewAccount/NewAccount';
import VerifyPhoneComponent from './public/NewAccount/VerifyPhone/VerifyPhone';



class PublicComponent extends React.Component {
    state = {
        verifyPhoneComponentView: false
    }
    render() {
        const { turnDownVerifyPhoneComponent, turnOnVerifyPhoneComponent } = this;
        const { verifyPhoneComponentView } = this.state;
        return <Router>

            <Switch>
                <Route exact path={'/'}>
                    <Login2Component />
                </Route>
                <Route path={'/new'}>
                    <NewAccount
                        turnDownVerifyPhoneComponent={turnDownVerifyPhoneComponent}
                        turnOnVerifyPhoneComponent={turnOnVerifyPhoneComponent}
                    />
                </Route>
                <Route>
                    <Login2Component />
                </Route>
            </Switch>
            <CopyrightComponent />
            {verifyPhoneComponentView && <VerifyPhoneComponent turnDownVerifyPhoneComponent={turnDownVerifyPhoneComponent} />}
            {/* <VerifyPhoneComponent turnDownVerifyPhoneComponent={turnDownVerifyPhoneComponent} /> */}
        </Router>
    }

    turnOnVerifyPhoneComponent = () => {
        this.setState({
            verifyPhoneComponentView: true
        })
    }

    turnDownVerifyPhoneComponent = () => {
        this.setState({
            verifyPhoneComponentView: false
        })
    }
}

export default PublicComponent