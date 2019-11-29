import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.6);
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    z-index:3;
`

export default function () {
    return <Container>
        <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </Container>
}