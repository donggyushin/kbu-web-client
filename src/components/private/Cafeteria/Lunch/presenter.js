import React from 'react'
import styled from 'styled-components';
import themeColor from 'constants/themeColor';

const AdditionalContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    padding-bottom: 5px;
`

const Container = styled.div`
    width:85%;
    background:white;
    margin-top:18px;
    border-radius:4px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    padding-bottom:15px;
`

const RowOne = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:10px;
    margin-bottom:10px;
`
const Title = styled.div`
    margin-left:20px;
    font-size:20px;
`
const Date = styled.div`
    margin-right:20px;
`
const RedLine = styled.div`
    width:100%;
    height:3px;
    background:${themeColor.theme};
`

const RowTwo = styled.div`
    display:flex;
    flex-direction:column;
    padding-left:20px;
    padding-top:10px;
`

const Row = styled.div`
    color: rgba(0,0,0,0.4);
    display:flex;
`



export default function ({ lunch }) {

    return <AdditionalContainer>
        <Container>
            <RowOne>
                <Title>점심식사</Title>
                <Date>11:00 ~ 13:30</Date>
            </RowOne>
            <RedLine />
            <RowTwo>
                {(() => {
                    if (lunch[0]) {
                        return <>
                            <Row>{lunch[0].food1}</Row>
                            <Row>{lunch[0].food2}</Row>
                            <Row>{lunch[0].food3}</Row>
                            <Row>{lunch[0].food4}</Row>
                            <Row>{lunch[0].food5}</Row>
                            <Row>{lunch[0].food6}</Row></>
                    } else {
                        return <Row>금일은 학식이 없습니다</Row>
                    }
                })()}

            </RowTwo>
        </Container>
    </AdditionalContainer>

}