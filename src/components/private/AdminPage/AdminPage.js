import React from 'react';
import styled from 'styled-components';
import QrReader from 'react-qr-reader';


const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    position: relative;
`

const GreenBorder = styled.div`
    position: absolute;
    width: 80%;
    height: 80%;
    border: 6px solid #2ecc71;
    z-index: 3;
    display:${props => props.greenLine ? 'block' : 'none'};
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
        result: 'No result',
        greenLine: false
    }
    render() {
        const { greenLine } = this.state;
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
            {/* <p>{this.state.result}</p> */}
            <GreenBorder greenLine={greenLine} />
        </Container>
    }

    handleScan = data => {
        if (data) {
            this.setState({
                result: data,
                greenLine: true
            })
            setTimeout(() => {
                this.setState({
                    greenLine: false
                })
            }, 500);

        }
    }
    handleError = err => {
        console.error(err)

    }
}

export default AdminPage