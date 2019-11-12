import { FETCH_USER } from "actions/type";

const initialState = {
    email: "",
    gender: "",
    grade: "",
    sid: "",
    img: "",
    img_height: 0,
    img_width: 0,
    major: "",
    phone: "",
    status: "",
    name: "",
    loading: true
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_USER:
            return fetchUserReducer(state, action)

        default:
            return state;
    }
}

function fetchUserReducer(state, action) {
    return {
        ...state,
        email: action.user.email,
        gender: action.user.gender,
        grade: action.user.grade,
        sid: action.user.sid,
        img: action.user.img,
        img_height: action.user.img_height,
        img_width: action.user.img_width,
        major: action.user.major,
        phone: action.user.phone,
        status: action.user.status,
        name: action.user.name,
        loading: false
    }
}