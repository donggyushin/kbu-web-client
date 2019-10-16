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
    letter-spacing: 0.7px;
    font-weight: 600;
    
`

const CopyrightComponent = () => <Container>
    Copyright ⓒ 2019 All rights reserved by 피자호빵.
</Container>

export default CopyrightComponent