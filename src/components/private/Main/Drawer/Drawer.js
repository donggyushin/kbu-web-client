import React from 'react';
import { Drawer, Button, Radio } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    position: relative;
    height:60px;
`

const Icon = styled.i`
    font-size: 30px;
    cursor: pointer;
    position: absolute;
    left:30px;
    color:#b2bec3;
`

const KBUImage = styled.img`
    width:100px;
`

const MenuItem = styled.p`
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
        const { logout } = this.props;
        return (
            <Container>
                <a href={'/'}>
                    <KBUImage src={require('assets/한국성서대학교2.png')} />
                </a>
                <Icon className={'fas fa-bars'} onClick={this.showDrawer} />
                <Drawer
                    title="MENU"
                    placement={this.state.placement}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <MenuItem>이경민</MenuItem>
                    <MenuItem>신동규</MenuItem>
                    <MenuItem>신민철</MenuItem>
                    <a style={{
                        textDecoration: 'none',
                        color: 'black'
                    }} href={'/admin'}>
                        <MenuItem>관리자 페이지</MenuItem>
                    </a>
                    <MenuItem onClick={logout}>로그아웃</MenuItem>
                </Drawer>
            </Container>
        );
    }
}

export default DrawerComponent