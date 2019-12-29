import { FETCH_LECTURE, FETCH_ONE_LECTURE_DATA, SELECT_LECTURE, LECTURE_LOADING } from "actions/type";

const initialState = {
    schedule: [],
    loading: true,
    error: "",
    selected: "",
    semesters: [],
    colorMatches: {
        empty: true
    },
    arrayFirstSchedule: [],
    firstClassTime: 0,
    lastClassTime: 0,
    detail: {
        summary: {
            etcAbsence: "",
            normalAbsence: "",
            late: "",
            attendance: ""
        },
        datas: [],
        head: [],
        loading: true,
        error: ""
    },
    selectedLecture: {
        name: "",
        location: "",
        start: "",
        end: ""
    },
    lectureCodes: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_LECTURE:

            return fetchLectureReducer(state, action)
        case FETCH_ONE_LECTURE_DATA:
            return fetchOneLectureDetailReducer(state, action)
        case SELECT_LECTURE:
            return selectLectureReducer(state, action)
        case LECTURE_LOADING:
            return {
                ...state,
                detail: {
                    ...state.detail,
                    loading: true
                }
            }
        default:
            return state;
    }
}

function selectLectureReducer(state, action) {
    const { name, location, start, end } = action;
    return {
        ...state,
        selectedLecture: {
            name,
            location,
            start,
            end
        }
    }
}

function fetchOneLectureDetailReducer(state, action) {
    return {
        ...state,
        detail: {
            summary: {
                etcAbsence: action.etcAbsence,
                normalAbsence: action.normalAbsence,
                late: action.late,
                attendance: action.attendance
            },
            datas: action.datas,
            error: action.error,
            head: action.head
        }
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
        firstClassTime: action.firstClassTime,
        lastClassTime: action.lastClassTime
    }
}