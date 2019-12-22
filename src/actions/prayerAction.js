import Axios from "axios"
import REST_API_ENDPOINT from "constants/endpoint"
import InfoModal from "components/global/Modal"
import { FETCH_TODAYS_PRAYER, LOADING_PARYER } from "./type"

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
                InfoModal('경고', error, () => {
                    window.location.href = '/'
                })
            }
        })
        .catch(err => console.error(err))
    // }
}