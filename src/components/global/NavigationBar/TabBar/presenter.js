import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

const LeftToRight = keyframes`
    from{
        right:39%;
    }
    to{
        right:0px;
    }
`

const RightToLeft = keyframes`
    from{
        right:0px;
    }
    to{
        right:39%;
    }
`

const Container = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.1);
    z-index:4;
`

const Tab = styled.div`
    width:39%;
    height:100%;
    background:white;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    display:flex;
    flex-direction:column;
    padding-top: 20px;
    padding-left: 9px;
    position:relative;
    animation:${LeftToRight} 0.3s;
`

const Tab2 = styled.div`
    width:39%;
    height:100%;
    background:white;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    display:flex;
    flex-direction:column;
    padding-top: 20px;
    padding-left: 9px;
    position:relative;
    animation:${RightToLeft} 0.3s;
    right:39%;
`

const Text = styled.div`
    color: black;
    margin-top: 3px;
    margin-bottom: 3px;
    font-size: 15px;
`
export default function ({ refer, isLoggedIn, logout, slideTabBarToLeft }) {
    return <Container>
        {slideTabBarToLeft ? <Tab2>
            <Text>관리자 페이지</Text>
            <Link to={'/map'}>
                <Text>학교 맵</Text>
            </Link>
            {isLoggedIn ? <Text onClick={logout}>로그아웃</Text> : <Link to={'/login'}><Text>로그인</Text></Link>}
        </Tab2> : <Tab ref={refer}>
                <Text>관리자 페이지</Text>
                <Link to={'/map'}>
                    <Text>학교 맵</Text>
                </Link>
                {isLoggedIn ? <Text onClick={logout}>로그아웃</Text> : <Link to={'/login'}><Text>로그인</Text></Link>}
            </Tab>}

    </Container>
}