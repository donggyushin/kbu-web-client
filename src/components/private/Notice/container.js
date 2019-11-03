import React from 'react';
import NoticePresenter from './presenter';
import axios from 'axios'
import REST_API_ENDPOINT from 'constants/endpoint';


class NoticeContainer extends React.Component {




    render() {


        const { notices, loading, loading2, error } = this.props.notice
        const { noticeRequestNext } = this.props;
        return <NoticePresenter noticeRequestNext={noticeRequestNext} error={error} loading2={loading2} loading={loading} notices={notices} />
    }


}

export default NoticeContainer