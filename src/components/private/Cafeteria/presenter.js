import React from 'react';
import styled from 'styled-components';
import Daily from './Daily'
import SlickBar from './SlickBar';
import SunAndMoon from './SunAndMoon';
import LunchBox from './Lunch';
import Fix from './Fix';
import Dinner from './Dinner';
import SmallLoading from 'components/global/SmallLoading';
import Slider from 'react-slick'


const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    height:100vh;
    width:100%;
`

const LoadingContainer = styled.div`
    margin-top:50px;
`

const SlideContainer = styled.div`
    width:100%;
    text-align:center;
`


export default function CafeteriaPresenter({
    dinner,
    lunch,
    fix,
    daily,
    loading,
    error,
    mode,
    moonClicked,
    sunClicked,
    year,
    month,
    day,
    name,
    previousButtonClicked,
    nextButtonClicked,
    onSwipe
}) {
    return <Container>
        <SlickBar
            year={year}
            month={month}
            day={day}
            name={name}
            previousButtonClicked={previousButtonClicked}
            nextButtonClicked={nextButtonClicked}
        />
        <SunAndMoon
            moonClicked={moonClicked}
            sunClicked={sunClicked}
            mode={mode} />
        {(() => {
            if (loading) {
                return <LoadingContainer>
                    <SmallLoading />
                </LoadingContainer>
            } else {
                const settings = {
                    dots: false,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                return <>
                    <SlideContainer>
                        <Slider onSwipe={onSwipe} {...settings}>

                            <LunchBox lunch={lunch} />


                            <Dinner dinner={dinner} />

                        </Slider>
                    </SlideContainer>
                    <Fix fix={fix} />
                    <Daily daily={daily} />
                </>
            }
        })()}

    </Container>
}

