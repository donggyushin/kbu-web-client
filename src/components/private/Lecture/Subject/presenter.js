import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    padding-left:4px;
    padding-top:10px;
    justify-content:flex-start;
    height:120px;
    border: 0.1px solid rgba(0,0,0,0.1);
    background: ${props => props.selected};
    color:white;
`

const BigText = styled.div`
    text-align:start;
    margin-bottom:10px;
`
const NormalText = styled.div`
    text-align:start;
    font-size:10px;

`

export default function SubjectPresenter({ subject, selected }) {
    return <Box selected={selected}>
        <BigText>{subject[0]}</BigText>
        <NormalText>{subject[1]}</NormalText>
        <NormalText>{subject[2]}</NormalText>
        <NormalText>{subject[3]}</NormalText>
    </Box>
}