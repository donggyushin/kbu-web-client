
import React from 'react';
import { Drawer } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom'


const Container = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
`

const Icon = styled.div`
    font-size: 30px;
    cursor: pointer;
    position: absolute;
    left:10px;
    color:#b2bec3;
`

class NewAccountDrawer extends React.Component {
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
                <Icon className={'fas fa-bars'} onClick={this.showDrawer} />
                <Drawer
                    title="MENU"
                    placement={this.state.placement}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <Link style={{
                        textDecoration: 'none',
                        color: 'black'
                    }} to={'/'}>
                        <p>로그인</p>
                    </Link>
                </Drawer>
            </Container>
        );
    }
}

export default NewAccountDrawer;
