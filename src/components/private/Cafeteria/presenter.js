import React from 'react';
import styled from 'styled-components';
import themeColor from 'constants/themeColor';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-end;
    background:${themeColor.darkBlue};
    height:100vh;
`

const HeaderImage = styled.img`
    width:100%;
    object-fit:contain;
`

const BlackBoard = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    font-family:'irop';
    height:100%;
    background:${themeColor.darkBlue};
    color:${themeColor.textInDarkBlue};
`



export default function CafeteriaPresenter() {
    return <Container>
        <HeaderImage src={require('./menu-template.jpg')} />
        <BlackBoard>
            cafeteria
        </BlackBoard>
    </Container>
}

