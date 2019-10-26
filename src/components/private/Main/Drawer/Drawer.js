import React from 'react';
import { Drawer, Button, Radio } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import themeColor from 'constants/themeColor'

const Container = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    position: relative;
    height:50px;
    background:${themeColor.theme};
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
`

const Icon = styled.i`
    font-size: 30px;
    cursor: pointer;
    position: absolute;
    left:30px;
    color:white;
`

const KBUImage = styled.img`
    width:100px;
`

const KBUText = styled.div`
    color:white;
    font-size: 20px;
    font-weight: 700;
    font-family: 'Nanum Gothic', sans-serif;
`

const MenuItem = styled.p`
    cursor: pointer;
`

const XButton = styled.i`
    position: absolute;
    right: 15px;
    top: 14px;
    font-size: 26px;
    cursor: pointer;
`

class DrawerComponent extends React.Component {
    state = { visible: false, placement: 'left' };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    onChange = e => {
        this.setState({
            placement: e.target.value,
        });
    };

    render() {
        const { logout, user } = this.props;
        const { refresh } = this;
        return (
            <Container>

                <a href={'/'}>
                    {/* <KBUImage src={require('assets/한국성서대학교2.png')} /> */}
                    <KBUText>한국성서대학교</KBUText>
                </a>

                <Icon className={'fas fa-bars'} onClick={this.showDrawer} />

                <Drawer
                    title="MENU"
                    placement={this.state.placement}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <XButton onClick={this.onClose} className={'fas fa-times'} />
                    {/* <MenuItem>이경민</MenuItem>
                    <MenuItem>신동규</MenuItem>
                    <MenuItem>신민철</MenuItem> */}
                    {(user.sid === '201303024' || user.sid === '201504018' || user.sid === '201504021') && <a style={{
                        textDecoration: 'none',
                        color: 'black'
                    }} href={'/admin'}>
                        <MenuItem>관리자 페이지</MenuItem>
                    </a>}
                    <MenuItem onClick={refresh}>새로고침</MenuItem>
                    <MenuItem style={{
                        color: '#e74c3c'
                    }} onClick={logout}>로그아웃</MenuItem>
                </Drawer>
            </Container>
        );
    }

    refresh = () => {
        window.localStorage.removeItem('user')
        window.location.href = '/'
    }


}

export default DrawerComponent