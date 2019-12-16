import axios from 'axios'
import REST_API_ENDPOINT from '../constants/endpoint'
import { FETCH_CHAPEL, CHAPEL_ERROR, SET_IMAGE_NAME } from './type'
import { decodeJsonWebToken } from 'utils/jsonwebtoken'

export const setChapelImage = (imageName) => (dispatch) => {

    console.log('chapel action')
    dispatch({
        type: SET_IMAGE_NAME,
        imageName
    })
}

export const fetchChapel = () => (dispatch, getState) => {
    const { chapel } = getState()

    if (chapel.chapels.length === 0) {
        const decoded = decodeJsonWebToken(window.localStorage.getItem("token"));
        axios.post(REST_API_ENDPOINT + 'chapel', {
            id: decoded.id,
            pw: decoded.password
        })
            .then(res => res.data)
            .then(data => {
                if (data.is_ok) {

                    dispatch({
                        type: FETCH_CHAPEL,
                        summary: {
                            attendance: data.result.summary.출석,
                            late: data.result.summary.지각,
                            sure: data.result.summary.확정,
                            duty: data.result.summary.규정일수
                        },
                        chapels: data.result.table_body,
                        loading: false,
                        chapelLength: data.result.table_body.length
                    })
                } else {
                    dispatch({
                        type: CHAPEL_ERROR,
                        error: "채플 내역을 불러오지 못했습니다. 관리자에게 문의해주세요. "
                    })
                }
            })
            .catch(err => console.error(err))
    }
}