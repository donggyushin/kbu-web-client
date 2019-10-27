import React from 'react';
import QrcodePresenter from './presenter';
import anime from 'animejs/lib/anime.es.js';

class QRCodeContainer extends React.Component {

    state = {
        timer: 15
    }

    componentDidMount() {
        anime({
            targets: '.qrcodecontainer',
            translateY: -300
        })

        setInterval(() => {
            this.setState({
                timer: this.state.timer - 1
            })
        }, 1000);

        setTimeout(() => {
            // turn off qrcode
            this.props.shutdownQrcode()
        }, 15000);
    }

    componentWillUnmount() {
        anime({
            targets: '.qrcodecontainer',
            translateY: 300
        })
        this.props.shutdownQrcode();
    }

    render() {
        const { timer } = this.state;
        const { img } = this.props;
        return <QrcodePresenter timer={timer} img={img} />
    }
}

export default QRCodeContainer