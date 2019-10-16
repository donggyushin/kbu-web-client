import React from 'react';
import styled from 'styled-components';
import Login2Component from './public/login2/Login2';

const Container = styled.div``

class PublicComponent extends React.Component {
    render() {
        return <Container>
            <Login2Component />
        </Container>
    }
}

export default PublicComponent