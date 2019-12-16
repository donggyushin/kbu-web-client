import { DECREASE_QRCODE_TIMER, TURN_ON_EXTENDED_QRCODE, TURN_DOWN_EXTENDED_QTCODE, INIT_QRCODE, FETCH_QRCODE } from './type'
import { decodeJsonWebToken } from 'utils/jsonwebtoken'
import Axios from 'axios'
import REST_API_ENDPOINT from 'constants/endpoint'

export const decreaseTimer = () => (dispatch, getState) => {
    dispatch({
        type: DECREASE_QRCODE_TIMER
    })
}

export const turnOnExtendedQrCode = () => (dispatch, getState) => {
    dispatch({
        type: TURN_ON_EXTENDED_QRCODE
    })
}

export const turnDownExtendedQrCode = () => (dispatch, getState) => {
    dispatch({
        type: TURN_DOWN_EXTENDED_QTCODE
    })
}

export const initQrCode = () => (dispatch) => {
    dispatch({
        type: INIT_QRCODE
    })
}

export const fetchQrcode = (img) => (dispatch, getState) => {
    dispatch({
        type: FETCH_QRCODE,
        img
    })
}