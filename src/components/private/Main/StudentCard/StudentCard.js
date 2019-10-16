import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    width:100%;
    flex-direction:column;
    align-items:center;
    background:#ecf0f1;
    padding-top:15px;
    
`

const Card = styled.div`
    background:white;
    width:90%;
    display:flex;
    flex-direction:column;
    align-items:center;
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



class StudentCard extends React.Component {
    render() {
        return <Container>
            <Card>
                <Upper>
                    <MobileIDCard>MOBILE ID CARD</MobileIDCard>
                    <ArrowContainer>
                        <UpperArrow className={'fas fa-chevron-up'} />
                        <LowerArrow className={'fas fa-chevron-down'} />
                    </ArrowContainer>
                    <ProfilePhoto src={'https://user-images.githubusercontent.com/11250/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpg'} />
                </Upper>
                <Lower>
                    <Name>신동규</Name>
                    <BoldText>201303024</BoldText>
                    <NormalText>컴퓨터소프트웨어학과</NormalText>
                    <UnivMark src={require('assets/한국성서대학교2.png')} />
                </Lower>
            </Card>
        </Container>
    }
}

export default StudentCard