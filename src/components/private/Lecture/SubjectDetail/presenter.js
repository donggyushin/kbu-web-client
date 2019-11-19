import React from 'react';
import styled, { keyframes } from 'styled-components';
import Header from './Header';
import SmallLoading from 'components/global/SmallLoading';
import Summary from './Summary';
import DataList from './DataList';

const Container = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.6);
    color:white;
    display:flex;
    flex-direction:column;
    align-items:center;
    z-index:3;
`

const Card = styled.div`
    width: 90%;
    padding-bottom: 50px !important;
    background: ${props => props.background && props.background};
    color: white;
    z-index: 10;
    margin-top: 25px;
    padding: 10px;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius:20px;
`

const XButtonContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:flex-end;
`

const XButton = styled.div`
    font-size: 22px;
    background: rgba(255,255,255,0.3);
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-radius: 50%;
`

const InfoContainer = styled.div`
    width:85%;
    display:flex;
    flex-direction:column;
`

export const Row = styled.div`
    display:flex;
    width:100%;
    flex-shrink:1 0 auto;
`

export const LeftText = styled.div`
    width:30%;
`

export const RightText = styled.div`
    width:70%;
`

export const Date = styled.div`
width:20%;
height:21px !important;
flex: 1 0 auto;
text-align:center;
`

export const Time = styled.div`
width:20%;

`

export const Attendance = styled.div`
    width:20%;
height:21px !important;
text-align:center;
flex: 1 0 auto;
`

export const NormalAbsence = styled.div`
width:20%;
height:21px !important;
text-align:center;
flex: 1 0 auto;
`

export const Late = styled.div`
width:20%;
height:21px !important;
text-align:center;
flex: 1 0 auto;
`

export const ETC = styled.div`
width:20%;
height:21px !important;
text-align:center;
flex: 1 0 auto;
`

const boxFade = keyframes`
    0% {
    height:0px;
  }
  100% {
    height:300px;
  }
`

const DataListContainer = styled.div`
    width:90%;
    border-bottom-left-radius:7px;
    border-bottom-right-radius:7px;
    border:1px solid white;
    height:300px;
    /* height:300px; */
    
    display:flex;
    flex-direction:column;
    align-items:center;
    overflow:scroll;
    justify-content: flex-start;
    animation: ${boxFade} 0.5s linear;
    position: relative;
`



const SummaryContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    margin-top:20px;
`


const Button = styled.div`
        background: rgba(255,255,255,0.3);
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 10px;
    margin-top: 30px;
    font-size: 20px;

`

export default function ({ showDataList, list, selectedLecture, lectureDetail, wrapper, background, closeDetailView }) {

    return <Container>
        <Card ref={wrapper} background={background}>
            <XButtonContainer>
                <XButton onClick={closeDetailView}>X</XButton>
            </XButtonContainer>
            <InfoContainer>
                <Row className={'height25'}>
                    <LeftText>과목명</LeftText>
                    <RightText>{selectedLecture.name}</RightText>
                </Row>
                <Row className={'height25'}>
                    <LeftText>장소</LeftText>
                    <RightText>{selectedLecture.location}</RightText>
                </Row>
                <Row className={'height25'}>
                    <LeftText>시작시간</LeftText>
                    <RightText>{selectedLecture.start}</RightText>
                </Row>
                <Row className={'height25'}>
                    <LeftText>끝나는 시간</LeftText>
                    <RightText>{selectedLecture.end}</RightText>
                </Row>
                <SummaryContainer>
                    {lectureDetail.loading ?
                        <SmallLoading />
                        : <Summary summary={lectureDetail.summary} />}
                </SummaryContainer>
            </InfoContainer>
            {(!lectureDetail.loading && list === false) && <Button onClick={showDataList}>더불러오기</Button>}
            {(() => {
                if (list) {
                    return <>
                        <Header />
                        <DataListContainer>
                            <DataList lectureDetail={lectureDetail} />
                        </DataListContainer>
                    </>
                }
            })()}
            {/* {list && <DataListContainer>
                <Header />
                <DataList lectureDetail={lectureDetail} />
            </DataListContainer>} */}

        </Card>
    </Container>
}