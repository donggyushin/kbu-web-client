import { FETCH_NOTICE, FETCH_NEXT_NOTICE, NOTICE_ERROR, NOTICE_LOADING } from "actions/type";

const initialState = {
    page: 1,
    notices: [],
    loading: true,
    loading2: true,
    error: ""
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_NOTICE:
            return fetchNoticeReducer(state, action);

        case NOTICE_LOADING:
            return {
                ...state,
                loading2: true
            }
        case NOTICE_ERROR:
            return {
                ...state,
                loading2: false,
                error: "새로운 공지사항을 불러오는데 실패하였습니다. "
            }
        case FETCH_NEXT_NOTICE:
            return fetchNextNoticeReducer(state, action)

        default:
            return state;
    }
}

function fetchNextNoticeReducer(state, action) {
    return {
        ...state,
        notices: state.notices.concat(action.newNotices),
        loading2: false
    }
}

function fetchNoticeReducer(state, action) {
    return {
        ...state,
        page: action.notice.page,
        notices: action.notice.notices,
        loading: action.notice.loading,
        loading2: action.notice.loading2
    }
}