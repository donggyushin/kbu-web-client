import React from 'react';
import MileagePresenter from './presenter';

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
        ]
    }
    render() {
        const { rows } = this.state;
        return <MileagePresenter rows={rows} />
    }
}

export default MileageContainer;