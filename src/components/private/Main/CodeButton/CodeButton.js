import React from 'react';
import styled from 'styled-components';

const Container = styled.button`  
    color: white;
    border: 0;
    border-radius: 5px;
    font-size: 29px;
    outline:none;
    font-weight: 600;
    cursor: pointer;
    position: relative;
    top: 2px;
    background: transparent;
`

const Border = styled.div`
    
    border-radius:5px;
    border :${props => props.loading ? '1px solid gray' : '1px solid #e67e22'} ;
`

const Icon = styled.i`
    color:${props => props.loading ? 'gray' : '#1e3799'};
    font-size:50px;
`

const CodeButton = ({ QRCodeOn, loading }) => <Border loading={loading}>
    <Container disabled={loading} onClick={QRCodeOn}>
        <Icon loading={loading} className={'fas fa-qrcode'} />
    </Container>
</Border>

export default CodeButton