import React from 'react'
import styled from 'styled-components'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Container = styled.div`
    width:30%;
    display:flex;
    justify-content:center;
    margin-top:20px;
`

export default function ({ progress }) {
    return <Container>
        <CircularProgressbar

            strokeWidth={10}
            styles={buildStyles({
                pathTransitionDuration: 0.5
            })}
            value={progress} text={`${progress}%`} />
    </Container>
}