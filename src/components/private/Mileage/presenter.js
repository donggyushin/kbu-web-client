import React from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick-theme.css";
import 'slick-carousel/slick/slick.css'
import Slider from 'react-slick'
import VersionOne from './VersionOne';
import VersionTwo from './VersionTwo';

const Container = styled.div``


export default function MileagePresenter({ rows, loading }) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        button: false
    };

    return <Container>

        <Slider {...settings}>
            <VersionOne rows={rows} loading={loading} />
            <VersionTwo />
        </Slider>

    </Container>
}