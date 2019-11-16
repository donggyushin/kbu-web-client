import React from 'react';
import { Drawer } from 'antd';
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
    background:${props => props.darkBlue && themeColor.darkBlue};
    background:${props => props.gray && themeColor.gray};
    background:${props => props.chapel && '#2c3e50'};
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


const MenuItem = styled.p`
    cursor: pointer;
`

const XButton = styled.i`
    position: absolute;
    right: 15px;
    top: 14px;
    font-size: 26px;
    color:white;
    cursor: pointer;
`

const TitleContainer = styled.div`
    width:80%;
    position:relative;
    display:flex;
    justify-content:center;
`

const PageTitle = styled.div`
    position:absolute;
    bottom:0px;
    right:0;
    color:white;
`

const Logo = styled.img`
    width:50px;
`

const A = styled.a`
display: flex;
    align-items: center;
    
`

const UserIcon = styled.i`
    right: 17px;
    color: white;
    font-size: 21px;
    position: absolute;
`

class DrawerComponent extends React.Component {
    state = {
        visible: false,
        placement: 'left',
        pageTitle: "",
        darkBlue: false,
        gray: false,
        chapel: false
    };


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
        const { logout, user, location, mainClicked, isLoggedIn } = this.props;
        const { refresh } = this;
        const { darkBlue } = this.state;
        return (
            <Container darkBlue={darkBlue}>
                <TitleContainer>
                    <Link onClick={mainClicked} style={{
                        display: 'flex',
                        alignItems: 'center'
                    }} to={'/'} href={'/'}>
                        <Logo src={require('../../../../assets/logo.png')} />
                    </Link>
                    <PageTitle>
                        {location}
                    </PageTitle>
                </TitleContainer>

                <Icon className={'fas fa-bars'} onClick={this.showDrawer} />
                {(!location && isLoggedIn) && <UserIcon className={'fas fa-user'} />}
                {(!location && !isLoggedIn) && <UserIcon className={'fas fa-user-slash'} />}

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
                    {(user.sid === '201303024' || user.sid === '201504018' || user.sid === '201504021') && <Link onClick={this.onClose} style={{
                        textDecoration: 'none',
                        color: 'black'
                    }} to={'/admin'}>
                        <MenuItem>관리자 페이지</MenuItem>
                    </Link>}
                    <MenuItem onClick={refresh}>새로고침</MenuItem>
                    {isLoggedIn ? <MenuItem style={{
                        color: '#e74c3c'
                    }} onClick={logout}>로그아웃</MenuItem> : <Link onClick={this.onClose} to={'/login'}>
                            <MenuItem style={{
                                color: '#2ecc71'
                            }}>로그인</MenuItem>
                        </Link>}

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