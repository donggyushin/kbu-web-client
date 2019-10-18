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
    font-weight: 600;
    
`

const CopyrightComponent = () => <Container>
    Copyright(C) 2019. 피자호빵. All Rights reserved.
</Container>

export default CopyrightComponent