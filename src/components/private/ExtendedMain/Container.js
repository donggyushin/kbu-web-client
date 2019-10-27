import React from 'react';
import ExtendedMainPresenter from './Presenter';

class ExtendedMainContainer extends React.Component {
    state = {
        studentId: false
    }
    render() {
        const { studentId } = this.state;
        const { TurnOffStudentIDCard, TurnOnStudentIDCard } = this;
        const { user } = this.props;
        return <ExtendedMainPresenter
            TurnOffStudentIDCard={TurnOffStudentIDCard}
            TurnOnStudentIDCard={TurnOnStudentIDCard}
            studentId={studentId}
            user={user}
        />
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