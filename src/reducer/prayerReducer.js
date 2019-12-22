import { FETCH_TODAYS_PRAYER, LOADING_PARYER } from "actions/type"

const initialState = {
    todaysPrayer: "",
    prayersOfStudents: [],
    loading: true
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_TODAYS_PRAYER:
            return fetchTodaysPrayer(state, action)
        case LOADING_PARYER:
            return loadingPrayer(state, action)
        default:
            return state
    }
}

function loadingPrayer(state, action) {
    return {
        ...state,
        loading: true
    }
}

function fetchTodaysPrayer(state, action) {
    const {
        prayer,
        prayersOfStudents
    } = action;
    return {
        ...state,
        todaysPrayer: prayer,
        prayersOfStudents,
        loading: false
    }
}