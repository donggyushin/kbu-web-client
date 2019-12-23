import React from 'react';
import ExtendedMainPresenter from './Presenter';
import PresentModal from '../Modal';
import { connect } from 'react-redux'
import { touchable, untouchable } from 'actions/touchableAction'
import { fetchChapel } from 'actions/chapelAction'
import InfoModal from 'components/global/Modal';
import { initQrCode } from 'actions/qrcodeAction'

class ExtendedMainContainer extends React.Component {
    state = {
        studentId: false,
        cardTypeOneHeight: 0,
        cardTypeTwoHeight: 0,
        cardTypeFourHeight: 0,
        chapelTime: false
    }

    componentDidMount() {
        this.setCardsHeight()
        if (this.props.isLoggedIn) {

            this.props.fetchChapel()
        }
        const date = new Date()
        const hour = date.getHours()
        const minute = date.getMinutes()
        const convertedTime = hour * 60 + minute
        if (710 <= convertedTime && convertedTime <= 750) {
            this.setState({
                chapelTime: true
            })
        }
    }


    render() {
        const {
            studentId,
            cardTypeOneHeight,
            cardTypeTwoHeight,
            cardTypeFourHeight,
            chapelTime
        } = this.state;
        const { TurnOffStudentIDCard,
            TurnOnStudentIDCard,
            askGoToLoginPage,
            redirectToLoginPage
        } = this;
        const {
            user,
            loading,
            isLoggedIn,
            touch,
            extendedQrCode
        } = this.props;
        return <ExtendedMainPresenter
            touchable={touch}
            askGoToLoginPage={askGoToLoginPage}
            loading={loading}
            TurnOffStudentIDCard={TurnOffStudentIDCard}
            TurnOnStudentIDCard={TurnOnStudentIDCard}
            studentId={studentId}
            user={user}
            isLoggedIn={isLoggedIn}
            cardTypeOneHeight={cardTypeOneHeight}
            cardTypeTwoHeight={cardTypeTwoHeight}
            cardTypeFourHeight={cardTypeFourHeight}
            redirectToLoginPage={redirectToLoginPage}
            extendedQrCode={extendedQrCode}
            chapelTime={chapelTime}
        />
    }


    setCardsHeight = () => {
        let browserHeight = 0
        if (typeof (window.innerWidth) == 'number') {
            //Non-IE
            browserHeight = window.innerHeight;
        } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
            //IE 6+ in 'standards compliant mode'

            browserHeight = document.documentElement.clientHeight;
        } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
            //IE 4 compatible

            browserHeight = document.body.clientHeight;
        }

        const cardTypeOneHeight = parseInt(browserHeight / 3) - 20;
        const cardTypeTwoHeight = parseInt(browserHeight / 3) - 20;
        const cardTypeFourHeight = parseInt(browserHeight / 6);
        this.setState({
            cardTypeOneHeight,
            cardTypeTwoHeight,
            cardTypeFourHeight
        })
    }

    redirectToLoginPage = (nextPage) => {
        if (nextPage) {
            window.localStorage.setItem('nextPage', nextPage)
        }
        InfoModal('잠시만요!', '해당 페이지로 이동하려면 로그인해주세요!', () => {
            window.location.href = '/login'
        })
    }


    askGoToLoginPage = (nextPage) => {
        if (nextPage) {
            window.localStorage.setItem('nextPage', nextPage)
        }
        PresentModal('로그인이 필요한 페이지입니다. ', '로그인 페이지로 이동하시겠습니까?')
    }



    TurnOnStudentIDCard = () => {
        this.props.untouchable();
        this.setState({
            studentId: true
        })
    }

    TurnOffStudentIDCard = () => {


        this.setState({
            studentId: false
        })

    }
}

const mapStateToProps = state => {
    return {
        touch: state.touchable.touchable,
        extendedQrCode: state.qrcode.extendedQrCode
    }
}

export default connect(mapStateToProps, {
    touchable,
    untouchable,
    fetchChapel,
    initQrCode
})(ExtendedMainContainer);