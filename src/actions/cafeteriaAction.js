import axios from 'axios';
import { FETCH_CAFETERIA, CAFETERIA_LOADING } from './type'
import REST_API_ENDPOINT, { KBU_CAFETERIA_ENDPOINT } from 'constants/endpoint';
import getInputDayLabel from 'utils/getInputDayLabel'

export const fetchCafeteria = (date) => (dispatch, getState) => {
    const { cafeteria } = getState()
    console.log('date: ', date)
    dispatch({
        type: CAFETERIA_LOADING
    })

    axios.get(REST_API_ENDPOINT + 'cafeteria/' + date)
        .then(res => res.data)
        .then(data => {
            const daily = data.data.menu.daily
            const dinner = data.data.menu.dinner
            const fix = data.data.menu.fix
            const lunch = data.data.menu.lunch
            const error = data.error

            const year = date.substr(0, 4)
            const month = date.substr(4, 2)
            const day = date.substr(6, 2)

            const name = getInputDayLabel(year, month, day) + '요일'


            dispatch({
                type: FETCH_CAFETERIA,
                daily,
                dinner,
                fix,
                lunch,
                error,
                year,
                month,
                day,
                name
            })
        })
        .catch(err => console.error(err))


}