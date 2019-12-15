import React from 'react'
import styled from 'styled-components';



const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    height:100%;
    position:relative;
`

const Background = styled.div`
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background:rgba(0,0,0,0.1);
    z-index:3;
`

const ImageContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:20px;
    margin-bottom:20px;
    position:relative;
    
`
const InvisiableCircle = styled.div`
    background:white;
    border-radius: 50%;
    width: 80px;
    height: 64px;
    position: absolute;
    top: 78px;
    display:flex;
    justify-content:center;
    align-items:center;
`
const Process = styled.div`
    font-size: 12px;
    color: gray;
`

const FlowerImage = styled.img`
    width:70px;
    margin-top:13px;
    z-index:1;
    transition-duration:0.3s;
    /* position:absolute; */
`

const Name = styled.div`
    font-size: 13px;
    font-weight: 600;
    margin-top:20px;
    z-index:1;
    color:black;
    opacity:0;
`

const Message = styled.div`
    font-size: 12px;
    z-index: 1;
    color:gray;
`

export default function ({ redirectToLoginPage }) {
    return <Container onClick={() => { redirectToLoginPage('/chapel') }}>
        <Background />
        <ImageContainer>
            <div id="container"></div>
            <InvisiableCircle >
                <Process>
                    0 / 0
            </Process>
            </InvisiableCircle>
            <FlowerImage src={require(`./images/flower1.png`)} alt={'chapel image'} />
        </ImageContainer>
        <Name>신동규</Name>
        <Message>로그인을 해주세요</Message>
    </Container>
}