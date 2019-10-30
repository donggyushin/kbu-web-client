import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding-top:30px;
`

const Image = styled.img`
    width:100%;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
`

export default function KBUCampusPresenter() {
    return <Container>
        <Image src={require('./kbumap.png')} />
    </Container>
}