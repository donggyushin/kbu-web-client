import { DECREASE_QRCODE_TIMER, TURN_ON_EXTENDED_QRCODE, TURN_DOWN_EXTENDED_QTCODE } from "actions/type"

const initialState = {
    extendedQrCode: false,
    timer: 15
}

export default function (state = initialState, action) {
    switch (action.type) {

        case DECREASE_QRCODE_TIMER:
            return {
                ...state,
                timer: state.timer - 1
            }

        case TURN_ON_EXTENDED_QRCODE:
            return {
                ...state,
                extendedQrCode: true
            }
        case TURN_DOWN_EXTENDED_QTCODE:
            return {
                ...state,
                extendedQrCode: false
            }

        default:
            return state
    }
}