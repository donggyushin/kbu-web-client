import React from 'react';
import LecturePresenter from './presenter';

class LectureContainer extends React.Component {
    state = {
        schedule: [
            [
                ['무선및모바일통신', '정보2실', '13:30', '14:45'],
                ['데이터마이닝과통계', '정보2실', '14:55', '16:10']
            ],
            [
                ['데이터마이닝과통계', '정보2실', '10:25', '11:40'],
                ['네트워크프로그래밍', '정보2실', '13:30', '14:45']
            ], [
                ['세계문명과기독교Ⅱ', '천마홀', '09:00', '10:15'],
                ['전도훈련Ⅵ', '모리아관 301호', '13:30', '15:20'],
                ['미래설계상담', '정보3실', '15:30', '16:20']
            ], [
                ['네트워크프로그래밍', '정보2실', '09:00', '10:15'],
                ['무선및모바일통신', '정보2실', '13:30', '14:45']
            ], []
        ]
    }

    componentDidMount() {
        console.log('lets see schedule[0]: ', this.state.schedule[0])
    }

    render() {
        const { schedule } = this.state;
        return <LecturePresenter schedule={schedule} />
    }
}

export default LectureContainer