import React from 'react';
import styled from 'styled-components';
import QrReader from 'react-qr-reader';
import Axios from 'axios';
import REST_API_ENDPOINT from 'constants/endpoint';



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

const CarrotBorder = styled.div`
position: absolute;
    width: 80%;
    height: 80%;
    border: 6px solid #e67e22;
    z-index: 3;
    display:${props => props.carrotLine ? 'block' : 'none'};
`

const PuppleBorder = styled.div`
    position: absolute;
    width: 80%;
    height: 80%;
    border: 6px solid #e67e22;
    z-index: 3;
    display:${props => props.carrotLine ? 'block' : 'none'};
`

const Audio = styled.audio`
    display:none;
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
        greenLine: false,
        carrotLine: false,
        puppleLine: false
    }
    render() {
        const { greenLine, carrotLine, puppleLine } = this.state;
        return <Container>
            <QrReader
                delay={1500}
                onError={this.handleError}
                onScan={this.handleScan}
                style={{
                    width: '100%'
                }}
                className={'qrcodereader'}
            />
            {/* <p>{this.state.result}</p> */}
            <GreenBorder greenLine={greenLine} />
            <CarrotBorder carrotLine={carrotLine} />
            <PuppleBorder puppleLine={puppleLine} />
            {/* <Audio id={'success'} src={'/a'} /> */}
        </Container>
    }

    handleScan = data => {
        if (data) {

            this.setState({
                carrotLine: true
            })
            setTimeout(() => {
                this.setState({
                    carrotLine: false
                })
            }, 400);
            Axios.post(REST_API_ENDPOINT + 'qr/send', {
                token: data
            }).then(res => res.data)
                .then(data => {
                    console.log(data)
                    if (data.is_ok === 1) {
                        console.log(data)
                        this.setState({
                            greenLine: true
                        })
                        setTimeout(() => {
                            this.setState({
                                greenLine: false
                            })

                        }, 500);
                    } else {

                        this.setState({
                            puppleLine: true
                        })
                        setTimeout(() => {
                            this.setState({
                                puppleLine: false
                            })
                        }, 400);
                        alert(data.result)
                    }
                })
                .catch(err => console.error(err))


        }
    }
    handleError = err => {
        console.error(err)

    }
}

export default AdminPage