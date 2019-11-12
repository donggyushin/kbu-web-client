import axios from 'axios';
import { FETCH_NOTICE, FETCH_NEXT_NOTICE, NOTICE_ERROR, NOTICE_LOADING } from './type'
import REST_API_ENDPOINT from 'constants/endpoint';

export const fetchNextNotice = () => (dispatch, getState) => {
    const { notice } = getState()

    const { loading2, page } = notice;

    if (loading2) {
        return
    }

    dispatch({
        type: NOTICE_LOADING
    })

    axios.post(REST_API_ENDPOINT + 'notice', {
        page
    })
        .then(res => res.data)
        .then(data => {

            if (data.is_ok) {
                dispatch({
                    type: FETCH_NEXT_NOTICE,
                    newNotices: data.result.table_body
                })
            } else {
                dispatch({
                    type: NOTICE_ERROR
                })
            }


        })
        .catch(err => console.error(err))

}


export const fetchNotice = () => (dispatch, getState) => {
    const { notice } = getState()



    if (notice.notices.length === 0) {
        console.log('here')
        const { page } = notice
        axios.post(REST_API_ENDPOINT + 'notice', {
            page
        })
            .then(res => res.data)
            .then(data => {

                console.log('notice data: ', data)

                dispatch({
                    type: FETCH_NOTICE,
                    notice: {
                        notices: data.result.table_body,
                        loading: false,
                        loading2: false,
                        page: notice.page + 1
                    }
                })
            })
            .catch(err => console.error(err))
    }
}