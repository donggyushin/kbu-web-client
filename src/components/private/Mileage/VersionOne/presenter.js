import React from 'react';
import styled from 'styled-components';
import Cell from './Cell';


const Container = styled.div`
    width:100%;
    align-items:center;
    display:flex;
    flex-direction:column;
`

const Card = styled.div`
    width:85%;
    height:80vh;
    background-color:white;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    margin-top:20px;
    border-radius:5px;
    margin-bottom: 20px;
    overflow:scroll;
`

const Header = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    margin-top:6px;
`

export const DateContainer = styled.div`
    width:20%;
    padding-left:7px;
`

export const ContentsContainer = styled.div`
    width:60%;
    padding-left:7px;
    display:flex;
    flex-direction:column;
`

export const PriceContainer = styled.div`
    width:20%;
    padding-left:7px;
`

export default function ({ rows, loading }) {

    return <Container>

        <Card>
            {loading ? <Container style={{
                height: '80vh',
                justifyContent: 'center'
            }}>
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </Container> : <>
                    <Header>
                        <DateContainer>
                            날짜
                </DateContainer>
                        <ContentsContainer>
                            내역
                </ContentsContainer>
                        <PriceContainer>
                            가격
                </PriceContainer>
                    </Header>
                    {rows.map(row => {
                        return <Cell row={row} />
                    })}
                </>}

        </Card>
    </Container>

}