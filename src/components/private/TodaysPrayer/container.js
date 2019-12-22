import React from 'react'
import Presenter from './presenter'
import { connect } from 'react-redux'
import { fetchTodaysPrayer } from 'actions/prayerAction'


class Container extends React.Component {


    componentDidMount() {
        const { fetchTodaysPrayer } = this.props;

        fetchTodaysPrayer()

    }

    render() {
        const {
            loading,
            todaysPrayer,
            prayersOfStudents
        } = this.props;
        const {
            year,
            month,
            day
        } = todaysPrayer;
        return <Presenter
            loading={loading}
            todaysPrayer={todaysPrayer}
            prayersOfStudents={prayersOfStudents}
            year={year}
            month={month}
            day={day}
        />
    }
}

const mapstateToProps = state => {
    const {
        todaysPrayer,
        prayersOfStudents,
        loading
    } = state.prayer
    return {
        todaysPrayer,
        prayersOfStudents,
        loading

    }
}

export default connect(mapstateToProps, {
    fetchTodaysPrayer
})(Container)