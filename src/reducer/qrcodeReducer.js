import { DECREASE_QRCODE_TIMER, TURN_ON_EXTENDED_QRCODE, TURN_DOWN_EXTENDED_QTCODE, INIT_QRCODE, FETCH_QRCODE } from "actions/type"

const initialState = {
    extendedQrCode: false,
    timer: 15,
    loading: true,
    img: ""
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
        case INIT_QRCODE:
            return {
                ...state,
                extendedQrCode: false,
                timer: 15,
                loading: true,
                img: ""
            }
        case FETCH_QRCODE:
            return fetchQrcodeReducer(state, action)

        default:
            return state
    }
}

const fetchQrcodeReducer = (state, action) => {
    const { img } = action;
    return {
        ...state,
        loading: false,
        img
    }
}