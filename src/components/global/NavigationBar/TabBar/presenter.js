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
    z-index:5;
`

const Tab = styled.div`
    width:43%;
    height:100%;
    background:white;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    display:flex;
    flex-direction:column;
    padding-top: 20px;
    padding-left: 9px;
    padding-right:9px;
    position:relative;
    animation:${LeftToRight} 0.3s;
`

const Tab2 = styled.div`
    width:43%;
    height:100%;
    background:white;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    display:flex;
    flex-direction:column;
    padding-top: 20px;
    padding-left: 9px;
    padding-right:9px;
    position:relative;
    animation:${RightToLeft} 0.3s;
    right:39%;
`

const TextButton = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
    align-items:center;
    border-radius:4px;
    background:white;
    padding-right:9px;
    padding-left:9px;
`

const RedTextButton = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
    align-items:center;
    border-radius:4px;
    background:#d63031;
    padding-right:9px;
    padding-left:9px;
    margin-bottom:5px;
`

const GreenTextButton = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
    align-items:center;
    border-radius:4px;
    background:#00b894;
    padding-right:9px;
    padding-left:9px;
    margin-bottom:5px;
`

const Text = styled.div`
    color: black;
    margin-top: 3px;
    margin-bottom: 3px;
    font-size: 14px;
    padding-top: 5px;
    padding-bottom: 5px;
    font-family:'applesdLight';
`
const Icon = styled.i`
    color:black;
`

export default function ({
    refer,
    isLoggedIn,
    logout,
    slideTabBarToLeft
}) {
    return <Container>
        {slideTabBarToLeft ? <Tab2>
            <Link to={'/'}>
                <TextButton>
                    <Text>홈</Text>
                    <Icon className={'fas fa-home'} />
                </TextButton>
            </Link>
            {/* <Text>관리자 페이지</Text> */}
            {isLoggedIn && <Link to={'/chapel'}>
                <TextButton>
                    <Text>채플</Text>
                    <Icon className={'fas fa-cross'} />
                </TextButton>
            </Link>}
            {isLoggedIn && <Link to={'/mileage'}>
                <TextButton>
                    <Text>마일리지</Text>
                    <Icon className={'fas fa-coins'} />
                </TextButton>
            </Link>}
            <Link to={'/notice'}>
                <TextButton>
                    <Text>공지사항</Text>
                    <Icon className={'fas fa-clipboard'} />
                </TextButton>
            </Link>
            <Link to={'/cafeteria'}>
                <TextButton>
                    <Text>교내식당</Text>
                    <Icon className={'fas fa-utensils'} />
                </TextButton>
            </Link>
            {isLoggedIn && <Link to={'/lecture'}>
                <TextButton>
                    <Text>수업</Text>
                    <Icon className={'fas fa-book'} />
                </TextButton>
            </Link>}
            <Link to={'/calendar'}>
                <TextButton>
                    <Text>학사일정</Text>
                    <Icon className={'far fa-calendar'} />
                </TextButton>
            </Link>
            <Link to={'/schedule'}>
                <TextButton>
                    <Text>학사일정(PDF)</Text>
                    <Icon className={'fas fa-calendar'} />
                </TextButton>
            </Link>
            <Link to={'/map'}>
                <TextButton>
                    <Text>학교 맵</Text>
                    <Icon className={'fas fa-map-signs'} />
                </TextButton>
            </Link>
            <Link to={'/prayerform'}>
                <TextButton>
                    <Text>오늘의 말씀<br />(관리자)</Text>
                    <Icon className={'fas fa-praying-hands'} />
                </TextButton>
            </Link>
            <Link to={'/prayer'}>
                <TextButton>
                    <Text>오늘의 말씀</Text>
                    <Icon className={'fas fa-pray'} />
                </TextButton>
            </Link>
            {isLoggedIn ?
                <RedTextButton>
                    <Text style={{ color: 'white' }} onClick={logout}>로그아웃</Text>
                    <Icon style={{ color: 'white' }} className={'fas fa-external-link-alt'} />
                </RedTextButton>
                :
                <Link to={'/login'}>
                    <GreenTextButton>
                        <Text style={{ color: 'white' }}>로그인</Text>
                        <Icon style={{ color: 'white' }} className={'fas fa-power-off'} />
                    </GreenTextButton>
                </Link>}
        </Tab2> : <Tab ref={refer}>
                <Link to={'/'}>
                    <TextButton>
                        <Text>홈</Text>
                        <Icon className={'fas fa-home'} />
                    </TextButton>
                </Link>
                {/* <Text>관리자 페이지</Text> */}
                {isLoggedIn && <Link to={'/chapel'}>
                    <TextButton>
                        <Text>채플</Text>
                        <Icon className={'fas fa-cross'} />
                    </TextButton>
                </Link>}
                {isLoggedIn && <Link to={'/mileage'}>
                    <TextButton>
                        <Text>마일리지</Text>
                        <Icon className={'fas fa-coins'} />
                    </TextButton>
                </Link>}
                <Link to={'/notice'}>
                    <TextButton>
                        <Text>공지사항</Text>
                        <Icon className={'fas fa-clipboard'} />
                    </TextButton>
                </Link>
                <Link to={'/cafeteria'}>
                    <TextButton>
                        <Text>교내식당</Text>
                        <Icon className={'fas fa-utensils'} />
                    </TextButton>
                </Link>
                {isLoggedIn && <Link to={'/lecture'}>
                    <TextButton>
                        <Text>수업</Text>
                        <Icon className={'fas fa-book'} />
                    </TextButton>
                </Link>}
                <Link to={'/calendar'}>
                    <TextButton>
                        <Text>학사일정</Text>
                        <Icon className={'far fa-calendar'} />
                    </TextButton>
                </Link>
                <Link to={'/schedule'}>
                    <TextButton>
                        <Text>학사일정(PDF)</Text>
                        <Icon className={'fas fa-calendar'} />
                    </TextButton>
                </Link>
                <Link to={'/map'}>
                    <TextButton>
                        <Text>학교 맵</Text>
                        <Icon className={'fas fa-map-signs'} />
                    </TextButton>
                </Link>
                <Link to={'/prayerform'}>
                    <TextButton>
                        <Text>오늘의 말씀<br />(관리자)</Text>
                        <Icon className={'fas fa-praying-hands'} />
                    </TextButton>
                </Link>
                <Link to={'/prayer'}>
                    <TextButton>
                        <Text>오늘의 말씀</Text>
                        <Icon className={'fas fa-pray'} />
                    </TextButton>
                </Link>
                {isLoggedIn ?
                    <RedTextButton onClick={logout}>
                        <Text style={{ color: 'white' }} >로그아웃</Text>
                        <Icon style={{ color: 'white' }} className={'fas fa-external-link-alt'} />
                    </RedTextButton>
                    :
                    <Link to={'/login'}>
                        <GreenTextButton>
                            <Text style={{ color: 'white' }}>로그인</Text>
                            <Icon style={{ color: 'white' }} className={'fas fa-power-off'} />
                        </GreenTextButton>
                    </Link>}
            </Tab>}

    </Container>
}