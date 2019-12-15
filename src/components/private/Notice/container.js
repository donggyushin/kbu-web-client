import React from 'react';
import NoticePresenter from './presenter';
import { connect } from 'react-redux'
import { fetchNextNotice } from 'actions/noticeAction'


class NoticeContainer extends React.Component {


    componentDidMount() {
        this.props.requestNotice()
    }


    render() {


        const { notices, loading, loading2, error } = this.props.notice
        const { noticeRequestNext } = this.props;

        return <NoticePresenter noticeRequestNext={noticeRequestNext} error={error} loading2={loading2} loading={loading} notices={notices} />
    }



}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps, { fetchNextNotice })(NoticeContainer)