import React from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';
import themeColor from 'constants/themeColor';
import OneCell from './Cell';
import ExpandedCell from './ExpandedCell';
import SmallLoading from 'components/global/SmallLoading';
import ChapelImage from './ChapelImage';
import Summary from './Summary';


const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    background:white;
`

const Paper = styled.div`
    width:100%;
    min-height:90vh;
    display:flex;
    flex-direction:column;
    align-items:center;
`


const BodyContainer = styled.div`
    width:100%;
    padding-top:42px;
    padding-bottom:20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    background: rgba(255,255,255,0.1);
`

const Body = styled.div`

    display: flex;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 30px;
    align-items:center;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
`

const TopButton = styled.div`
    position:fixed;
    bottom: 55px;
    right: 31px;
    background-color:#3498db;
    width: 28px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    opacity: 0;
    transition-duration:2s;
`

const TopIcon = styled.i`
    color:white;
    font-size: 23px;
`

const LoadingContainer = styled.div`
    margin-top:20px;
    margin-bottom:20px;
`

export default function ChapelPresenter({ imageName, summary, chapels, chapelLength, loading, buttonToTopClicked }) {

    const { attendance, late, sure, duty } = summary;
    return <Container>
        <Paper>
            {loading ? <LoadingContainer>
                <SmallLoading black={true} />
            </LoadingContainer> : <>
                    <ChapelImage imageName={imageName} />
                    <Summary duty={duty} sure={sure} />
                    <BodyContainer >
                        <Body>
                            {chapels.map((chapel, i) => {
                                const time = chapel[3];
                                const hour = time.substr(0, 2);
                                const minute = time.substr(3, 2);



                                const countNumber = chapelLength - i < 10 ? '0' + (chapelLength - i).toString() : chapelLength - i;

                                const date = chapel[4]
                                const year = chapel[0]
                                const month = chapel[1]
                                const day = chapel[2]
                                // 출석 지각 여부
                                const late = chapel[6]
                                const sure = chapel[7]
                                const comment = chapel[8]

                                console.log('chapel: ', chapel)

                                return <OneCell sure={sure} time={time} year={year} month={month} comment={comment} countNumber={countNumber} date={date} day={day} late={late} />
                                return <ExpandedCell sure={sure} time={time} year={year} month={month} comment={comment} countNumber={countNumber} date={date} day={day} late={late} />

                            })}

                        </Body>
                    </BodyContainer>

                </>}
        </Paper>
        <TopButton onClick={buttonToTopClicked} id={'topbutton'}><TopIcon className={'fas fa-angle-up'} /></TopButton>
    </Container>
}