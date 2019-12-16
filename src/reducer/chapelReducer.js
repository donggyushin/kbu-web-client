import { FETCH_CHAPEL, CHAPEL_ERROR, SET_IMAGE_NAME } from "actions/type";

const initialState = {
    chapels: [],
    summary: {
        attendance: 0,
        late: 0,
        sure: 0,
        duty: 0
    },
    chapelLength: 0,
    loading: true,
    error: "",
    cardImage: ""
}

export default function (state = initialState, action) {
    switch (action.type) {

        case FETCH_CHAPEL:

            return fetchChapelReducer(state, action)

        case CHAPEL_ERROR:

            return chapelErrorReducer(state, action)

        case SET_IMAGE_NAME:

            return setImageNameReducer(state, action)

        default:
            return state;
    }
}

function setImageNameReducer(state, action) {
    console.log("reducer function")
    return {
        ...state,
        cardImage: action.imageName
    }
}

function chapelErrorReducer(state, action) {
    return {
        ...state,
        error: action.error
    }
}

function fetchChapelReducer(state, action) {
    return {
        ...state,
        chapels: action.chapels,
        summary: action.summary,
        chapelLength: action.chapelLength,
        loading: false,
        error: ""
    }
}
