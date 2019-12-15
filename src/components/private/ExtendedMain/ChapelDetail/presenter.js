import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
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
`

const Message = styled.div`
    font-size: 12px;
    z-index: 1;
    color:gray;
`



export default function ({ duty,
    sure, percentage, image, user }) {
    return <Container>
        <ImageContainer>
            <div id="container"></div>
            <InvisiableCircle >
                <Process>
                    {sure && sure} / {duty && duty}
                </Process>
            </InvisiableCircle>
            <FlowerImage src={image ? require(`./images/${image}`) : require(`./images/flower1.png`)} alt={'chapel image'} />
        </ImageContainer>
        <Name>{user ? user.name : ' '}</Name>
        {duty - sure === 0 ? <Message>축하해요</Message> : <Message>앞으로 {duty - sure}번 남았네요!!</Message>}

    </Container>
}