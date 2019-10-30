import React from 'react';
import MileagePresenter from './presenter';
import axios from 'axios';
import REST_API_ENDPOINT from 'constants/endpoint';
import { decodeJsonWebToken } from 'utils/jsonwebtoken';

class MileageContainer extends React.Component {
    state = {
        rows: [
            {
                date: '191002(수)',
                history: '*2108 총장배 소프트웨어 경진 대회',
                number: '1',
                location: '성서대.마트',
                price: '-7000000'
            },
            {
                date: '191002(수)',
                history: '광동)제주삼다수 500ml',
                number: '1',
                location: '성서대.마트',
                price: '-700'
            },
            {
                date: '191002(수)',
                history: '광동)제주삼다수 500ml',
                number: '1',
                location: '성서대.마트',
                price: '-700'
            },
            {
                date: '191002(수)',
                history: '광동)제주삼다수 500ml',
                number: '1',
                location: '성서대.마트',
                price: '-700'
            },
            {
                date: '191002(수)',
                history: '광동)제주삼다수 500ml',
                number: '1',
                location: '성서대.마트',
                price: '-700'
            },
        ],
        loading: true
    }

    componentDidMount() {
        const decoded = decodeJsonWebToken(localStorage.getItem('token'))
        axios.post(REST_API_ENDPOINT + 'mileage', {
            id: decoded.id,
            pw: decoded.password
        })
            .then(res => res.data)
            .then(data => {
                console.log(data)
                if (data.is_ok) {
                    this.setState({
                        rows: data.result,
                        loading: false
                    })
                } else {
                    alert('마일리지 내역을 가져오는데 실패하였습니다. 관리자에게 문의해주세요')
                }
            })
            .catch(err => console.error(err))
    }

    render() {
        const { rows, loading } = this.state;
        return <MileagePresenter loading={loading} rows={rows} />
    }
}

export default MileageContainer;