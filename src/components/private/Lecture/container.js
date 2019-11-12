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
        const { colorMatches, firstClassTime } = this.props;
        return <LecturePresenter firstClassTime={firstClassTime} colorMatches={colorMatches} error={error} loading={loading} schedule={schedule} />
    }
}

const mapStateToProps = (state) => {
    return {
        firstClassTime: state.lecture.firstClassTime
    }
}

export default connect(mapStateToProps, {})(LectureContainer)