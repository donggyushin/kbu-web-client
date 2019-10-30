import React from 'react';
import styled from 'styled-components';

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
    margin-bottom:5px;
`

const TableBody = styled.div`
    display:flex;
    /* align-items:center; */
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

export default function MileagePresenter({ rows }) {

    return <Container>
        <Paper>
            <TableHeader>
                <DateTitle>날짜</DateTitle>
                <History>내역</History>
                <Price>가격</Price>
            </TableHeader>
            <TableBody>
                {rows.map(row => {
                    return <Row>
                        <Date>{row.date}</Date>
                        <History>
                            <Story>
                                {row.history}
                            </Story>
                            <Row>
                                <Quantity>{row.number}</Quantity>
                                <Location>{row.location}</Location>
                            </Row>
                        </History>
                        <Price>{row.price}</Price>
                    </Row>
                })}
            </TableBody>
        </Paper>
    </Container>
}