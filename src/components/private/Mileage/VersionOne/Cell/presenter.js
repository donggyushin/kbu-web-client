import React from 'react';
import styled from 'styled-components';
import { DateContainer, PriceContainer, ContentsContainer } from '../presenter'

const Container = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    margin-top:10px;
`

const Row = styled.div`
    display:flex;
`

const TextLabel = styled.div``


export default function ({ row }) {
    if (Math.ceil(row.CST_USE_POINT) > 0) {
        return <Container>
            <DateContainer style={{ fontSize: 12 }}>
                {row.SALE_DATE}
            </DateContainer>
            <ContentsContainer>
                <TextLabel style={{
                    borderBottom: '1px solid gainsboro',
                    fontWeight: 700
                }}>
                    {row.PROD_NM}
                </TextLabel>
                <TextLabel style={{ fontSize: 12 }}>
                    {row.SHOP_NM}
                </TextLabel>
            </ContentsContainer>
            <PriceContainer>
                {Math.ceil(row.CST_USE_POINT)}
            </PriceContainer>
        </Container>
    } else {
        return <div />
    }


}