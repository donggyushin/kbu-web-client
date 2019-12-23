import React from 'react'
import Presenter from './presenter'
import axios from 'axios'
import REST_API_ENDPOINT from 'constants/endpoint';
import InfoModal from 'components/global/Modal';

function gohome() {
    window.location.href = '/'
}

class Container extends React.Component {
    state = {
        todaysPrayer: "",
        prayersOfStudent: [],
        loading: false,
        loading2: true
    }

    componentDidMount() {
        const date = new Date()
        const year = date.getFullYear()
        const month = date.getMonth()
        const day = date.getDate()
        axios.get(REST_API_ENDPOINT + `prayer/${year}/${month}/${day}`)
            .then(res => res.data)
            .then(data => {

                const {
                    ok,
                    error,
                    todaysPrayer,
                    prayersOfStudent
                } = data
                console.log('todaysPrayer: ', todaysPrayer)
                console.log('prayersOfStudent: ', prayersOfStudent)
                const convertedPrayersOfStudent = prayersOfStudent.map(cell => {
                    return {
                        name: cell.studentName,
                        prayerOfStudent: cell.prayer
                    }
                })
                if (ok) {
                    this.setState({
                        todaysPrayer,
                        prayersOfStudent: convertedPrayersOfStudent,
                        loading2: false
                    })
                } else {
                    console.error(error)
                    InfoModal('경고', error, gohome)
                }
            })
            .catch(err => {
                console.error(err)
                InfoModal('경고', err.message, gohome)
            })
    }

    render() {
        const {
            handleInput,
            addButtonClicked,
            submitButtonClicked,
            handlePrayersOfStudent,
            deleteStudentPrayerCard
        } = this;
        const {
            todaysPrayer,
            prayersOfStudent,
            loading,
            loading2
        } = this.state;

        return <Presenter
            todaysPrayer={todaysPrayer}
            handleInput={handleInput}
            prayersOfStudent={prayersOfStudent}
            addButtonClicked={addButtonClicked}
            submitButtonClicked={submitButtonClicked}
            handlePrayersOfStudent={handlePrayersOfStudent}
            loading={loading}
            loading2={loading2}
            deleteStudentPrayerCard={deleteStudentPrayerCard}
        />
    }

    deleteStudentPrayerCard = (i) => {

        const updatedPrayersOfStudent = this.state.prayersOfStudent.filter((cell, index) => {
            if (index === i) {
                return false
            }
            else {
                return true
            }
        })
        this.setState({
            prayersOfStudent: updatedPrayersOfStudent
        })
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