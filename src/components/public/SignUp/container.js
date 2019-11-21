import React from 'react'
import Presenter from './presenter'
import { connect } from 'react-redux'
import InfoModal from 'components/global/Modal'


class SignUpContainer extends React.Component {

    componentDidMount() {
        if (this.props.isLoggedIn) {
            InfoModal('경고', '로그인한 유저는 들어올 수 없는 페이지입니다. ', () => {
                window.location.href = '/'
            })
        }
    }

    render() {
        return <Presenter />
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    }
}

export default connect(mapStateToProps, {})(SignUpContainer)