import React from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';
import themeColor from 'constants/themeColor';


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
    font-family:'1997';
    font-size: 15px;
    margin-right:4px;
    font-weight:bolder;
    color:rgba(0, 0, 0, 0.65);
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


const TextRow = styled.div`
    display:flex;
    width:100%;
    font-family: sans-serif;
    align-items:center;
    padding-bottom: 5px;
    border-bottom: 1px solid gainsboro;
    margin-bottom: 13px;
    padding-left:4px;
    justify-content:space-between;
    height: 80px;
`

const ContentAndResultContainer = styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;
`

const Text = styled.div`
    font-size:16px;
    color:${props => props.late && '#e74c3c'};
`

const CountNumber = styled.div`
    margin-right:10px;
`

export default function ChapelPresenter({ summary, chapels, chapelLength, loading }) {
    return <Container>
        <Paper>
            {loading ? <ReactLoading color={themeColor.theme} /> : <>
                <Row>
                    {/* <ButtonContainer>
                        <Button>
                            <WhiteCardButton />
                            <ButtonText>출석</ButtonText>
                        </Button>
                        <Button>
                            <YellowCardButton />
                            <ButtonText>지각</ButtonText>
                        </Button>
                    </ButtonContainer> */}
                    <InfoTextContainer>
                        <SmallText>출석: {summary.attendance}</SmallText>
                        <SmallText>지각: {summary.late}</SmallText>
                        <SmallText>확정: {summary.sure}</SmallText>
                        <SmallText>남은 일수: {summary.duty - summary.sure}</SmallText>
                    </InfoTextContainer>
                </Row>
                <BodyContainer>
                    <Body>
                        {chapels.map((chapel, i) => {
                            const time = chapel[3];
                            const hour = time.substr(0, 2);
                            const minute = time.substr(3, 2);
                            const late = chapel[7] !== '출석'
                            console.log(chapelLength - i);
                            return <TextRow><CountNumber>{chapelLength - i < 10 ? '0' + (chapelLength - i).toString() : chapelLength - i}.</CountNumber>  <ContentAndResultContainer><Text>{chapel[1]}월 {chapel[2]}일 <span style={{
                                fontSize: 20,
                                fontWeight: 900
                            }}>({chapel[4]})</span> {hour}시 {minute}분</Text><Text style={{
                                marginRight: 20,
                                // fontWeight: 900
                            }} late={late}>{chapel[7]}</Text></ContentAndResultContainer></TextRow>
                        })}

                    </Body>
                </BodyContainer>

            </>}
        </Paper>

    </Container>
}