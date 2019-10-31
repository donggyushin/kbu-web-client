import React from 'react';
import styled from 'styled-components';
import QrReader from 'react-qr-reader';
import Axios from 'axios';
import REST_API_ENDPOINT from 'constants/endpoint';
import themeColor from 'constants/themeColor';



const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    position: relative;
`

const GreenBorder = styled.div`

    position: absolute;
    width: 76%;
    height: 51%;
    border: 6px solid #2ecc71;
    z-index: 3;
    display:${props => props.greenLine ? 'block' : 'none'};
    top:49px;
`

const CarrotBorder = styled.div`
position: absolute;
    width: 76%;
    height: 51%;
    border: 6px solid #e67e22;
    z-index: 3;
    display:${props => props.carrotLine ? 'block' : 'none'};
    top:49px;
`

const PuppleBorder = styled.div`
    position: absolute;
    width: 76%;
    height: 51%;
    border: 6px solid #e67e22;
    z-index: 3;
    display:${props => props.carrotLine ? 'block' : 'none'};
    top:49px;
`

const Audio = styled.audio`
    display:none;
`

const Text = styled.div`
    font-size: 24px;
`

const RefreshButton = styled.div`
    color:white;
    background:${themeColor.theme};
    padding: 15px;
    border-radius: 6px;
    font-size: 20px;
    font-weight: 500;
    margin-top: 54px;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
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
        puppleLine: false,
        name: "",
        sid: "",
        valid_time: "",
        freeze: false
    }
    render() {
        const { greenLine, carrotLine, puppleLine, name, sid, valid_time, freeze } = this.state;
        const { refreshButtonClicked } = this;
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
            <Text>{name}</Text>
            <Text>{sid}</Text>
            <Text style={{
                fontSize: 11
            }}>{valid_time}</Text>
            {freeze === true && <RefreshButton onClick={refreshButtonClicked}>새로고침</RefreshButton>}

        </Container>
    }


    refreshButtonClicked = () => {
        this.setState({
            greenLine: false,
            name: "",
            sid: "",
            valid_time: "",
            freeze: false
        })
    }



    handleScan = data => {
        if (this.state.freeze === true) {
            return;
        }
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
                        const date = new Date(data.result.valid_time * 1000);
                        this.setState({
                            greenLine: true,
                            name: data.result.name,
                            sid: data.result.sid,
                            valid_time: date.toString(),
                            freeze: true
                        })
                        // setTimeout(() => {
                        //     this.setState({
                        //         greenLine: false,
                        //         name: "",
                        //         sid: "",
                        //         valid_time: ""
                        //     })

                        // }, 10000);
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