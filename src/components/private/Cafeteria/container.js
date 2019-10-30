import React from 'react';
import CafeteriaPresenter from './presenter';

class CafeteriaContainer extends React.Component {
    state = {
        week: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
        today: '',
    }
    componentDidMount() {
        this.setState({
            today: this.getTodayLabel()
        })
    }

    render() {
        const { today } = this.state;

        return <CafeteriaPresenter today={today} />
    }

    getTodayLabel() {

        var week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');

        var today = new Date().getDay();
        var todayLabel = week[today];

        return todayLabel;
    }




}

export default CafeteriaContainer