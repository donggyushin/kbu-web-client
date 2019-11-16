import { TOUCHABLE, UNTOUCHABLE } from "actions/type"

const initialState = {
    touchable: true
}

export default function (state = initialState, action) {
    switch (action.type) {

        case TOUCHABLE:
            return touchableReducer(state, action)
        case UNTOUCHABLE:
            return untouchableReducer(state, action)

        default:
            return state
    }
}

function touchableReducer(state, action) {
    return {
        ...state,
        touchable: true
    }
}

function untouchableReducer(state, action) {
    return {
        ...state,
        touchable: false
    }
}