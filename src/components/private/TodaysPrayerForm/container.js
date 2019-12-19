import React from 'react'
import Presenter from './presenter'

class Container extends React.Component {
    state = {
        todaysPrayer: "",
        prayerForStudent: []
    }
    render() {
        const { handleInput
            , addButtonClicked
        } = this;
        const { todaysPrayer, prayerForStudent } = this.state;
        return <Presenter
            todaysPrayer={todaysPrayer}
            handleInput={handleInput}
            prayerForStudent={prayerForStudent}
            addButtonClicked={addButtonClicked}
        />
    }

    addButtonClicked = () => {
        this.setState({
            prayerForStudent: [
                ...this.state.prayerForStudent,
                {
                    name: "",
                    prayerOfStudent: ""
                }
            ]
        })
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
}

export default Container