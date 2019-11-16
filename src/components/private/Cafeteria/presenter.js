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
    color:#ffeaa7;
`

const NormalText = styled.div``

const MarginHeight = styled.div`
    height:10px;
`

const Divider = styled.div`
    width:80%;
    border-bottom:0.5px solid ${themeColor.textInDarkBlue};
`


export default function CafeteriaPresenter({ today,
    dinner,
    lunch,
    fix,
    daily,
    loading,
    error,
}) {
    return <Container>
        <HeaderImage src={require('./menu-template.jpg')} />
        <BlackBoard>
            {loading && 'loading...'}
            {error && error}
            {(loading === false && error === null) && <>
                {today}
                <MarginHeight />
                <MarginHeight />
                <MarginHeight />
                <Row>
                    <Card>
                        <TitleText>중식</TitleText>
                        <MarginHeight />
                        {lunch[0] ? <>
                            <NormalText>{lunch[0].food1}</NormalText>
                            <NormalText>{lunch[0].food2}</NormalText>
                            <NormalText>{lunch[0].food3}</NormalText>
                            <NormalText>{lunch[0].food4}</NormalText>
                            <NormalText>{lunch[0].food5}</NormalText>
                            <NormalText>{lunch[0].food6}</NormalText>
                        </> : '나도 좀 쉬자'}

                    </Card>
                    <Card>
                        <TitleText>석식</TitleText>
                        <MarginHeight />
                        {dinner[0] ? <>
                            <NormalText>{dinner[0].food1}</NormalText>
                            <NormalText>{dinner[0].food2}</NormalText>
                            <NormalText>{dinner[0].food3}</NormalText>
                            <NormalText>{dinner[0].food4}</NormalText>
                            <NormalText>{dinner[0].food5}</NormalText>
                            <NormalText>{dinner[0].food6}</NormalText>
                        </> : '나도 좀 쉬자'}

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
                        {daily[0] ? <>
                            <NormalText>{daily[0].food1}</NormalText>
                            <NormalText>{daily[0].food2}</NormalText>
                            <NormalText>{daily[0].food3}</NormalText>
                            <NormalText>{daily[0].food4}</NormalText>
                            <NormalText>{daily[0].food5}</NormalText>
                            <NormalText>{daily[0].food6}</NormalText>
                        </> : '나도 좀 쉬자'}

                    </Card>
                    <Card>
                        <TitleText>고정 메뉴</TitleText>
                        <MarginHeight />
                        {fix[0] ? <>
                            <NormalText>{fix[0].food1}</NormalText>
                            <NormalText>{fix[0].food2}</NormalText>
                            <NormalText>{fix[0].food3}</NormalText>
                            <NormalText>{fix[0].food4}</NormalText>
                            <NormalText>{fix[0].food5}</NormalText>
                            <NormalText>{fix[0].food6}</NormalText>
                        </> : '나도 좀 쉬자'}

                    </Card>
                </Row>
            </>}


        </BlackBoard>

    </Container>
}

