import React from 'react';
import styled from 'styled-components';
import SmallLoading from 'components/global/SmallLoading';
import Cell from './Cell';
import Representative from './Representative';
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
    height:50vh;
    overflow:scroll;
    border-top: 1px solid;
    border-bottom: 1px solid;
    padding-top:5px;
`

const Paper2 = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    background:white;
    padding-top:5px;
`


const DownButton = styled.div`
    padding: 5px;
    background: rgba(255,255,255,0.8);
    border-radius: 5px;
    width: 100%;
    display: flex;
    justify-content: center;
    height: 50px;
    align-items: center;
    &:active {
        background: rgba(0,0,0,0.15);
    }
    

`

const DownArrowIcon = styled.i`
    font-size:30px;
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
        return <Container>
            <a target={'blank'} href={'http://www.bible.ac.kr/bible_report/college_notice.aspx'}>
                <Representative />
            </a>
            {loading === false && <Paper2 id={'noticecontainer'}>

                {notices.map(notice => {

                    return <Cell url={notice[5]} num={notice[0]} writer={notice[2]} title={notice[1]} date={notice[3]} />

                })}

            </Paper2>}
            {loading2 && <LoadingContainer><SmallLoading black={true} /></LoadingContainer>}
            {loading2 === false && <DownButton onClick={noticeRequestNext}>
                <DownArrowIcon className={'fas fa-chevron-down'} />
            </DownButton>}


        </Container>
    }
}