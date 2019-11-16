import { TOUCHABLE, UNTOUCHABLE } from "./type"

export const touchable = () => (dispatch) => {
    dispatch({
        type: TOUCHABLE
    })
}

export const untouchable = () => (dispatch) => {
    dispatch({
        type: UNTOUCHABLE
    })
}