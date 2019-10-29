import React from 'react';
import MileagePresenter from './presenter';

class MileageContainer extends React.Component {
    state = {
        rows: [
            {
                date: '191002(수)',
                history: '*2108총장배소프트웨어경진대회',
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
        ]
    }
    render() {
        const { rows } = this.state;
        return <MileagePresenter rows={rows} />
    }
}

export default MileageContainer;