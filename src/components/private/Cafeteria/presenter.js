import React from 'react';
import styled from 'styled-components';
import themeColor from 'constants/themeColor';


const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
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

const Row = styled.div`
    width:100%;
    display:flex;
    align-items:flex-start;
    justify-content:space-around;
`

const Card = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const TitleText = styled.div`
    font-size:25px;
`

const NormalText = styled.div``

const MarginHeight = styled.div`
    height:10px;
`

const Divider = styled.div`
    width:80%;
    border-bottom:0.5px solid ${themeColor.textInDarkBlue};
`


export default function CafeteriaPresenter({ today }) {
    return <Container>
        <HeaderImage src={require('./menu-template.jpg')} />
        <BlackBoard>
            {today}
            <MarginHeight />
            <MarginHeight />
            <MarginHeight />
            <Row>
                <Card>
                    <TitleText>중식</TitleText>
                    <MarginHeight />
                    <NormalText>북어국</NormalText>
                    <NormalText>흰 밥</NormalText>
                    <NormalText>돈육야채볶음</NormalText>
                    <NormalText>가지무침</NormalText>
                    <NormalText>오이소박이</NormalText>
                </Card>
                <Card>
                    <TitleText>석식</TitleText>
                    <MarginHeight />
                    <NormalText>북어국</NormalText>
                    <NormalText>흰 밥</NormalText>
                    <NormalText>돈육야채볶음</NormalText>
                    <NormalText>가지무침</NormalText>
                    <NormalText>오이소박이</NormalText>
                </Card>
            </Row>
            <MarginHeight />
            <MarginHeight />
            <Divider />
            <MarginHeight />
            <MarginHeight />
            <Row>
                <Card>
                    <TitleText>데일리</TitleText>
                    <MarginHeight />
                    <NormalText>북어국</NormalText>
                    <NormalText>흰 밥</NormalText>
                    <NormalText>돈육야채볶음</NormalText>
                    <NormalText>가지무침</NormalText>
                    <NormalText>오이소박이</NormalText>
                </Card>
                <Card>
                    <TitleText>고정 메뉴</TitleText>
                    <MarginHeight />
                    <NormalText>북어국</NormalText>
                    <NormalText>흰 밥</NormalText>
                    <NormalText>돈육야채볶음</NormalText>
                    <NormalText>가지무침</NormalText>
                    <NormalText>오이소박이</NormalText>
                </Card>
            </Row>
        </BlackBoard>

    </Container>
}

