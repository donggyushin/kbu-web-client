import axios from 'axios';
import { FETCH_USER } from './type'
import { decodeJsonWebToken } from '../utils/jsonwebtoken'
import REST_API_ENDPOINT from '../constants/endpoint'


export const fetchUser = () => (dispatch, getState) => {

    const { user } = getState()


    if (user.sid === "") {

        const decoded = decodeJsonWebToken(window.localStorage.getItem("token"));
        const userId = decoded.id;
        const userPassword = decoded.password;

        if (userId && userPassword) {
            axios.post(REST_API_ENDPOINT + 'user/getuser', {
                id: userId,
                password: userPassword
            }).then(res => res.data)
                .then(data => {

                    if (data.is_ok) {
                        localStorage.setItem('kbu', data.token);

                        dispatch({
                            type: FETCH_USER,
                            user: data.result
                        })

                    } else {
                        alert('정보를 불러오는데 실패하였습니다. ')
                        window.localStorage.removeItem('token')
                        window.localStorage.removeItem('kbu')
                        window.location.href = '/'
                    }


                })
        }


    }



}