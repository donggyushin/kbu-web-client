import React from 'react';
import styled from 'styled-components';
import SmallLoading from 'components/global/SmallLoading';
const Container = styled.div`
    display:flex;
    width:100%;
    flex-direction:column;
    align-items:center;
`

const Paper = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    background:white;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    margin-top:30px;
`


const Row = styled.div`
    position:relative;
    display: flex;
    align-items: center;
    
    height: 170px !important;
    border-bottom: 1px solid gainsboro;
    padding-left: 10px;
    &:active {
        background: rgba(0,0,0,0.15);

    }
`

const Writer = styled.div`
    /* width: 30%; */
    font-weight: 100;
    font-size: 12px;
    
    display:flex;
    align-items:center;
    /* font-family: 'irop'; */
    margin-right: 10px;
    /* font-weight: 700; */
`

const TitleContainer = styled.div`
    display: flex;
    width: 100%;
    padding-left: 5px;
    flex-direction: column;
    align-items:center;
`

const Title = styled.div`
word-break: break-word;
    white-space: initial !important;
    padding-right: 10px;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    /* font-family: 'Noto Sans KR',sans-serif; */
    font-size: 16px;
    /* font-weight: 900; */
`

const Date = styled.div`
    /* width: 100%; */
    font-family: 'irop';
    font-size: 12px;
    display: flex;
    justify-content: flex-end;
    margin-right: 25px;
    
`

const DownButton = styled.div`
    margin-top:20px;
    padding:5px;
    background:rgba(255,255,255,0.8);
    border-radius:5px;
    &:active {
        background: rgba(0,0,0,0.15);
    }
    

`

const DownArrowIcon = styled.i`
    font-size:30px;
`

const DateAndWriterContainer = styled.div`
    width:100%;
    display:flex;
    margin-top:20px;
`

const Num = styled.div`
    width:100%;
    color: rgba(0,0,0,0.7);
`

const LoadingContainer = styled.div`
    margin-top:20px;
    margin-bottom:20px;
`


export default function NoticePresenter({ notices, loading,
    loading2,
    noticeRequestNext,
    error,

}) {
    if (error) {
        alert(error);
        window.location.href = '/'
    } else {
        return <Container id={'noticecontainer'}>
            {loading === false && <Paper>

                {notices.map(notice => {

                    console.log('noticeL: ', notice)

                    return <Row>

                        <a style={{
                            color: '#2c3e50',
                            width: '100%'
                        }} href={notice[5]} target="_blank" >
                            <TitleContainer >
                                <Num>{notice[0]}</Num>
                                <Title>{notice[1]}</Title>
                                <DateAndWriterContainer>
                                    <Writer>{notice[2]}</Writer>
                                    <Date>{notice[3]}</Date>
                                </DateAndWriterContainer>
                            </TitleContainer>
                        </a>
                    </Row>
                })}

            </Paper>}
            {loading2 && <LoadingContainer><SmallLoading black={true} /></LoadingContainer>}
            {loading2 === false && <DownButton onClick={noticeRequestNext}>
                <DownArrowIcon className={'fas fa-chevron-down'} />
            </DownButton>}


        </Container>
    }
}