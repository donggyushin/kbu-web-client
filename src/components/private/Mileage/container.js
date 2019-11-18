import React from 'react';
import MileagePresenter from './presenter';
import axios from 'axios';
import REST_API_ENDPOINT from 'constants/endpoint';
import { decodeJsonWebToken } from 'utils/jsonwebtoken';

class MileageContainer extends React.Component {


    componentDidMount() {
        this.props.requestMileage()
        window.document.getElementsByClassName("slick-arrow slick-next")[0].style.display = 'none'
    }

    render() {
        const { rows, loading } = this.props.mileage;
        return <MileagePresenter loading={loading} rows={rows} />
    }
}

export default MileageContainer;