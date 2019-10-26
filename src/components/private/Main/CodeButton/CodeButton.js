import React from 'react';
import styled from 'styled-components';
import themeColor from 'constants/themeColor'

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
    border-radius:50%;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    padding:10px;
    overflow:hidden;
    border : 1px solid ${themeColor.theme} ;
`

const Icon = styled.i`
    color:${props => props.loading ? 'gray' : themeColor.theme};
    font-size:61px;
`

const ButtonImage = styled.img``

const CodeButton = ({ QRCodeOn, loading }) => <Border><Container disabled={loading} onClick={QRCodeOn}>
    <Icon loading={loading} className={'fas fa-qrcode'} />
    {/* <ButtonImage src={require('assets/qrcodebutton.png')} /> */}
</Container>
</Border>



export default CodeButton