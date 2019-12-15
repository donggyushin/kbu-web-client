import React from 'react'
import { connect } from 'react-redux'
import InfoModal from 'components/global/Modal'
import styled from 'styled-components'
import ProgressBar from './ProgressBar'
import Slider from "react-slick";
import VerifyIntranet from './VerifyIntranet';
import NewAccountForm from './NewAccountForm'
import NormalLoading from 'components/global/normalLoading'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    align-items:center;
`

const SliderContainer = styled.div`
    width:100%;
    margin-top:36px;
`


class SignUpContainer extends React.Component {

    state = {
        loading: false
    }

    componentDidMount() {
        if (this.props.isLoggedIn) {
            InfoModal('경고', '로그인한 유저는 들어올 수 없는 페이지입니다. ', () => {
                window.location.href = '/'
            })
        }
    }

    render() {
        const {
            loading
        } = this.state;
        const settings = {
            dots: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        const { slide } = this;
        return <Container>
            <SliderContainer>
                <Slider ref={c => (this.slider = c)} touchMove={false} swipe={false} draggable={false} {...settings}>
                    <VerifyIntranet

                        slide={slide}
                    />
                    <NewAccountForm


                    />
                </Slider>
            </SliderContainer>
            {loading && <NormalLoading />}
        </Container>
    }

    slide = () => {
        this.slider.slickNext()
    }


}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    }
}

export default connect(mapStateToProps, {})(SignUpContainer)