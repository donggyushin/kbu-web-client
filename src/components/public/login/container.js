import React from 'react'
import Presenter from './presenter'
import axios from 'axios'
import REST_API_ENDPOINT, { PYTHON_SERVER_ENDPOINT } from 'constants/endpoint';
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

        axios.post(`${PYTHON_SERVER_ENDPOINT}lms/login`, {
            id,
            pw
        }, {
            withCredentials: true
        })
            .then(res => {
                const cookie = res.headers['authorization']
                localStorage.setItem('lmstoken', cookie)
                axios.post(`${PYTHON_SERVER_ENDPOINT}intranet/login`, {
                    id,
                    pw
                }, {
                    withCredentials: true
                })
                    .then(res => {
                        const cookie = res.headers['authorization']
                        localStorage.setItem('intratoken', cookie)

                        if (window.localStorage.getItem('nextPage')) {
                            const nextPage = window.localStorage.getItem('nextPage')
                            window.localStorage.removeItem('nextPage')
                            window.location.href = nextPage
                        } else {
                            window.location.href = '/'
                        }
                    })
                    .catch(err => {
                        console.error(err)
                        InfoModal('경고', '아이디 혹은 패스워드가 맞지 않습니다. ', () => {
                            window.location.href = '/'
                        })
                        return;
                    })
                return
            })
            .catch(err => {
                console.error(err)
                InfoModal('경고', 'LMS계정과 동기화 실패. ', () => {
                    window.location.href = '/'
                })
                return;
            })


    }

}

export default Container