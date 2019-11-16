import React from 'react';
import styled from 'styled-components';
import { convertStringToTimeInteger } from 'utils/convertStringToTimeInteger';

const Box = styled.div`
    opacity: 1;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    padding-left:4px;
    justify-content:flex-start;
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
    padding-left:2.5px;

`

const BigText = styled.div`
    text-align:start;
    margin-bottom:2px;
    font-size: 12px;
    font-weight:700;
`
const NormalText = styled.div`
    text-align:start;
    font-size:8px;
`

const TimeContainer = styled.div`
    display:flex;
`

const BackgroundColor = styled.div`
    width:100%;
    opacity: 0.8;
    height:1px;
`

export default function SubjectPresenter({ touch, subject, colorMatches, subjectClicked }) {
    return <Box onClick={() => {
        console.log('touch: ', touch)
        if (touch) {
            subjectClicked(subject, colorMatches[subject[0]])
        }

    }} selected={colorMatches[subject[0]]}>
        {(() => {
            let array = []
            const from = convertStringToTimeInteger(subject[2])
            const to = convertStringToTimeInteger(subject[3])
            const times = to - from
            for (let index = 0; index < times; index++) {

                array.push(<BackgroundColor />)

            }
            return array
        })()}
        <ContentBox>
            <BigText>{subject[0]}</BigText>
            <TimeContainer>
                <NormalText>{subject[2]}</NormalText>
                <NormalText>-</NormalText>
                <NormalText>{subject[3]}</NormalText>
            </TimeContainer>
        </ContentBox>
    </Box>
}