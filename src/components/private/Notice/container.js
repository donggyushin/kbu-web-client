import React from 'react';
import NoticePresenter from './presenter';

class NoticeContainer extends React.Component {
    state = {
        notices: [
            {
                title: '[졸업시험] 19-2학기 컴퓨터졸업고사(DIAT 자격검정) 신청 안내',
                date: '2019-10-22'
            },
            {
                title: '[졸업시험] 19-2학기 컴퓨터졸업고사(DIAT 자격검정) 신청 안내',
                date: '2019-10-22'
            },
            {
                title: '[졸업시험] 19-2학기 컴퓨터졸업고사(DIAT 자격검정) 신청 안내',
                date: '2019-10-22'
            },
            {
                title: '[졸업시험] 19-2학기 컴퓨터졸업고사(DIAT 자격검정) 신청 안내',
                date: '2019-10-22'
            },
            {
                title: '[졸업시험] 19-2학기 컴퓨터졸업고사(DIAT 자격검정) 신청 안내',
                date: '2019-10-22'
            },
            {
                title: '[졸업시험] 19-2학기 컴퓨터졸업고사(DIAT 자격검정) 신청 안내',
                date: '2019-10-22'
            },
            {
                title: '[졸업시험] 19-2학기 컴퓨터졸업고사(DIAT 자격검정) 신청 안내',
                date: '2019-10-22'
            },
            {
                title: '[졸업시험] 19-2학기 컴퓨터졸업고사(DIAT 자격검정) 신청 안내',
                date: '2019-10-22'
            }
        ]
    }
    render() {
        const { notices } = this.state;
        return <NoticePresenter notices={notices} />
    }
}

export default NoticeContainer