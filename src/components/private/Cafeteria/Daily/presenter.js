import React from 'react'
import styled from 'styled-components';
import themeColor from 'constants/themeColor';

const Container = styled.div`
    width:85%;
    background:white;
    margin-top:20px;
    border-radius:4px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    padding-bottom:15px;
    margin-bottom:20px;
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
    background:#353b48;
`

const RowTwo = styled.div`
    display:flex;
    flex-direction:column;
    padding-left:20px;
    padding-top:10px;
`

const Row = styled.div`
    color: rgba(0,0,0,0.4);
`



export default function ({ daily }) {
    return <Container>
        <RowOne>
            <Title>데일리</Title>
        </RowOne>
        <RedLine />
        <RowTwo>
            {(() => {
                if (daily[0]) {
                    return <>
                        <Row>{daily[0].food1}</Row>
                        <Row>{daily[0].food2}</Row>
                        <Row>{daily[0].food3}</Row>
                        <Row>{daily[0].food4}</Row>
                    </>
                } else {
                    return <Row>금일은 학식이 없습니다. </Row>
                }
            })()}

        </RowTwo>
    </Container>
}