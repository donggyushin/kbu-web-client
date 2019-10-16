import React from 'react';
import { Drawer, Button, Radio } from 'antd';
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
        return (
            <Container>
                <KBUImage src={require('assets/한국성서대학교2.png')} />
                <Icon className={'fas fa-bars'} onClick={this.showDrawer} />
                <Drawer
                    title="MENU"
                    placement={this.state.placement}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <p>이경민</p>
                    <p>신동규</p>
                    <p>신민철</p>
                </Drawer>
            </Container>
        );
    }
}

export default DrawerComponent