import React from 'react';
import ChapelPresenter from './presenter';
import axios from 'axios';
import REST_API_ENDPOINT from 'constants/endpoint';
import { decodeJsonWebToken } from 'utils/jsonwebtoken';


class ChapelContainer extends React.Component {
    state = {
        chapels: [],
        summary: {
            attendance: 0,
            late: 0,
            sure: 0,
            duty: 0
        },
        chapelLength: 0,
        loading: true
    }

    componentDidMount() {
        const decoded = decodeJsonWebToken(window.localStorage.getItem('token'));
        axios.post(REST_API_ENDPOINT + 'chapel', {
            id: decoded.id,
            pw: decoded.password
        })
            .then(res => res.data)
            .then(data => {
                console.log('data: ', data)
                if (data.is_ok === true) {
                    this.setState({
                        summary: {
                            attendance: data.result.summary.출석,
                            late: data.result.summary.지각,
                            sure: data.result.summary.확정,
                            duty: data.result.summary.규정일수
                        },
                        chapels: data.result.table_body,
                        loading: false,
                        chapelLength: data.result.table_body.length
                    })
                } else {
                    alert('채플 내역을 불러오지 못했습니다! 관리자에게 문의해주세요!')
                }
            })
            .catch(err => console.error(err))

        this.setState({
            chapelLength: this.state.chapels.length
        })

    }

    render() {
        const { chapels, summary, chapelLength, loading } = this.state;

        return <ChapelPresenter loading={loading} chapelLength={chapelLength} summary={summary} chapels={chapels} />
    }

}

export default ChapelContainer;