import React from 'react'
import styled from 'styled-components'
import themeColor from 'constants/themeColor'

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:100%;
    background:white;
    height:50px;
    color:${themeColor.theme};
`

const Left = styled.div`
    margin-left:10px;
    font-size:20px;
`

const Center = styled.div`
    font-size:16px;
`

const Right = styled.div`
    margin-right:10px;
    font-size:20px;
`

const Icon = styled.i``

export default function ({
    year,
    month,
    day
}) {
    return <Container>
        <Left>
            <Icon className={'fas fa-chevron-left'} />
        </Left>
        <Center>
            {month}월 {day}일 (수)
        </Center>
        <Right>
            <Icon className={'fas fa-chevron-right'} />
        </Right>
    </Container>
}