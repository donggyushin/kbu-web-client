import { MILEAGE_ERROR, FETCH_MILEAGE } from "actions/type";

const initialState = {
    rows: [],
    loading: true,
    error: ""
}

export default function (state = initialState, action) {
    switch (action.type) {
        case MILEAGE_ERROR:
            return mileageErrorReducer(state, action)

        case FETCH_MILEAGE:
            return fetchMileageReducer(state, action)
        default:
            return state;
    }
}

function fetchMileageReducer(state, action) {
    return {
        ...state,
        loading: false,
        rows: action.rows
    }
}


function mileageErrorReducer(state, action) {
    return {
        ...state,
        loading: false,
        error: "마일리지 내역을 가져오는데 실패하였습니다. "
    }
}
