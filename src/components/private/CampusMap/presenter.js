import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:100%;
`

const Image = styled.img`
    width:100%;
`

export default function KBUCampusPresenter() {
    return <Container>
        <Image src={require('./kbumap.png')} />
    </Container>
}