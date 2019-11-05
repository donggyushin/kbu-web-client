import React from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';
import themeColor from 'constants/themeColor';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
`

const Paper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    background:white;
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75);
    margin-top:30px;
    padding-top:4px;
    padding-bottom:4px;
`

const TableHeader = styled.div`
    display:flex;
    align-items:center;
    width:100%;
    margin-bottom:15px;
`

const TableBody = styled.div`
    display:flex;
    width:100%;
    flex-direction:column;
    justify-content:center;

`

const DateTitle = styled.div`
    width:20%;
    padding-left:4px;
`

const Date = styled.div`
    width:20%;
    font-size:11px;
    padding-left:4px;
`

const History = styled.div`
    display:flex;
    flex-direction:column;
    width:60%;
`
const Story = styled.div``
const Row = styled.div`
    display:flex;
    margin-bottom: 12px;
`
const Quantity = styled.div`
font-size:11px;
`
const Location = styled.div`
font-size:11px;
`

const Price = styled.div``

export default function MileagePresenter({ rows, loading }) {

    return <Container>
        <Paper>
            <TableHeader>
                <DateTitle>날짜</DateTitle>
                <History>내역</History>
                <Price>가격</Price>
            </TableHeader>
            {loading ? <ReactLoading color={themeColor.theme} /> : <TableBody>
                {rows.map(row => {
                    if (row.CST_USE_POINT !== "0") {

                        return <Row>
                            <Date>{row.SALE_DATE}</Date>
                            <History>
                                <Story>
                                    {row.PROD_NM}
                                </Story>
                                <Row>
                                    <Quantity>{row.SALE_QTY}</Quantity>
                                    <Location>{row.SHOP_NM}</Location>
                                </Row>
                            </History>
                            <Price>{Math.round(parseInt(parseFloat(row.CST_USE_POINT) + 0.5) / 10) * 10}</Price>
                        </Row>
                    }
                })}
            </TableBody>}

        </Paper>
    </Container>
}