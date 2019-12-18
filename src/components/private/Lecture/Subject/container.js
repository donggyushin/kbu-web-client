import React from 'react';
import SubjectPresenter from './presenter';
import { connect } from 'react-redux'
import { touchable } from 'actions/touchableAction'

class SubjectContainer extends React.Component {

    componentDidMount() {
        this.props.touchable()
    }


    render() {
        const { colorMatches, subjectClicked, touch } = this.props;
        return <SubjectPresenter touch={touch} subjectClicked={subjectClicked} colorMatches={colorMatches} subject={this.props.subject} />
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, {
    touchable
})(SubjectContainer)