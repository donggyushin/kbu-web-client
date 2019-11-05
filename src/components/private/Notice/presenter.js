import React from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';
import themeColor from 'constants/themeColor';
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

const Header = styled.div`
    display:flex;
    align-items:center;
`

const WriterLabel = styled.div`
    width: 30%;
    padding-left: 10px;
    padding-top: 10px;
    font-weight: 700;
    font-family: 'irop';
`

const TitleLabel = styled.div`
    font-weight: 700;
    width: 70%;
    padding-left: 10px;
    padding-top: 10px;
    font-family: 'irop';
`

const Row = styled.div`
position:relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    /* margin-bottom: 10px; */
    height: 120px;
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
    padding-left: 10px;
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
`

const Title = styled.div`
word-break: break-word;
    white-space: initial !important;
    padding-right: 10px;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    font-family: 'Noto Sans KR',sans-serif;
    font-size: 17px;
    font-weight: 900;
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
    display:flex;
    align-items: flex-end;
    width:100%;
    justify-content: flex-end;
    margin-top: 7px;
    position:absolute;
    bottom:10px;
    right:0;
    
`



export default function NoticePresenter({ notices, loading,
    nextRequest,
    loading2,
    noticeRequestNext,
    error
}) {
    if (error) {
        alert(error);
        window.location.href = '/'
    } else {
        return <Container>
            {loading === false && <Paper>

                {notices.map(notice => <Row>
                    <a style={{
                        color: '#2c3e50',
                        width: '100%'
                    }} href={notice[5]} target="_blank" >
                        <TitleContainer >
                            <Title>{notice[1]}</Title>
                            <DateAndWriterContainer>
                                <Writer>{notice[2]}</Writer>
                                <Date>{notice[3]}</Date>
                            </DateAndWriterContainer>
                        </TitleContainer>
                    </a>
                </Row>)}

            </Paper>}
            {loading2 && <ReactLoading color={themeColor.theme} height={64} width={64} />}
            {loading2 === false && <DownButton onClick={noticeRequestNext}>
                <DownArrowIcon className={'fas fa-chevron-down'} />
            </DownButton>}


        </Container>
    }
}