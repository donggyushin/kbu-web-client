import React from 'react'
import styled from 'styled-components'

const Container = styled.a`
    display:flex;
    color:black;
    align-items:center;
`

const ImageAndNumContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:13%;
    height:60px;
`

const Image = styled.img`
    width:15px;
`

const Num = styled.div`
    font-size:11px;
`

const TitleAndWriterContainer = styled.div`
    width:68%;
`

const Title = styled.div`
width:100%;
    text-overflow:ellipsis;
    white-space:nowrap;
    overflow:hidden;
`

const Writer = styled.div`
    font-size:11px;
`

const Date = styled.div`
    font-size:11px;
`

export default function ({
    url,
    num,
    writer,
    title,
    date
}) {
    return <Container target={'blank'} href={url}>
        <ImageAndNumContainer>
            <Image src={require('./images/noticecell.png')} />
            <Num>{num}</Num>
        </ImageAndNumContainer>
        <TitleAndWriterContainer>
            <Title>{title}</Title>
            <Writer>{writer}</Writer>
        </TitleAndWriterContainer>
        <Date>
            {date}
        </Date>
    </Container>
}