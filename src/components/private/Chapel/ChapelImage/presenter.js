import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;

`

const Image = styled.img`
    width:100px;
`

export default function ({ imageName }) {
    console.log('imagename: ' + imageName)
    return <Container>
        {imageName && <Image src={require('../../ExtendedMain/ChapelDetail/images/' + imageName)} />}
    </Container>
}