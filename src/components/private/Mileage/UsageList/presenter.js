import React from 'react';
import styled from 'styled-components';
import Cell from './Cell';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height:66%;
    overflow:scroll;
`



export default function ({ rows }) {
    return <Container>
        {rows.map(cell => {
            return <Cell cell={cell} />
        })}
    </Container>
}