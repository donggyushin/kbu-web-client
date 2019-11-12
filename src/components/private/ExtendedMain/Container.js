import React from 'react';
import ExtendedMainPresenter from './Presenter';

class ExtendedMainContainer extends React.Component {
    state = {
        studentId: false
    }

    componentDidMount() {
        console.log('user: ', this.props.user)
    }

    render() {
        const { studentId } = this.state;
        const { TurnOffStudentIDCard,
            TurnOnStudentIDCard,





        } = this;
        const { user, loading, handleLocation, noticeClicked, lectureClicked
            , mileageClicked,
            scheduleClicked,
            chapelClicked,
            mapClicked,
            cafeteriaClicked
        } = this.props;
        return <ExtendedMainPresenter
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