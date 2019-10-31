import React from 'react';
import NoticePresenter from './presenter';
import axios from 'axios'
import REST_API_ENDPOINT from 'constants/endpoint';


class NoticeContainer extends React.Component {
    state = {
        page: 1,
        notices: [],
        loading: true,
        loading2: true
    }


    componentDidMount() {
        const { page } = this.state;

        axios.post(REST_API_ENDPOINT + 'notice', {
            page
        })
            .then(res => res.data)
            .then(data => {


                if (data.is_ok) {
                    this.setState({
                        notices: data.result.table_body,
                        loading: false,
                        loading2: false,
                        page: this.state.page + 1
                    })
                } else {
                    alert('공지를 받아오는데 실패하였습니다. 관리자에게 문의해주세요.')
                }

            })
            .catch(err => console.error(err))
    }


    render() {
        const { notices, loading, loading2 } = this.state;
        const { noticeClicked, nextRequest } = this;
        return <NoticePresenter nextRequest={nextRequest} loading2={loading2} noticeClicked={noticeClicked} loading={loading} notices={notices} />
    }

    nextRequest = () => {
        if (this.state.loading2) {
            return
        }
        this.setState({
            loading2: true
        })
        const { page } = this.state;
        axios.post(REST_API_ENDPOINT + 'notice', {
            page
        })
            .then(res => res.data)
            .then(data => {
                if (data.is_ok) {

                    this.setState({
                        notices: this.state.notices.concat(data.result.table_body),
                        loading2: false,
                        page: this.state.page + 1
                    })

                } else {
                    alert('공지사항을 불러오는데 실패하였습니다. 관리자에게 문의해주세요.')
                    this.setState({
                        loading2: false
                    })
                }
            })
            .catch(err => console.error(err))
    }

    noticeClicked = (link) => {
        window.location.href = link
    }

}

export default NoticeContainer