import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    height:260px;
    position:relative;
    border-radius:7px;
    overflow:hidden;
    width:80%;
    background:#ecf0f1;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
`

const KBUMark = styled.img`
    position: absolute;
    bottom: 15px;
    right: 33px;
    width: 115px;
`

const Title = styled.div`
    text-align: center;
    font-size: 25px;
    font-weight: 500;
`

const BigText = styled.div`
    font-size: 20px;
    font-weight: 500;
`

const NormalText = styled.div``

const RedLine = styled.div`
    width:3%;
    height:100%;
    background:#3D5A98;
`

const LeftColumn = styled.div`
    width:67%;
    height:100%;
    display:flex;
    flex-direction:column;
    padding-left: 20px;
    padding-top: 20px;
`

const RightColumn = styled.div`
    width:30%;
    height:100%;
    display:flex;
    flex-direction:column;
    padding-top:24px;
`

const ProfileImage = styled.img`
    width: 80%;
    object-fit: cover;
    min-height: 50%;
`




class StudentInfo extends React.Component {
    render() {
        return <Container>
            <RedLine />
            <LeftColumn>
                <Title>학생증</Title>
                <br />
                <br />
                <BigText>신동규</BigText>
                <NormalText>
                    SHIN DONG GYU
                </NormalText>
                <br />
                <NormalText>
                    201303024
                </NormalText>
                <NormalText>
                    컴퓨터소프트웨어학과
                </NormalText>
            </LeftColumn>
            <RightColumn>
                <ProfileImage src={'https://user-images.githubusercontent.com/11250/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpg'} />
            </RightColumn>
            <KBUMark src={require('assets/한국성서대학교2.png')} />
        </Container>
    }
}

export default StudentInfo