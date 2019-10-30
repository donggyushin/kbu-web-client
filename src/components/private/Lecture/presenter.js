import React from 'react';
import styled from 'styled-components';
import Subject from './Subject';


let counter = 0;

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
`

const Schedule = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    background:white;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
`
const Header = styled.div`
    display:flex;
`
const Day = styled.div`
    color:rgba(0,0,0,0.5);
    width:20%;
    height:25px;
    display:flex;
    justify-content:center;
    align-items:center;
    border: 0.1px solid rgba(0,0,0,0.1);
`
const Body = styled.div`
    display:flex;
    width:100%;
`

const Column = styled.div`
    display:flex;
    flex-direction:column;
    width:20%;
`

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
    background: #74b9ff;
    color:white;
`

const BigText = styled.div`
    text-align:start;
`
const NormalText = styled.div`
    text-align:start;
    font-size:10px;

`

export default function LecturePresenter({ schedule, loading }) {
    return <Container>
        <Schedule>
            <Header>
                <Day>월</Day>
                <Day>화</Day>
                <Day>수</Day>
                <Day>목</Day>
                <Day>금</Day>
            </Header>
            {loading ? 'loading...' : <Body>
                {schedule.map(day => {
                    return <Column>{day.map(subject => {
                        const index = Math.floor(counter % 10);
                        counter = counter + 1;
                        return <Subject index={index} subject={subject} />
                    })}</Column>
                })}
            </Body>}
        </Schedule>
    </Container>
}