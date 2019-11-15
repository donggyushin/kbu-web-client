import { FETCH_CAFETERIA } from "actions/type";

const initialState = {
    lunch: [],
    fix: [],
    dinner: [],
    daily: [],
    error: "",
    loading: true
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_CAFETERIA:
            return fetchCafeteriaReducer(state, action)
        default:
            return state;
    }
}

function fetchCafeteriaReducer(state, action) {

    return {
        ...state,
        daily: action.daily,
        dinner: action.dinner,
        fix: action.fix,
        lunch: action.lunch,
        error: action.error,
        loading: false
    }
}