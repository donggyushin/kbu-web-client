import React from 'react';
import LecturePresenter from './presenter';
import axios from 'axios';
import REST_API_ENDPOINT from 'constants/endpoint';
import { decodeJsonWebToken } from 'utils/jsonwebtoken';

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
        ],
        loading: true
    }

    componentDidMount() {

        const decoded = decodeJsonWebToken(window.localStorage.getItem('token'))
        axios.post(REST_API_ENDPOINT + 'lecture', {
            id: decoded.id,
            pw: decoded.password
        })
            .then(res => res.data)
            .then(data => {
                if (data.is_ok) {
                    this.setState({
                        schedule: data.result.table_body,
                        loading: false
                    })
                    window.localStorage.setItem('schedule', data.result.table_body.toString())
                } else {
                    alert('시간표를 가져오지 못하였습니다. 관리자에게 문의해주세요!')
                }

            })
            .catch(err => console.error(err))

    }

    render() {
        const { schedule, loading } = this.state;
        return <LecturePresenter loading={loading} schedule={schedule} />
    }
}

export default LectureContainer