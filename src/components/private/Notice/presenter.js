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
    display:flex;
    align-items:center;
    margin-bottom:10px;
    &:active {
        background: rgba(0,0,0,0.15);

    }
`

const Writer = styled.div`
    width: 30%;
    padding-left: 10px;
    display:flex;
    align-items:center;
    font-family: 'irop';
`

const TitleContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    width: 100%;
    padding-left: 5px;
    padding-top: 5px;
    padding-bottom:5px;
`

const Title = styled.div`
    width: 92%;
    overflow:hidden;
      white-space:nowrap;
    font-family: 'Noto Sans KR', sans-serif;
    text-overflow:ellipsis;
`

const Date = styled.div`
    width:100%;
    font-family: 'irop';
    font-size: 10px;
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

export default function NoticePresenter({ notices, loading,
    nextRequest,
    loading2
}) {
    return <Container>
        {loading === false && <Paper>

            {notices.map(notice => <Row>
                <a style={{
                    color: '#2c3e50'
                }} href={notice[5]} target="_blank" >
                    <TitleContainer >
                        <Title>{notice[1]}</Title>
                        <Date>{notice[3]}</Date>
                    </TitleContainer>
                </a>
            </Row>)}

        </Paper>}
        {loading2 && <ReactLoading color={themeColor.theme} height={64} width={64} />}
        {loading2 === false && <DownButton onClick={nextRequest}>
            <DownArrowIcon className={'fas fa-chevron-down'} />
        </DownButton>}


    </Container>
}