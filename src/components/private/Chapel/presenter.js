import React from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';
import themeColor from 'constants/themeColor';
import OneCell from './Cell';


const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Paper = styled.div`
    width:100%;
    min-height:90vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    background:white;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    background: #ecf0f1;
`

const Row = styled.div`
    display:flex;
    align-items:center;
    background:white;
    justify-content:space-around;
    width:100%;
    padding-top: 20px;
    padding-bottom: 20px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    opacity:1;
    position:absolute;
    top:50px;
`

const ButtonContainer = styled.div`
    display:flex;
    opacity:0;
`

const Button = styled.div`
    display:flex;
    align-items:center;
    margin-right:10px;
`

const WhiteCardButton = styled.div`
    width:30px;
    height:20px;
    border-radius:4px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    margin-right:5px;
`
const YellowCardButton = styled.div`
    width:30px;
    height:20px;
    border-radius:4px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    margin-right:5px;
    background: #bdc3c7;
`
const ButtonText = styled.div`
    color:black;
`

const SmallText = styled.div`
    /* font-family:'1997'; */
    font-size: 15px;
    margin-right:4px;
    font-weight:bolder;
    color:rgba(0, 0, 0, 0.65);
    margin-right:23px;
`

const InfoTextContainer = styled.div`
    display:flex;
    margin-right:5px;
`

const BodyContainer = styled.div`
    width:100%;
    padding-top:20px;
    padding-bottom:20px;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Body = styled.div`

    display: flex;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 30px;
    padding-left: 19px;
    padding-right: 10px;
    background: white;
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

export default function ChapelPresenter({ summary, chapels, chapelLength, loading, buttonToTopClicked }) {
    return <Container>
        <Paper>
            {loading ? <ReactLoading color={themeColor.theme} /> : <>
                <Row id={'infotextcontainerrow'}>
                    <InfoTextContainer>
                        <SmallText>출석:{summary.attendance}</SmallText>
                        <SmallText>지각:{summary.late}</SmallText>
                        <SmallText>확정:{summary.sure}</SmallText>
                        <SmallText>남은 일수:{summary.duty - summary.sure}</SmallText>
                    </InfoTextContainer>
                </Row>
                <BodyContainer style={{ marginTop: 50 }}>
                    <Body>
                        {chapels.map((chapel, i) => {
                            const time = chapel[3];
                            const hour = time.substr(0, 2);
                            const minute = time.substr(3, 2);

                            const countNumber = chapelLength - i < 10 ? '0' + (chapelLength - i).toString() : chapelLength - i;
                            const date = `${chapel[1]}월 ${chapel[2]}일 ${hour}시 ${minute}분`
                            const day = chapel[4]
                            // 출석 지각 여부
                            const late = chapel[7] !== '출석'
                            const comment = chapel[8]

                            return <OneCell comment={comment} countNumber={countNumber} date={date} day={day} late={late} />
                        })}

                    </Body>
                </BodyContainer>

            </>}
        </Paper>
        <TopButton onClick={buttonToTopClicked} id={'topbutton'}><TopIcon className={'fas fa-angle-up'} /></TopButton>
    </Container>
}