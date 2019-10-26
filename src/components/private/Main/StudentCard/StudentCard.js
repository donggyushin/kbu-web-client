import React from 'react';
import styled from 'styled-components';
import AwesomeLoadingComponent from 'components/global/Loading/LoadingComponent';

const Container = styled.div`
    display:flex;
    width:100%;
    flex-direction:column;
    align-items:center;
    background:#ecf0f1;
    padding-top:25px;
    padding-bottom:10px;
    position: relative;
    justify-content:center;
`

const LogoBackgroundImage = styled.img`
    position: absolute;
    width: 44%;
    opacity: 0.2;
    max-width: 250px;
    z-index:1;
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
    height:206px;
    
`

const Lower = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    background:#f5f6fa;
    width:100%;
    padding-bottom:10px;
    height:211px;
    
`

const NormalText = styled.div`
    margin-top: 15px;
    margin-bottom: 10px;
    letter-spacing: 0.7px;
    font-family: 'Nanum Gothic', sans-serif;
    font-family: 'Nanum Gothic Coding', monospace;
    z-index:2;
`

const ProfilePhoto = styled.img`
    width: 130px;
    height: 130px;
    border-radius: 15%;
    object-fit: cover;
    margin-bottom: 15px;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    z-index:2;
`

const Name = styled.div`
    font-size: 19px;
    margin-top: 10px;
    font-weight: 600;
    color: ${props => props.status === '재학' ? '#487eb0' : '#e74c3c'} ;
    font-family: 'Nanum Gothic', sans-serif;
    z-index:2;
`

const BoldText = styled.div`
    font-weight: 700;
    z-index:2;
`

const MobileIDCard = styled.div`
    margin-top: 10px;
    font-size: 11px;
    line-height: 20px;
    letter-spacing: 4px;
    margin-bottom: 10px;
    font-weight: 500;
    z-index:2;
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

const BasicInfo = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom: 12px;
    width: 150px;
    align-items: flex-start;
    z-index:2;
`

const Row = styled.div`
    display:flex;
    align-items:center;
    width:100%;
    position: relative;
    justify-content:center;
`
const BasicInfoLabel = styled.div`
    font-family: 'Nanum Gothic', sans-serif;
    font-family: 'Nanum Gothic Coding', monospace;
    font-weight:900;
    position: absolute;
    left:0px;
    z-index:2;
    
`

const BasicInfoText = styled.div`
    font-family: 'Nanum Gothic', sans-serif;
    font-family: 'Nanum Gothic Coding', monospace;
    z-index:2;
    
`

const LoadingContainer = styled.div`
    height:417px;
    width:100%;
    position: relative;
`

const WhitePartInLoading = styled.div`
    width:100%;
    position: absolute;
    top:0;
    display:flex;
    align-items:center;
    height:206px;
    border-bottom: 1px solid gainsboro;
`

const GrayPartInLoading = styled.div`
    height:211px;
    position: absolute;
    bottom:0;
    width:100%;
    display:flex;
    align-items:center;
    background:#f5f6fa;
`

const UserEmail = styled.div``


class StudentCard extends React.Component {
    render() {
        const { user, loading } = this.props;
        return <Container>
            <LogoBackgroundImage src={require('assets/watermark.png')} />
            <Card>
                {loading ? <LoadingContainer>
                    <WhitePartInLoading />
                    <GrayPartInLoading />
                    <AwesomeLoadingComponent loading={loading} />
                </LoadingContainer> : <>

                        <Upper>
                            <MobileIDCard>MOBILE ID CARD</MobileIDCard>
                            <Margin />
                            {user.sid === '201303024' && <ProfilePhoto src={require('assets/leo.png')} />}
                            {user.sid !== '201303024' &&
                                <ProfilePhoto src={user.img ? 'data:image/png;base64,' + user.img : 'https://user-images.githubusercontent.com/11250/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpg'} />
                            }
                        </Upper>
                        <Lower>
                            <Name status={user.status}>{user.name}</Name>
                            <BoldText>{user.sid}</BoldText>
                            <UserEmail>
                                {user.email}
                            </UserEmail>
                            <NormalText>{user.major}</NormalText>
                            {/* <UnivMark src={require('assets/한국성서대학교.png')} /> */}
                            <BasicInfo>
                                <Row>
                                    <BasicInfoLabel>
                                        학년
                                </BasicInfoLabel>
                                    <BasicInfoText>
                                        {user.grade}
                                    </BasicInfoText>
                                </Row>
                                <Row>
                                    <BasicInfoLabel>
                                        상태
                                </BasicInfoLabel>
                                    <BasicInfoText>
                                        {user.status}
                                    </BasicInfoText>
                                </Row>


                            </BasicInfo>
                            <Logo>KOREAN BIBLE UNIVERSITY</Logo>
                        </Lower>
                    </>}
            </Card>
        </Container>
    }
}

export default StudentCard