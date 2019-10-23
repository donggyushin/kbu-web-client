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


    componentWillReceiveProps(nextProps) {
        const { user } = nextProps;
        let authorization = false;
        const { sid } = user;
        if (sid === '201303024' || sid === '201504018' || sid === '201504021') {
            authorization = true;
        }
        if (authorization === false) {
            window.location.href = '/'
        }
    }


    state = {
        result: 'No result'
    }
    render() {
        return <Container>
            <QrReader
                delay={500}
                onError={this.handleError}
                onScan={this.handleScan}
                style={{
                    width: '100%'
                }}
                className={'qrcodereader'}
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
            const element = document.querySelector('.qrcodereader')
            element.style.boxShadow = "#2ecc71";
            console.log('element: ', element)


            setTimeout(() => {
                element.style.boxShadow = "rgba(255, 0, 0, 0.5) 0px 0px 0px 5px inset";
            }, 3000);
        }
    }
    handleError = err => {
        console.error(err)

    }
}

export default AdminPage