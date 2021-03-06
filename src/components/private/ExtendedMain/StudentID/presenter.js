import React from 'react';
import styled, { keyframes } from 'styled-components';
import themeColor from 'constants/themeColor';
import QRCode from './QRCode';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import { base64formatter } from 'utils/base64formatter'
import AwesomeLoadingComponent from 'components/global/Loading/LoadingComponent';

const useStyles = makeStyles(theme => ({
    fab: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

const Container = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100vh;
    overflow:hidden;
    background:rgba(0,0,0,0.5);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    z-index:3;
    padding-top:3px;
    /* overflow:scroll; */
`

const ShowUpFromBottom = keyframes`
    0% {
        top:100vh;
    },
    100% {
        top:20px;
    }
`

const CardContainer = styled.div`
    width:90%;
    height: 70%;
    min-height: 513px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    position: relative;
    top:20px;
    animation:${ShowUpFromBottom} 0.5s ease-in-out;
`

const WatermarkBottom = styled.img`
    width:59%;
    position: absolute;
    bottom: 17px;
    right: 20px;
    max-width: 200px;
`

const Card = styled.div`
    width:100%;
    height:100%;
    background-color:white;
    border-radius: 23px;
    display:flex;
    flex-direction:column;
    align-items:center;
    overflow:hidden;
    box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);
    
`

const WaterMarkContainer = styled.div`   
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    position: absolute;
`

const WaterMark = styled.img`
    width:80%;
    max-width: 420px;
    opacity: 0.1;
`

const RedLine = styled.div`
    width:100%;
    height:53px;
    color:black;
    display:flex;
    justify-content:center;
    font-size: 22px;
    align-items:center;
    font-family: 'Nanum Gothic',sans-serif;
    
`
const Row = styled.div`
    display:flex;
`

const StudentInfoContainer = styled.div`
    
    width:50%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    margin-top:15px;
    padding-left: 17px;
    padding-top: 7px;
`
const Name = styled.div`
font-family: 'Nanum Gothic',sans-serif;
letter-spacing: 7.3px;
font-size: 27px;
    font-weight: bolder;
    color:black;
`

const StudentIDNumber = styled.div`
font-family: 'irop';
font-size: 20px;
color:black;
`
const NormalText = styled.div`
/* font-family: 'irop'; */
    letter-spacing: 1px;
    font-size: 13px;
    color:${props => props.red ? '#e74c3c' : '#2f3640'};
`
const ProfileImageContainer = styled.div`
margin-top: 3px;
    width: 48%;
    height: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    /* border-top-right-radius: 16px; */
    overflow: hidden;
    margin-right: 2px;
    /* box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75); */
    
`

const ProfileImage = styled.img`
    height:100%;
    /* margin-top:5px; */
    padding-right:5px;
    object-fit:cover;
    z-index:1;
    /* box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75); */
`


const XButton = styled.div`
    width: 84%;
    height: 17vh;
    border-radius: 5px;
    background: rgba(0,0,0,0,2);
    color: white;
    background: rgba(255,255,255,0.3);
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 30px;
    font-size:25px;
`

const XIcon = styled.i`
    color:white;
    font-size:22px;
`

const MarginHeight = styled.div`
    height:10px;
`

const QrcodeContainer = styled.div`
    width:80%;
    /* border:1px solid black; */
    height:42%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`



export default function StudentIDPrenseter({ TurnOffStudentIDCard,
    requestQrcode,
    shutdownQrcode,
    qrcode,
    qrcodeimg,
    user,
    loading,
    setWrapperRef,
    img
}) {
    const classes = useStyles();
    return <Container  >
        <CardContainer
            ref={setWrapperRef}
            style={{
                // top: 772
            }} className={'studentidcard'}>
            <WaterMarkContainer>
                <WaterMark src={require('assets/biblelogo-removebg-preview.png')} />
            </WaterMarkContainer>

            <Card>
                <RedLine>모바일 학생증</RedLine>
                {/* <MarginHeight /> */}
                {loading ? <AwesomeLoadingComponent /> : <Row style={{
                    justifyContent: 'space-between',
                    height: '33%',
                    width: '100%'
                }} >
                    <StudentInfoContainer >
                        <Name>{user.name}</Name>
                        <StudentIDNumber>{user.sid}</StudentIDNumber>
                        <MarginHeight />
                        <NormalText>{user.major}</NormalText>
                        {/* <Row>
                            <NormalText red={user.status !== '재학'}>{user.grade}학년&nbsp;</NormalText>
                            <NormalText red={user.status !== '재학'}>{user.status}</NormalText>
                        </Row> */}
                    </StudentInfoContainer>
                    <ProfileImageContainer>
                        <ProfileImage src={user.sid === '201303024' ? require('assets/leo.png') : base64formatter(user.img)} />
                    </ProfileImageContainer>
                </Row>}
                {qrcode === false && <NormalText style={{
                    fontWeight: 'bolder',
                    position: 'relative',
                    top: 20
                }}>아래의 코드로 서비스 이용이 가능합니다.</NormalText>}

                <MarginHeight />
                <QrcodeContainer>
                    {qrcode ? <QRCode user={user} shutdownQrcode={shutdownQrcode}
                    // img={qrcodeimg}
                    /> : <Fab style={{
                        zIndex: 3,
                        background: '#2f3542',
                        color: 'white'
                    }} onClick={requestQrcode} variant="extended" aria-label="delete" className={classes.fab}>
                            <NavigationIcon style={{ color: 'white' }} className={classes.extendedIcon} />
                            QR CODE
                    </Fab>}

                </QrcodeContainer>

            </Card>
            <WatermarkBottom src={require('assets/watermark.png')} />
        </CardContainer>
        <XButton style={{
            // top: 700,
            position: 'relative'
        }} className={'studentidcard'} onClick={TurnOffStudentIDCard}>완료</XButton>
        {/* <XButton style={{
            // top: 700,
            position: 'relative'
        }} className={'studentidcard'} onClick={TurnOffStudentIDCard}><XIcon className={'fas fa-times'} /></XButton> */}
    </Container>
}