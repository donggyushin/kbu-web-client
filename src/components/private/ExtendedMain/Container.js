import React from 'react';
import ExtendedMainPresenter from './Presenter';

class ExtendedMainContainer extends React.Component {
    state = {
        studentId: false
    }
    render() {
        const { studentId } = this.state;
        const { TurnOffStudentIDCard,
            TurnOnStudentIDCard,
            sheduleClicked,
            campusMapClicked
        } = this;
        const { user } = this.props;
        return <ExtendedMainPresenter
            TurnOffStudentIDCard={TurnOffStudentIDCard}
            TurnOnStudentIDCard={TurnOnStudentIDCard}
            studentId={studentId}
            user={user}
            sheduleClicked={sheduleClicked}
            campusMapClicked={campusMapClicked}
        />
    }

    campusMapClicked = () => {
        window.location.href = '/map'
    }

    sheduleClicked = () => {
        window.location.href = '/schedule'
    }

    TurnOnStudentIDCard = () => {
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

export default ExtendedMainContainer;