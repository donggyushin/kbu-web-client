import React from 'react';
import styled from 'styled-components';
import LoginComponent from './public/login/Login';

const Container = styled.div``

class PublicComponent extends React.Component {
    render() {
        return <Container>
            <LoginComponent />
        </Container>
    }
}

export default PublicComponent