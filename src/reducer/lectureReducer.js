import { FETCH_LECTURE } from "actions/type";

const initialState = {
    schedule: [],
    loading: true,
    error: "",
    selected: "",
    semesters: [],
    colorMatches: {},
    arrayFirstSchedule: [],
    firstClassTime: 0
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_LECTURE:

            return fetchLectureReducer(state, action)

        default:
            return state;
    }
}

function fetchLectureReducer(state, action) {
    return {
        ...state,
        schedule: action.schedule,
        loading: false,
        error: action.error,
        selected: action.selected,
        semesters: action.semesters,
        colorMatches: action.colorMatches,
        arrayFirstSchedule: action.arrayFirstSchedule,
        firstClassTime: action.firstClassTime
    }
}