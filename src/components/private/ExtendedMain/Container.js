import React from 'react';
import ExtendedMainPresenter from './Presenter';

class ExtendedMainContainer extends React.Component {
    state = {
        studentId: false
    }
    render() {
        const { studentId } = this.state;
        const { TurnOffStudentIDCard, TurnOnStudentIDCard, sheduleClicked } = this;
        const { user } = this.props;
        return <ExtendedMainPresenter
            TurnOffStudentIDCard={TurnOffStudentIDCard}
            TurnOnStudentIDCard={TurnOnStudentIDCard}
            studentId={studentId}
            user={user}
            sheduleClicked={sheduleClicked}
        />
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