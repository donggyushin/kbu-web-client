import React from 'react'
import Presenter from './presenter'
import axios from 'axios'
import REST_API_ENDPOINT from 'constants/endpoint';
import { generateJsonWebToken } from 'utils/jsonwebtoken';
import InfoModal from 'components/global/Modal';

class Container extends React.Component {

    state = {
        id: "",
        pw: "",
        loading: false
    }

    render() {
        const { handleInput, login, handleKeyPress } = this;
        const { id, pw, loading } = this.state
        return <Presenter handleKeyPress={handleKeyPress} login={login} loading={loading} id={id} pw={pw} handleInput={handleInput} />
    }

    handleKeyPress = e => {
        if (e.key === 'Enter') {
            this.login()
        }
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = () => {
        const { id, pw } = this.state
        this.setState({
            loading: true
        })
        axios.post(REST_API_ENDPOINT + `user/login`, {
            id,
            password: pw
        }).then(res => res.data)
            .then(result => {
                if (result.is_ok) {
                    const token = generateJsonWebToken(id, pw)
                    window.localStorage.setItem('token', token)
                    if (window.localStorage.getItem('nextPage')) {
                        const nextPage = window.localStorage.getItem('nextPage')
                        window.localStorage.removeItem('nextPage')
                        window.location.href = nextPage
                    } else {
                        window.location.href = '/'
                    }
                } else {
                    InfoModal('로그인에 실패하였습니다. ', result.result)
                    this.setState({
                        password: "",
                        loading: false
                    })
                }
            })
    }

}

export default Container