import React from 'react'
import Presenter from './presenter'

class Container extends React.Component {
    state = {
        detail: false,
        first: true
    }
    render() {
        const { sure,
            time,
            year,
            month,
            comment,
            countNumber,
            date,
            day,
            late } = this.props;
        const { detail, first } = this.state;
        const { turnDownInfo, turnOnInfo } = this;
        return <Presenter
            first={first}
            turnDownInfo={turnDownInfo}
            turnOnInfo={turnOnInfo}
            detail={detail} sure={sure} time={time} year={year} month={month} comment={comment} countNumber={countNumber} date={date} day={day} late={late} />
    }



    turnOnInfo = () => {
        this.setState({
            detail: true,
            first: false
        })
    }

    turnDownInfo = () => {
        this.setState({
            detail: false
        })
    }
}

export default Container