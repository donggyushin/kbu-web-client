import React from 'react';
import styled from 'styled-components';
import { convertStringToTimeInteger } from 'utils/convertStringToTimeInteger';

const Box = styled.div`
opacity: 0.8;
    width:98%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    /* padding-left:4px;
    padding-top:3px; */
    justify-content:flex-start;
    /* height:75px; */
    border: 0.1px solid rgba(0,0,0,0.1);
    background: ${props => props.selected};
    color:white;
    position:relative;
    overflow:hidden;        
`

const ContentBox = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    padding-top:1.5px;
    padding-left:1.5px;
`

const BigText = styled.div`
    text-align:start;
    margin-bottom:2px;
    font-size: 12px;
`
const NormalText = styled.div`
    text-align:start;
    font-size:10px;

`

const TimeContainer = styled.div`
    display:flex;
`

const BackgroundColor = styled.div`
    width:100%;
    opacity: 0.8;
    height:1px;
`

export default function SubjectPresenter({ subject, colorMatches }) {
    return <Box selected={colorMatches[subject[0]]}>
        {(() => {
            let array = []
            const from = convertStringToTimeInteger(subject[2])
            const to = convertStringToTimeInteger(subject[3])
            const times = to - from
            console.log('times should be 75: ', times)
            for (let index = 0; index < times; index++) {

                array.push(<BackgroundColor />)

            }
            return array
        })()}
        <ContentBox>
            <BigText>{subject[0]}</BigText>
            <NormalText>{subject[1]}</NormalText>
            <TimeContainer>
                <NormalText>{subject[2]}</NormalText>
                <NormalText>-</NormalText>
                <NormalText>{subject[3]}</NormalText>
            </TimeContainer>
        </ContentBox>
    </Box>
}