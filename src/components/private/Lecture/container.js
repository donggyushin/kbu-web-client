import React from 'react';
import LecturePresenter from './presenter';

class LectureContainer extends React.Component {




    render() {
        // const { schedule, loading } = this.state;
        const { schedule, loading, error } = this.props.lecture;
        const { colorMatches } = this.props;
        return <LecturePresenter colorMatches={colorMatches} error={error} loading={loading} schedule={schedule} />
    }
}

export default LectureContainer