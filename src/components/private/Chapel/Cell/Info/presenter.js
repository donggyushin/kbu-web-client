import React from 'react'
import styled, { keyframes } from 'styled-components'



const Stretch = keyframes`
    from {
        height:0px;
    }
    to {
        height:84px;
    }
`

const Shrink = keyframes`
from {
        height:84px;
    }
    to {
        height:0px;
    }
`

const First = styled.div`
    display:flex;
    width:100%;
    height:0px;
    padding-left:35px;
    align-items:center;
    overflow:hidden;
    font-family:'applesdLight';
`

const ContainerToShring = styled.div`
font-family:'applesdLight';
display:flex;
    width:100%;
    height:0px;
    padding-left:35px;
    align-items:center;
    overflow:hidden;
    animation:${Shrink} 0.7s;
`

const Container = styled.div`
font-family:'applesdLight';
    display:flex;
    width:100%;
    height:84px;
    padding-left:35px;
    align-items:center;
    overflow:hidden;
    animation:${Stretch} 0.7s;
`

const LabelAndDataContainer = styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
    justify-content:center;
`

const Label = styled.div`
    font-size:13px;
    margin-right:39px;
    color:black;
`

const Data = styled.div`
    font-size:13px;
    color:black;
`


export default function ({ detail, first }) {
    if (first) {
        return <First>
            <LabelAndDataContainer>
                <Label>
                    시간
        </Label>
                <Label>
                    비고
        </Label>
            </LabelAndDataContainer>
            <LabelAndDataContainer>
                <Data>
                    11시 59분 00초
        </Data>
                <Data>
                    채플오류일괄등록
        </Data>
            </LabelAndDataContainer>
        </First>
    }
    if (detail) {
        return <Container>
            <LabelAndDataContainer>
                <Label>
                    시간
            </Label>
                <Label>
                    비고
            </Label>
            </LabelAndDataContainer>
            <LabelAndDataContainer>
                <Data>
                    11시 59분 00초
            </Data>
                <Data>
                    채플오류일괄등록
            </Data>
            </LabelAndDataContainer>
        </Container>
    } else {
        return <ContainerToShring>
            <LabelAndDataContainer>
                <Label>
                    시간
            </Label>
                <Label>
                    비고
            </Label>
            </LabelAndDataContainer>
            <LabelAndDataContainer>
                <Data>
                    11시 59분 00초
            </Data>
                <Data>
                    채플오류일괄등록
            </Data>
            </LabelAndDataContainer>
        </ContainerToShring>
    }

}