import React from 'react';
import SubjectPresenter from './presenter';

class SubjectContainer extends React.Component {



    render() {
        const { colorMatches, subjectClicked } = this.props;
        return <SubjectPresenter subjectClicked={subjectClicked} colorMatches={colorMatches} subject={this.props.subject} />
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

export default SubjectContainer