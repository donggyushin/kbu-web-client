import React from 'react';
import LecturePresenter from './presenter';

class LectureContainer extends React.Component {




    render() {
        // const { schedule, loading } = this.state;
        const { schedule, loading, error } = this.props.lecture;
        return <LecturePresenter error={error} loading={loading} schedule={schedule} />
    }
}

export default LectureContainer