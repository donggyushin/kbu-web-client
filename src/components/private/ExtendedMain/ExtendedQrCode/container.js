import React from 'react'
import Presenter from './presenter'
import { turnDownExtendedQrCode } from 'actions/qrcodeAction'
import { connect } from 'react-redux'

class Container extends React.Component {
    render() {
        const { closeButtonClicked } = this;
        const { img, loading, timer } = this.props;
        return <Presenter closeButtonClicked={closeButtonClicked} img={img} loading={loading} timer={timer} />
    }

    closeButtonClicked = () => {
        this.props.turnDownExtendedQrCode()
    }
}

const mapStateToProps = state => {
    return {
        img: state.qrcode.img,
        loading: state.qrcode.loading,
        timer: state.qrcode.timer
    }
}

export default connect(mapStateToProps, { turnDownExtendedQrCode })(Container)