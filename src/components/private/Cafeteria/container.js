import React from 'react';
import { fetchCafeteria } from 'actions/cafeteriaAction'
import { connect } from 'react-redux'
import InfoModal from 'components/global/Modal';
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


class CafeteriaContainer extends React.Component {

    state = {
        mode: 'lunch',
        year: "",
        month: "",
        day: ""
    }

    componentDidMount() {

        const { fetchCafeteria } = this.props;
        fetchCafeteria(this.getTodayDate())
        const todayObject = this.getTodayObject()
        this.setState({
            year: todayObject.year,
            month: todayObject.month,
            day: todayObject.day
        })
    }

    render() {
        const { dinner, lunch, fix, daily, loading,
            error, year, month, day, name } = this.props;
        const { mode } = this.state;
        const { moonClicked,
            onSwipe,
            sunClicked, previousButtonClicked, nextButtonClicked, iconClicked } = this;
        // return <CafeteriaPresenter
        //     dinner={dinner}
        //     lunch={lunch}
        //     fix={fix}
        //     daily={daily}
        //     loading={loading}
        //     error={error}
        //     mode={mode}
        //     moonClicked={moonClicked}
        //     sunClicked={sunClicked}
        //     year={year}
        //     month={month}
        //     day={day}
        //     name={name}
        //     previousButtonClicked={previousButtonClicked}
        //     nextButtonClicked={nextButtonClicked}
        //     onSwipe={onSwipe}
        //     iconClicked={iconClicked}

        // />
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
                iconClicked={iconClicked}
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
                            <Slider ref={c => (this.slider = c)} onSwipe={onSwipe} {...settings}>
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

    onSwipe = () => {
        if (this.state.mode === 'lunch') {
            this.setState({
                mode: 'dinner'
            })
        } else {
            this.setState({
                mode: 'lunch'
            })
        }

    }

    previousButtonClicked = () => {
        const { year, month, day } = this.state;
        let numDay = parseInt(day)
        numDay = numDay - 1
        this.setState({
            mode: 'lunch'
        })
        if (this.props.name === '월요일') {
            numDay = numDay - 2
        }
        if (numDay > 0) {
            this.setState({
                day: numDay
            })
            this.props.fetchCafeteria(year.toString() + month.toString() + numDay.toString())
        } else {
            InfoModal('경고', '이번 달 내역까지만 불러오기 가능합니다. ')
        }

    }

    nextButtonClicked = () => {
        const { year, month, day } = this.state;
        const lastDay = (new Date(year, month, 0)).getDate();
        let numDay = parseInt(day)
        numDay = numDay + 1
        this.setState({
            mode: 'lunch'
        })
        if (this.props.name === '금요일') {
            numDay = numDay + 2
        }
        if (numDay > lastDay) {
            InfoModal('경고', '이번 달 내역까지만 불러오기 가능합니다. ')
        } else {
            this.setState({
                day: numDay
            })
            this.props.fetchCafeteria(year.toString() + month.toString() + numDay.toString())
        }
    }

    iconClicked = () => {



        if (this.state.mode === 'lunch') {
            this.slider.slickNext()
            this.setState({
                mode: 'dinner'
            })
        } else {
            this.slider.slickPrev()
            this.setState({
                mode: 'lunch'
            })
        }
    }

    moonClicked = () => {

        if (this.state.mode === 'lunch') {

            this.slider.slickNext()
            this.setState({
                mode: 'dinner'
            })
        }
    }

    sunClicked = () => {
        if (this.state.mode === 'dinner') {

            this.slider.slickPrev()
            this.setState({
                mode: 'lunch'
            })
        }
    }

    getTodayObject() {
        const today = {
            year: new Date().getFullYear(),
            month: new Date().getMonth() + 1,
            day: new Date().getDate()
        }
        return today
    }

    getTodayDate() {
        const date = new Date()
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()



        return year.toString() + month.toString() + day.toString()
    }

    getTodayLabel() {

        var week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');

        var today = new Date().getDay();
        var todayLabel = week[today];

        return todayLabel;
    }




}

const mapStateToProps = state => {
    return {
        lunch: state.cafeteria.lunch,
        fix: state.cafeteria.fix,
        daily: state.cafeteria.daily,
        dinner: state.cafeteria.dinner,
        loading: state.cafeteria.loading,
        error: state.cafeteria.error,
        year: state.cafeteria.year,
        month: state.cafeteria.month,
        day: state.cafeteria.day,
        name: state.cafeteria.name
    }
}

export default connect(mapStateToProps, {
    fetchCafeteria
})(CafeteriaContainer)