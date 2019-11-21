import { FETCH_USER, LOGOUT, USER_LOGIN_LOADING, LOGIN_USER } from "actions/type";

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
    loading: true,
    isLoggedIn: window.localStorage.getItem('token') ? true : false,
    loginLoading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_USER:
            return fetchUserReducer(state, action)
        case LOGOUT:
            return logoutUserReducer(state, action)
        case LOGIN_USER:
            return loginUserReducer(state, action);
        default:
            return state;
    }
}

function loginUserReducer(state, action) {
    return {
        ...state,
        isLoggedIn: true
    }
}

function userLoginLoadingReducer(state, action) {
    return {
        ...state,
        loginLoading: true
    }
}

function logoutUserReducer(state, action) {
    window.localStorage.removeItem('token')
    window.location.href = "/"
    return {
        ...state,
        isLoggedIn: false
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