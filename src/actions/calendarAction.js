import { FETCH_EVENTS, TURN_ON_EVENT_DETAIL, TURN_DOWN_EVENT_DETAIL, SELECT_EVENT } from "./type"

export const fetchEvents = (events) => (dispatch) => {
    dispatch({
        type: FETCH_EVENTS,
        events
    })
}

export const turnOnCalendarDetailView = () => (dispatch) => {
    dispatch({
        type: TURN_ON_EVENT_DETAIL
    })
}

export const turnDownCalendarDetailView = () => (dispatch) => {
    dispatch({
        type: TURN_DOWN_EVENT_DETAIL
    })
}

export const selectEvent = (event) => (dispatch) => {
    dispatch({
        type: SELECT_EVENT,
        event
    })
}