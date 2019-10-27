import React from 'react';
import styled from 'styled-components';
import themeColor from 'constants/themeColor';
import QRCode from './QRCode';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import { base64formatter } from 'utils/base64formatter'

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
    height:100%;
    background:rgba(0,0,0,0.5);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const CardContainer = styled.div`
    width:80%;
    height:80%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    position: relative;
`

const WatermarkBottom = styled.img`
    width:59%;
    position: absolute;
    bottom:10px;
    right:10px;
`

const Card = styled.div`
    width:100%;
    height:100%;
    background:white;
    border-radius:7px;
    display:flex;
    flex-direction:column;
    align-items:center;
    overflow:hidden;
    
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
    opacity: 0.1;
`

const RedLine = styled.div`
    width:100%;
    height:50px;
    color:white;
    background:${themeColor.theme};
    display:flex;
    justify-content:center;
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
    justify-content:center;
    padding-left: 27px;
`
const Name = styled.div`
font-family: 'Nanum Gothic',sans-serif;
font-size: 20px;
    font-weight: bolder;
    color:black;
`

const StudentIDNumber = styled.div`
font-family: 'Nanum Gothic',sans-serif;
font-size: 20px;
color:black;
`
const NormalText = styled.div`
font-family: 'Nanum Gothic',sans-serif;
    letter-spacing: 1px;
    font-size: 13px;
    color:gray;
`
const ProfileImageContainer = styled.div`
    width:50%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:7px;
`

const ProfileImage = styled.img`
    width:100%;
    object-fit:cover;
    border-radius: 10px;
    z-index:1;
`


const XButton = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(0,0,0,0,2);
    color: white;
    background: rgba(255,255,255,0.3);
    display: flex;
    justify-content: center;
    align-items:center;
    margin-top:20px;
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
    user
}) {
    const classes = useStyles();
    return <Container>
        <CardContainer>
            <WaterMarkContainer>
                <WaterMark src={require('assets/biblelogo-removebg-preview.png')} />
            </WaterMarkContainer>

            <Card>
                <RedLine>모바일 학생증</RedLine>
                <MarginHeight />
                <Row style={{
                    height: '32%'
                }}>
                    <StudentInfoContainer>
                        <Name>{user.name}</Name>
                        <StudentIDNumber>{user.sid}</StudentIDNumber>
                        <MarginHeight />
                        <NormalText>{user.status}</NormalText>
                        <NormalText>{user.major}</NormalText>
                        <NormalText>{user.grade}학년</NormalText>
                    </StudentInfoContainer>
                    <ProfileImageContainer>
                        <ProfileImage src={user.sid === '201303024' ? require('assets/leo.png') : base64formatter(user.img)} />
                    </ProfileImageContainer>
                </Row>

                <MarginHeight />
                <QrcodeContainer>
                    {qrcode ? <QRCode shutdownQrcode={shutdownQrcode} img={qrcodeimg} /> : <Fab onClick={requestQrcode} variant="extended" aria-label="delete" className={classes.fab}>
                        <NavigationIcon className={classes.extendedIcon} />
                        QR CODE
                    </Fab>}

                </QrcodeContainer>

            </Card>
            <WatermarkBottom src={require('assets/watermark.png')} />
        </CardContainer>
        <XButton onClick={TurnOffStudentIDCard}><XIcon className={'fas fa-times'} /></XButton>
    </Container>
}