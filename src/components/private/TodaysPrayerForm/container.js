import React from 'react'
import Presenter from './presenter'
import axios from 'axios'
import REST_API_ENDPOINT from 'constants/endpoint';
import InfoModal from 'components/global/Modal';

class Container extends React.Component {
    state = {
        todaysPrayer: "",
        prayersOfStudent: [],
        loading: false
    }
    render() {
        const { handleInput
            , addButtonClicked,
            submitButtonClicked,
            handlePrayersOfStudent
        } = this;
        const { todaysPrayer, prayersOfStudent, loading } = this.state;
        return <Presenter
            todaysPrayer={todaysPrayer}
            handleInput={handleInput}
            prayersOfStudent={prayersOfStudent}
            addButtonClicked={addButtonClicked}
            submitButtonClicked={submitButtonClicked}
            handlePrayersOfStudent={handlePrayersOfStudent}
            loading={loading}
        />
    }

    handlePrayersOfStudent = (i, event) => {
        const updatedPrayerOfStudent = this.state.prayersOfStudent.map((cell, index) => {
            if (index === i) {
                return {
                    ...cell,
                    [event.target.name]: event.target.value
                }
            } else return cell
        })
        this.setState({
            ...this.state,
            prayersOfStudent: updatedPrayerOfStudent
        })
    }

    submitButtonClicked = () => {
        const { todaysPrayer, prayersOfStudent } = this.state;

        this.setState({
            loading: true
        })

        console.log('prayersOfStudent: ', prayersOfStudent)

        axios.post(REST_API_ENDPOINT + 'prayer', {
            todaysPrayer,
            prayersOfStudent: prayersOfStudent
        })
            .then(res => res.data)
            .then(data => {
                const { ok, error, todaysPrayer, prayersOfStudent } = data
                if (ok) {
                    console.log('check response: ', todaysPrayer, prayersOfStudent)
                    window.location.href = '/prayer'
                } else {
                    InfoModal('에러', error, () => {
                        window.location.href = '/'
                    })
                }
            })
            .catch(err => console.error(err))

    }

    addButtonClicked = () => {
        this.setState({
            prayersOfStudent: [
                ...this.state.prayersOfStudent,
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