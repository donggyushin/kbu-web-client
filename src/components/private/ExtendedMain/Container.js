import React from 'react';
import ExtendedMainPresenter from './Presenter';
import PresentModal from '../Modal';
import { connect } from 'react-redux'
import { touchable, untouchable } from 'actions/touchableAction'

class ExtendedMainContainer extends React.Component {
    state = {
        studentId: false
    }


    render() {
        const { studentId } = this.state;
        const { TurnOffStudentIDCard,
            TurnOnStudentIDCard,
            askGoToLoginPage
        } = this;
        const { user, loading, handleLocation, noticeClicked, lectureClicked
            , mileageClicked,
            scheduleClicked,
            chapelClicked,
            mapClicked,
            cafeteriaClicked,
            isLoggedIn,
            touch
        } = this.props;
        return <ExtendedMainPresenter
            touchable={touch}
            askGoToLoginPage={askGoToLoginPage}
            loading={loading}
            TurnOffStudentIDCard={TurnOffStudentIDCard}
            TurnOnStudentIDCard={TurnOnStudentIDCard}
            studentId={studentId}
            user={user}
            scheduleClicked={scheduleClicked}
            mapClicked={mapClicked}
            cafeteriaClicked={cafeteriaClicked}
            mileageClicked={mileageClicked}
            lectureClicked={lectureClicked}
            noticeClicked={noticeClicked}
            chapelClicked={chapelClicked}
            handleLocation={handleLocation}
            isLoggedIn={isLoggedIn}
        />
    }





    askGoToLoginPage = () => {
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
        setTimeout(() => {
            this.props.touchable();
        }, 500);
    }
}

const mapStateToProps = state => {
    return {
        touch: state.touchable.touchable
    }
}

export default connect(mapStateToProps, {
    touchable,
    untouchable
})(ExtendedMainContainer);