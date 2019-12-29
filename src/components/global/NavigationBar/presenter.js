import React from 'react'
import styled from 'styled-components'
import TabBar from './TabBar'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width:100%;
    height:70px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-left:20px;
    padding-right:20px;
`

const Text = styled.div`
    color: black;
    font-size: 18px;
    font-weight: 500;
`

const Cog = styled.i`
    color: #b2bec3;
    font-size:23px;
`

export default function ({
    location,
    slideTabBarToLeft,
    logout,
    tabBar,
    turnOnTab,
    refer,
    isLoggedIn }) {
    return <Container>
        <Link to={'/'}>
            <Text>{location ? location : "성서봇"}</Text>
        </Link>
        <Cog onClick={turnOnTab} className={'fas fa-cog'} />
        {tabBar && <TabBar
            slideTabBarToLeft={slideTabBarToLeft}
            logout={logout}
            isLoggedIn={isLoggedIn}
            refer={refer} />}
    </Container>
}