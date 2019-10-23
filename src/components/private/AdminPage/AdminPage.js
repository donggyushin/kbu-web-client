import React from 'react';
import styled from 'styled-components';
import QrReader from 'react-qr-reader';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

class AdminPage extends React.Component {

    componentDidMount() {
        const { user } = this.props;
        const sid = user.sid;
        if (sid !== '201303024' || sid !== '201504018' || sid !== '201504021') {
            window.location.href = '/';
            return;
        }
    }


    state = {
        result: 'No result'
    }
    render() {
        return <Container>
            <QrReader
                delay={300}
                onError={this.handleError}
                onScan={this.handleScan}
                style={{
                    width: '100%'
                }}
            />
            <p>{this.state.result}</p>
        </Container>
    }

    handleScan = data => {
        if (data) {
            this.setState({
                result: data
            })
            // Send data to arduino server
        }
    }
    handleError = err => {
        console.error(err)
    }
}

export default AdminPage