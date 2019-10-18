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
import IntranetVerifyView from './public/IntranetVerifyView/IntranetVerifyView';



class PublicComponent extends React.Component {
    state = {
        verifyPhoneComponentView: false,
        intranetVerifyView: false,
        intranetVerified: false,
        name: "",
        phoneNumber: ""
    }
    render() {
        const { turnDownVerifyPhoneComponent, turnOnVerifyPhoneComponent,
            turnOnIntranetVerify,
            turnDownIntranetVerify,
            verifyIntranetAccount
        } = this;
        const { verifyPhoneComponentView, intranetVerifyView, intranetVerified } = this.state;
        return <Router>

            <Switch>
                <Route exact path={'/'}>
                    <Login2Component />
                </Route>
                <Route path={'/new'}>
                    <NewAccount
                        turnDownVerifyPhoneComponent={turnDownVerifyPhoneComponent}
                        turnOnVerifyPhoneComponent={turnOnVerifyPhoneComponent}
                        turnOnIntranetVerify={turnOnIntranetVerify}
                        intranetVerified={intranetVerified}
                    />
                </Route>
                <Route>
                    <Login2Component />
                </Route>
            </Switch>
            <CopyrightComponent />
            {/* {verifyPhoneComponentView && <VerifyPhoneComponent turnDownVerifyPhoneComponent={turnDownVerifyPhoneComponent} />} */}
            {intranetVerifyView && <IntranetVerifyView verifyIntranetAccount={verifyIntranetAccount} turnDownIntranetVerify={turnDownIntranetVerify} />}
        </Router>
    }

    verifyIntranetAccount = () => {
        this.setState({
            intranetVerified: true
        })
    }

    turnOnIntranetVerify = () => {
        this.setState({
            intranetVerifyView: true
        })
    }

    turnDownIntranetVerify = () => {
        this.setState({
            intranetVerifyView: false
        })
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