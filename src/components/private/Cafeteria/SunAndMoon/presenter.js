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


export default function ({ mode,
    moonClicked,
    sunClicked
}) {
    return <Container>
        <Sun mode={mode} className={'fas fa-sun'} />
        <Moon mode={mode} className={'fas fa-moon'} />
    </Container>
}