import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:100%;
    height:100px;
    text-transform:uppercase;
    font-weight: 300;
    font-size:12px;
    color:#b2bec3;
    text-transform:uppercase;
    
`

const CopyrightComponent = () => <Container>
    copyright korean bible university all rights reserved
</Container>

export default CopyrightComponent