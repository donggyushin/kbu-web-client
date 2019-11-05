import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
opacity: 0.8;
    width:98%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    padding-left:4px;
    padding-top:10px;
    justify-content:flex-start;
    height:140px;
    border: 0.1px solid rgba(0,0,0,0.1);
    background: ${props => props.selected};
    color:white;
    margin-bottom:4px;
`

const BigText = styled.div`
    text-align:start;
    margin-bottom:10px;
`
const NormalText = styled.div`
    text-align:start;
    font-size:10px;

`

export default function SubjectPresenter({ subject, colorMatches }) {
    console.log('color matches: ', colorMatches)
    return <Box selected={colorMatches[subject[0]]}>
        <BigText>{subject[0]}</BigText>
        <NormalText>{subject[1]}</NormalText>
        <NormalText>{subject[2]}</NormalText>
        <NormalText>{subject[3]}</NormalText>
    </Box>
}