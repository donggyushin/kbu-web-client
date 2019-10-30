import React from 'react';
import SubjectPresenter from './presenter';

class SubjectContainer extends React.Component {
    state = {
        colors: ['#9c88ff', '#f6e58d', '#ffbe76', '#ff7979', '#badc58', '#c7ecee', '#6a89cc', '#fad390', '#f8c291', '#6a89cc'],
        selected: ''
    }

    componentDidMount() {
        const randomNum = this.getRandomInt(0, 9);
        this.setState({
            selected: this.state.colors[randomNum]
        })
    }

    render() {
        const { selected } = this.state;
        return <SubjectPresenter selected={selected} subject={this.props.subject} />
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

export default SubjectContainer