import React from 'react';
import LecturePresenter from './presenter';
import { connect } from 'react-redux'

class LectureContainer extends React.Component {

    state = {
        detail: false,
        subject: [],
        background: ""
    }

    componentDidMount() {
        this.props.requestLecture()
    }


    render() {
        // const { schedule, loading } = this.state;
        const { schedule, loading, error } = this.props.lecture;
        const { colorMatches, firstClassTime, lastClassTime } = this.props;
        const { detail, subject, background } = this.state;
        const { subjectClicked, closeDetailView } = this;
        return <LecturePresenter closeDetailView={closeDetailView} background={background} subject={subject} subjectClicked={subjectClicked} detail={detail} lastClassTime={lastClassTime} firstClassTime={firstClassTime} colorMatches={colorMatches} error={error} loading={loading} schedule={schedule} />
    }

    closeDetailView = () => {
        this.setState({
            detail: false,
            subject: [],
            background: ""
        })
    }

    subjectClicked = (subject, background) => {
        this.setState({
            detail: true,
            subject,
            background
        })
    }
}

const mapStateToProps = (state) => {
    return {
        firstClassTime: state.lecture.firstClassTime,
        lastClassTime: state.lecture.lastClassTime
    }
}

export default connect(mapStateToProps, {})(LectureContainer)