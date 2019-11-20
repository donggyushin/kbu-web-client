import React from 'react';
import CafeteriaPresenter from './presenter';
import { fetchCafeteria } from 'actions/cafeteriaAction'
import { connect } from 'react-redux'
import InfoModal from 'components/global/Modal';



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
            error, year, month, day, name } = this.props;
        const { mode } = this.state;
        const { moonClicked, sunClicked, previousButtonClicked, nextButtonClicked } = this;
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
            name={name}
            previousButtonClicked={previousButtonClicked}
            nextButtonClicked={nextButtonClicked}
        />
    }

    previousButtonClicked = () => {
        const { year, month, day } = this.state;
        let numDay = parseInt(day)
        numDay = numDay - 1
        if (this.props.name === '월요일') {
            numDay = numDay - 2
        }
        console.log('year: ', year)
        console.log('month: ', month)
        console.log('day: ', day)
        if (numDay > 0) {
            this.setState({
                day: numDay
            })
            this.props.fetchCafeteria(year.toString() + month.toString() + numDay.toString())
        } else {
            InfoModal('경고', '이번 달 내역까지만 불러오기 가능합니다. ')
        }

    }

    nextButtonClicked = () => {
        const { year, month, day } = this.state;
        let numDay = parseInt(day)
        numDay = numDay + 1
        if (this.props.name === '금요일') {
            numDay = numDay + 2
        }
        if (numDay > 30) {
            InfoModal('경고', '이번 달 내역까지만 불러오기 가능합니다. ')
        } else {
            this.setState({
                day: numDay
            })
            this.props.fetchCafeteria(year.toString() + month.toString() + numDay.toString())
        }
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
        error: state.cafeteria.error,
        year: state.cafeteria.year,
        month: state.cafeteria.month,
        day: state.cafeteria.day,
        name: state.cafeteria.name
    }
}

export default connect(mapStateToProps, {
    fetchCafeteria
})(CafeteriaContainer)