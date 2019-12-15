import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin-top:13px;
    display:flex;
    justify-content:center;
`


const Sun = styled.i`
    margin-right:50px;
    font-size:32px;
color:${props => props.mode === 'lunch' && '#f39c12'};
`

const Moon = styled.i`
    font-size:28px;
color:${props => props.mode === 'dinner' && '#3498db'};
`

const Image = styled.img`
    width:35px;
`


export default function ({ mode,
    moonClicked,
    sunClicked,
    iconClicked
}) {
    return <Container>
        {mode === 'lunch' ? <>
            <Image style={{ marginRight: 50 }} src={require('./images/sun_picked.png')} />
            <Image onClick={moonClicked} src={require('./images/crescent_moons.png')} />
        </> : <>
                <Image onClick={sunClicked} style={{ marginRight: 50 }} src={require('./images/sun.png')} />
                <Image src={require('./images/crescent_moon_picked.png')} />
            </>}
        {/*         
        <Sun mode={mode} onClick={sunClicked} className={'fas fa-sun'} />
        <Moon mode={mode} onClick={moonClicked} className={'fas fa-moon'} /> */}
    </Container>
}