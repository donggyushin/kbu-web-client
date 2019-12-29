import axios from 'axios';
import { FETCH_USER, LOGOUT, LOGIN_USER, FETCH_SPECIFIC_PRAYER } from './type'
import { decodeJsonWebToken } from '../utils/jsonwebtoken'
import REST_API_ENDPOINT, { PYTHON_SERVER_ENDPOINT } from '../constants/endpoint'



export const loginUser = () => (dispatch, getState) => {
    dispatch({
        type: LOGIN_USER
    })
}


export const logoutUser = () => (dispatch, getState) => {
    dispatch({
        type: LOGOUT
    })
}


export const fetchUser = () => (dispatch, getState) => {

    const { user } = getState()


    if (user.sid === "") {

        axios.get(`${PYTHON_SERVER_ENDPOINT}intranet/info/lms`, {
            headers: {
                'authorization': window.localStorage.getItem('intratoken')
            }
        })
            .then(res => res.data)
            .then(data => {
                const { sid, name, major } = data;

                axios.post(`${PYTHON_SERVER_ENDPOINT}intranet/image`, {
                    sid
                }, {
                    headers: {
                        'authorization': window.localStorage.getItem('intratoken')
                    }
                })
                    .then(res => res.data)
                    .then(data => {
                        const { img } = data
                        dispatch({
                            type: FETCH_USER,
                            sid,
                            name,
                            major,
                            img
                        })
                    })
                    .catch(err => {
                        console.error(err)
                    })


            })
            .catch(err => {
                console.error(err)
            })


        return



    }



}