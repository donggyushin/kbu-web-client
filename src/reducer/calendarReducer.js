import { FETCH_EVENTS, TURN_ON_EVENT_DETAIL, TURN_DOWN_EVENT_DETAIL, SELECT_EVENT } from "actions/type";

const initialState = {
    events: [],
    detailView: false,
    event: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_EVENTS:
            return fetchEventsReducer(state, action)
        case TURN_ON_EVENT_DETAIL:
            return turnOnEventDetailReducer(state, action)
        case TURN_DOWN_EVENT_DETAIL:
            return turnDownEventDetailView(state, action)
        case SELECT_EVENT:
            return selectEventReducer(state, action)
        default:
            return state;
    }
}

function selectEventReducer(state, action) {
    return {
        ...state,
        event: action.event,
        detailView: true
    }
}

function turnDownEventDetailView(state, action) {

    return {
        ...state,
        detailView: false,
        event: {}
    }
}

function turnOnEventDetailReducer(state, action) {
    return {
        ...state,
        detailView: true
    }
}

function fetchEventsReducer(state, action) {
    return {
        ...state,
        events: action.events
    }
}