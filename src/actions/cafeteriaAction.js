import axios from 'axios';
import { FETCH_CAFETERIA } from './type'
import REST_API_ENDPOINT, { KBU_CAFETERIA_ENDPOINT } from 'constants/endpoint';


export const fetchCafeteria = (date) => (dispatch, getState) => {
    const { cafeteria } = getState()
    if (cafeteria.loading) {
        axios.get(REST_API_ENDPOINT + 'cafeteria/' + date)
            .then(res => res.data)
            .then(data => {
                const daily = data.data.menu.daily
                const dinner = data.data.menu.dinner
                const fix = data.data.menu.fix
                const lunch = data.data.menu.lunch
                const error = data.error

                dispatch({
                    type: FETCH_CAFETERIA,
                    daily,
                    dinner,
                    fix,
                    lunch,
                    error
                })
            })
            .catch(err => console.error(err))
    }

}