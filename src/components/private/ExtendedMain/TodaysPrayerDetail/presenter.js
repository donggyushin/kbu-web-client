import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: 100%;
    height: 100%;
    box-shadow: 0px 1px 3px 1px #f39c12;
    display:flex;
    justify-content:center;
    position:relative;
`

const Image = styled.img`
    width:70px;
    position:absolute;
    left:0px;
`

const TextContainer = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;

`

const ThickText = styled.div`
    font-size: 13px;
    font-weight: 700;
    color: black;
`

const ThinText = styled.div`
    font-size: 11px;
    color: gray;
`



export default function () {
    return <Link to={'/prayer'} style={{
        width: '95%',
        height: 67,
        marginBottom: 5
    }}>
        <Container>
            <Image src={require('./images/cross.png')} />
            <TextContainer>
                <ThickText>
                    오늘의 기도
            </ThickText>
                <ThinText>
                    Today prayer
            </ThinText>
            </TextContainer>
        </Container>
    </Link>


}