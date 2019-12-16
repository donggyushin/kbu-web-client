import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    font-family:'applesdLight';
`

const Text = styled.div`
    font-size:14px;
    color:black;
    margin-top:23px;
`

export default function ({ attendance, late, duty, sure }) {
    return <Container>
        <Text>
            총 {duty}일 중 {sure}일을 들으셨어요
        </Text>
    </Container>
}