import { DECREASE_QRCODE_TIMER, TURN_ON_EXTENDED_QRCODE, TURN_DOWN_EXTENDED_QTCODE } from './type'

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