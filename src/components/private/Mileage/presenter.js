import React from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick-theme.css";
import 'slick-carousel/slick/slick.css'
import UsageList from './UsageList';
import SmallLoading from 'components/global/SmallLoading';
import Card from './Card';

const Red = '#e74c3c'

const Container = styled.div`
    width:100%;
    height:100%;
    background:white;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const CardContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:39vh;
    background:#f1f2f6;
`


const Usage = styled.div`
    width:100%;
    margin-top:20px;
    padding-left:15px;
    border-bottom:1px solid black;
    padding-bottom:10px;
    font-weight:600;
`

const LoadingContainer = styled.div`
    padding-top:20px;
`


export default function MileagePresenter({ rows, loading }) {


    return <Container>
        <CardContainer>
            <Card />
        </CardContainer>
        <Usage >이용내역</Usage>

        {loading ? <LoadingContainer><SmallLoading black={true} /></LoadingContainer> : <UsageList rows={rows} loading={loading} />}

    </Container>
}