import React from 'react';
import CafeteriaPresenter from './presenter';
import { fetchCafeteria } from 'actions/cafeteriaAction'
import { connect } from 'react-redux'



class CafeteriaContainer extends React.Component {

    state = {
        mode: 'lunch',
        year: "",
        month: "",
        day: ""
    }

    componentDidMount() {

        const { fetchCafeteria } = this.props;
        fetchCafeteria(this.getTodayDate())
        const todayObject = this.getTodayObject()
        this.setState({
            year: todayObject.year,
            month: todayObject.month,
            day: todayObject.day
        })
    }

    render() {
        const { dinner, lunch, fix, daily, loading,
            error } = this.props;
        const { mode, year, month, day } = this.state;
        const { moonClicked, sunClicked } = this;
        return <CafeteriaPresenter
            dinner={dinner}
            lunch={lunch}
            fix={fix}
            daily={daily}
            loading={loading}
            error={error}
            mode={mode}
            moonClicked={moonClicked}
            sunClicked={sunClicked}
            year={year}
            month={month}
            day={day}
        />
    }

    moonClicked = () => {
        this.setState({
            mode: 'dinner'
        })
    }

    sunClicked = () => {
        this.setState({
            mode: 'lunch'
        })
    }

    getTodayObject() {
        const today = {
            year: new Date().getFullYear(),
            month: new Date().getMonth() + 1,
            day: new Date().getDate()
        }
        return today
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