import React from 'react';
import CafeteriaPresenter from './presenter';
import { fetchCafeteria } from 'actions/cafeteriaAction'
import { connect } from 'react-redux'

class CafeteriaContainer extends React.Component {
    state = {
        week: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
        today: '',
    }
    componentDidMount() {
        this.setState({
            today: this.getTodayLabel()
        })
        const { fetchCafeteria } = this.props;
        fetchCafeteria(this.getTodayDate())
    }

    render() {
        const { today } = this.state;
        const { dinner, lunch, fix, daily, loading,
            error } = this.props;

        return <CafeteriaPresenter
            dinner={dinner}
            lunch={lunch}
            fix={fix}
            daily={daily}
            today={today}
            loading={loading}
            error={error}
        />
    }

    getTodayDate() {
        const date = new Date()
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()
        return year.toString() + month.toString() + day.toString()
    }

    getTodayLabel() {

        var week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');

        var today = new Date().getDay();
        var todayLabel = week[today];

        return todayLabel;
    }




}

const mapStateToProps = state => {
    return {
        lunch: state.cafeteria.lunch,
        fix: state.cafeteria.fix,
        daily: state.cafeteria.daily,
        dinner: state.cafeteria.dinner,
        loading: state.cafeteria.loading,
        error: state.cafeteria.error
    }
}

export default connect(mapStateToProps, {
    fetchCafeteria
})(CafeteriaContainer)