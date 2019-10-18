import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    width:100%;
    flex-direction:column;
    align-items:center;
    background:#ecf0f1;
    padding-top:25px;
    padding-bottom:10px;
    
`

const Card = styled.div`
    background:white;
    width:85%;
    display:flex;
    flex-direction:column;
    align-items:center;
    -webkit-box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.75);
box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.75);
`

const Upper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    border-bottom: 1px solid gainsboro;

`

const Lower = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    background:#f5f6fa;
    width:100%;
    padding-bottom:10px;
`

const NormalText = styled.div`
    margin-top: 15px;
    margin-bottom: 10px;
    letter-spacing: 0.7px;
    font-family: 'Nanum Gothic', sans-serif;
font-family: 'Nanum Gothic Coding', monospace;
`

const ProfilePhoto = styled.img`
    width: 130px;
    height: 130px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 15px;
`

const Name = styled.div`
    font-size: 19px;
    margin-top: 10px;
    font-weight: 600;
    color: #487eb0;
    font-family: 'Nanum Gothic', sans-serif;
`

const BoldText = styled.div`
    font-weight: 700;
`

const UnivMark = styled.img`
    width:90px;
`

const MobileIDCard = styled.div`
    margin-top: 10px;
    font-size: 11px;
    line-height: 20px;
    letter-spacing: 4px;
    margin-bottom: 10px;
    font-weight: 500;
`

const ArrowContainer = styled.div`
    display:flex;
    margin-bottom:20px;
`

const UpperArrow = styled.i`
    
`

const LowerArrow = styled.i`
    color:#dcdde1;
    
`
const Logo = styled.div`
    font-weight: 700;
`

const Margin = styled.div`
    height:20px;
`


class StudentCard extends React.Component {
    render() {
        return <Container>
            <Card>
                <Upper>
                    <MobileIDCard>MOBILE ID CARD</MobileIDCard>
                    <Margin />
                    {/* <ArrowContainer>
                        <UpperArrow className={'fas fa-chevron-up'} />
                        <LowerArrow className={'fas fa-chevron-down'} />
                    </ArrowContainer> */}
                    <ProfilePhoto src={'https://user-images.githubusercontent.com/11250/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpg'} />
                </Upper>
                <Lower>
                    <Name>신동규</Name>
                    <BoldText>201303024</BoldText>
                    <NormalText>컴퓨터소프트웨어학과</NormalText>
                    {/* <UnivMark src={require('assets/한국성서대학교.png')} /> */}
                    <Logo>KOREAN BIBLE UNIVERSITY</Logo>
                </Lower>
            </Card>
        </Container>
    }
}

export default StudentCard