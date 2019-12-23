import Axios from "axios"
import REST_API_ENDPOINT from "constants/endpoint"
import InfoModal from "components/global/Modal"
import { FETCH_TODAYS_PRAYER, LOADING_PARYER, FETCH_SPECIFIC_PRAYER } from "./type"

export const fetchSpecificPrayer = (year, month, day) => (dispatch, getState) => {
    dispatch({
        type: LOADING_PARYER
    })
    Axios.get(REST_API_ENDPOINT + `prayer/${year}/${month}/${day}`)
        .then(res => res.data)
        .then(data => {
            const {
                ok,
                error,
                todaysPrayer,
                prayersOfStudent
            } = data
            if (ok) {
                dispatch({
                    type: FETCH_SPECIFIC_PRAYER,
                    todaysPrayer,
                    prayersOfStudent
                })
                return

            } else {
                InfoModal('경고', error, gohome)
            }
        })
        .catch(err => {
            console.error(err.message)
            window.location.href = '/'
        })
}

export const fetchTodaysPrayer = () => (dispatch, getState) => {
    const { prayer } = getState()
    dispatch({
        type: LOADING_PARYER
    })
    const { todaysPrayer } = prayer
    // if (!todaysPrayer) {
    Axios.get(REST_API_ENDPOINT + 'prayer')
        .then(res => res.data)
        .then(data => {

            const { ok, error, prayer, prayersOfStudents } = data
            if (ok) {
                dispatch({
                    type: FETCH_TODAYS_PRAYER,
                    prayer,
                    prayersOfStudents
                })
            } else {
                InfoModal('경고', error, gohome)
            }
        })
        .catch(err => console.error(err))
    // }
}

function gohome() {
    window.location.href = '/'
}