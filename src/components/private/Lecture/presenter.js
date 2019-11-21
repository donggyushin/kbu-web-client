import React from 'react';
import styled from 'styled-components';
import Subject from './Subject';
import ReactLoading from 'react-loading';
import themeColor from 'constants/themeColor';
import { convertStringToTimeInteger, convertTimeIntToString, convertMinutesToHour } from 'utils/convertStringToTimeInteger';
import SubjectDetail from './SubjectDetail';
import SmallLoading from 'components/global/SmallLoading';


let counter = 0;

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    overflow: hidden;
    position: relative;
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
    width:100%;
    height:25px;
    display:flex;
    justify-content:center;
    align-items:center;
    /* border: 0.1px solid rgba(0,0,0,0.1); */
    
`
const Body = styled.div`
    display:flex;
    width:100%;
`

const Column = styled.div`
    display:flex;
    flex-direction:column;
    width:19%;
    align-items:center;
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

const LoadingContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:20px;
    margin-bottom:20px;
`

const BreakTime = styled.div`
    height:1px;
`

const TimeBar = styled.div`
    width:5%;
    height:100%;
    display:flex;
    flex-direction:column;
`

const Time = styled.div`
    width:100%;
    height:60px;
    /* border:0.5px solid gainsboro; */
    border-bottom:0px;
    color: rgba(0,0,0,0.5);
    text-align:right;
    font-size: 12px;
    padding-right: 2px;
`

const TimeContainer = styled.div`
    position: relative;
    display:flex;
    flex-direction:column;
`

const HorizontalLine = styled.div`
    position: absolute;
    width:100vw;
    height:1px;
    background:rgba(0,0,0,0.1);
    z-index:0;
`

const DayContainer = styled.div`
    position: relative; 
    display:flex;
    width:19%;
`

const VerticalLine = styled.div`
    width:1px;
    height:1000vh;
    position: absolute;
    background:rgba(0,0,0,0.1);
    z-index: 2;
`

export default function LecturePresenter({
    selectedLecture, list, showDataList,
    lectureDetail, wrapper, touch, closeDetailView, background, subjectClicked, schedule, loading, error, colorMatches, firstClassTime, lastClassTime, detail }) {
    if (error) {
        alert(error);
        window.location.href = '/'
    } else {

        return <Container>
            <Schedule>
                <Header>
                    <TimeBar />
                    <DayContainer>
                        <Day>월</Day>
                        <VerticalLine />
                    </DayContainer>
                    <DayContainer>
                        <Day>화</Day>
                        <VerticalLine />
                    </DayContainer>
                    <DayContainer>
                        <Day>수</Day>
                        <VerticalLine />
                    </DayContainer>
                    <DayContainer>
                        <Day>목</Day>
                        <VerticalLine />
                    </DayContainer>
                    <DayContainer>
                        <Day>금</Day>
                        <VerticalLine />
                    </DayContainer>
                </Header>
                {loading ? <LoadingContainer><SmallLoading black={true} /></LoadingContainer> : <Body>
                    <TimeBar>
                        {(() => {
                            let array = []
                            const from = firstClassTime;
                            const to = lastClassTime;
                            const fromHour = convertMinutesToHour(from);
                            const toHour = convertMinutesToHour(to);

                            for (let index = fromHour; index < toHour + 1; index++) {

                                array.push(<TimeContainer>
                                    <Time>{index}</Time>
                                    <HorizontalLine />
                                </TimeContainer>)
                            }
                            return array

                        })()}
                    </TimeBar>
                    {schedule.map(day => {
                        return <Column>

                            {day.map((subject, i) => {
                                const index = Math.floor(counter % 10);
                                counter = counter + 1;
                                return <>
                                    {(() => {
                                        let array = []
                                        if (i === 0) {
                                            const firstClassTimeOfThisSubject = subject[2]
                                            const convertedClassTimeOfThisSubject = convertStringToTimeInteger(firstClassTimeOfThisSubject)
                                            const times = (convertedClassTimeOfThisSubject - firstClassTime)
                                            for (let index = 0; index < times; index++) {

                                                array.push(<BreakTime />)
                                            }
                                        } else {
                                            const previousLastTime = day[i - 1][3]
                                            const previous = convertStringToTimeInteger(previousLastTime)
                                            const thisTime = convertStringToTimeInteger(subject[2])
                                            const times = thisTime - previous
                                            for (let index = 0; index < times; index++) {

                                                array.push(<BreakTime />)

                                            }
                                        }
                                        return array
                                    })()}
                                    <Subject touch={touch} subjectClicked={subjectClicked} colorMatches={colorMatches} index={index} subject={subject} />
                                </>
                            })}</Column>
                    })}
                </Body>}
            </Schedule>
            {detail && <SubjectDetail showDataList={showDataList} list={list} selectedLecture={selectedLecture} lectureDetail={lectureDetail} wrapper={wrapper} closeDetailView={closeDetailView} background={background} />}
        </Container>
    }
}