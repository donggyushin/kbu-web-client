import { FETCH_CAFETERIA, CAFETERIA_LOADING } from "actions/type";

const initialState = {
    lunch: [],
    fix: [],
    dinner: [],
    daily: [],
    error: "",
    loading: true,
    year: "",
    month: "",
    day: "",
    name: ""
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_CAFETERIA:
            return fetchCafeteriaReducer(state, action)
        case CAFETERIA_LOADING:
            return loading(state, action)
        default:
            return state;
    }
}

function loading(state, action) {
    return {
        ...state,
        loading: true
    }
}

function fetchCafeteriaReducer(state, action) {
    const { year, month, day, name } = action;
    return {
        ...state,
        daily: action.daily,
        dinner: action.dinner,
        fix: action.fix,
        lunch: action.lunch,
        error: action.error,
        loading: false,
        year,
        month,
        day,
        name
    }
}