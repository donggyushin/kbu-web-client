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
        progress: 0,
        intranetId: "",
        intranetPassword: "",
        id: "",
        password: "",
        nextButtonDisabled: false,
        newAccountButtonDisabled: false,
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
            progress,
            intranetId,
            intranetPassword,
            nextButtonDisabled,
            id,
            password,
            newAccountButtonDisabled,
            loading
        } = this.state;
        const settings = {
            dots: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        const { handleInput, nextButtonClicked, newAccountButtonClicked } = this;
        return <Container>
            <ProgressBar progress={progress} />
            <SliderContainer>
                <Slider ref={c => (this.slider = c)} touchMove={false} swipe={false} draggable={false} {...settings}>
                    <VerifyIntranet
                        nextButtonClicked={nextButtonClicked}
                        intranetId={intranetId}
                        intranetPassword={intranetPassword}
                        handleInput={handleInput}
                        nextButtonDisabled={nextButtonDisabled}

                    />
                    <NewAccountForm
                        id={id}
                        password={password}
                        handleInput={handleInput}
                        newAccountButtonClicked={newAccountButtonClicked}
                        newAccountButtonDisabled={newAccountButtonDisabled}

                    />
                </Slider>
            </SliderContainer>
            {loading && <NormalLoading />}
        </Container>
    }

    newAccountButtonClicked = () => {
        this.setState({
            newAccountButtonDisabled: true,
            loading: true
        })
        let result = false

        // 새로운 회원가입을 요청을 하고, 회원가입에 성공한다면 바로 로그인 시켜서 기본 화면으로 넘겨줌
        result = true
        if (result) {
            this.setState({
                progress: 100
            })
            // 로그인 시켜주기

            // 기본 화면으로 리다이렉트 시켜주기. 
            setTimeout(() => {
                this.setState({
                    loading: false,

                })
                window.location.href = '/'
            }, 1500);
        } else {
            InfoModal('경고', '에러메시지')
        }

        this.setState({
            newAccountButtonDisabled: false,

        })
    }

    nextButtonClicked = () => {
        let result = false;
        this.setState({
            nextButtonDisabled: true,
            loading: true
        })
        // 유저가 입력한 인트라넷 아이디와 패스워드 정보를 가지고
        // 제대로 입력된 정보인지 확인한다. 

        result = true;
        if (result) {
            this.slider.slickNext()
            this.setState({
                progress: 50
            })
        } else {
            InfoModal('경고', '인트라넷 계정이 정확하지 않습니다. ')
            this.setState({
                intranetPassword: ""
            })
        }
        this.setState({
            nextButtonDisabled: false,
            loading: false
        })
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    }
}

export default connect(mapStateToProps, {})(SignUpContainer)