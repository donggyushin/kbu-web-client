import React from 'react';
import LecturePresenter from './presenter';
import { connect } from 'react-redux'

class LectureContainer extends React.Component {

    componentDidMount() {
        this.props.requestLecture()
    }


    render() {
        // const { schedule, loading } = this.state;
        const { schedule, loading, error } = this.props.lecture;
        const { colorMatches, firstClassTime, lastClassTime } = this.props;
        return <LecturePresenter lastClassTime={lastClassTime} firstClassTime={firstClassTime} colorMatches={colorMatches} error={error} loading={loading} schedule={schedule} />
    }
}

const mapStateToProps = (state) => {
    return {
        firstClassTime: state.lecture.firstClassTime,
        lastClassTime: state.lecture.lastClassTime
    }
}

export default connect(mapStateToProps, {})(LectureContainer)