import axios from 'axios';
import REST_API_ENDPOINT from 'constants/endpoint';
import { FETCH_MILEAGE, MILEAGE_ERROR } from './type';
import { decodeJsonWebToken } from 'utils/jsonwebtoken';

export const fetchMileage = () => (dispatch, getState) => {
    const { mileage } = getState()
    const decoded = decodeJsonWebToken(window.localStorage.getItem("token"));
    if (mileage.rows.length === 0) {
        axios.post(REST_API_ENDPOINT + 'mileage', {
            id: decoded.id,
            pw: decoded.password
        })
            .then(res => res.data)
            .then(data => {
                if (data.is_ok) {
                    dispatch({
                        type: FETCH_MILEAGE,
                        rows: data.result
                    })
                } else {
                    dispatch({
                        type: MILEAGE_ERROR
                    })
                }
            })
            .catch(err => console.error(err))
    }

}