import React from 'react';
import NoticePresenter from './presenter';
import { connect } from 'react-redux'
import { fetchNextNotice } from 'actions/noticeAction'


class NoticeContainer extends React.Component {


    componentDidMount() {
        this.props.requestNotice()
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }


    render() {


        const { notices, loading, loading2, error } = this.props.notice
        const { noticeRequestNext } = this.props;

        return <NoticePresenter noticeRequestNext={noticeRequestNext} error={error} loading2={loading2} loading={loading} notices={notices} />
    }

    isBottom(el) {
        console.log('el.getBoundingClientRect().bottom: ', el.getBoundingClientRect().bottom)
        console.log('window.innerHeight: ', window.innerHeight);
        return el.getBoundingClientRect().bottom - window.innerHeight < 50 ? true : false
    }


    handleScroll = () => {
        const wrappedElement = document.getElementById('noticecontainer');
        if (this.isBottom(wrappedElement)) {
            this.props.fetchNextNotice()

            // document.removeEventListener('scroll', this.trackScrolling);
        }
    }


}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps, { fetchNextNotice })(NoticeContainer)