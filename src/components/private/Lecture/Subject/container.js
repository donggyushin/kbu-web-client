import React from 'react';
import SubjectPresenter from './presenter';

class SubjectContainer extends React.Component {
    state = {
        colors: ['#9c88ff', '#f6e58d', '#ffbe76', '#ff7979', '#badc58', '#c7ecee', '#6a89cc', '#fad390', '#f8c291', '#6a89cc', '#81ecec', '#f6e58d'],
        selected: ''
    }

    componentDidMount() {
        const subjectTile = this.props.subject[0]
        const index = parseInt(subjectTile.length % 12);


        this.setState({
            selected: this.state.colors[index]
        })
    }

    render() {
        const { selected } = this.state;
        const { colorMatches } = this.props;
        return <SubjectPresenter colorMatches={colorMatches} selected={selected} subject={this.props.subject} />
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

export default SubjectContainer