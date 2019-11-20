import React from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick-theme.css";
import 'slick-carousel/slick/slick.css'
import UsageList from './UsageList';
import SmallLoading from 'components/global/SmallLoading';

const Red = '#e74c3c'

const Container = styled.div`
    width:100%;
    height:110%;
    background:white;
    position:absolute;
    top:0;
    padding-top:50px;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Card = styled.div`
    width:90%;
    border-radius:20px;
    border:1px solid gainsboro;
    padding-top:10px;
    padding-bottom:10px;
    padding-left:20px;
    padding-right:20px;
    margin-top:20px;
    display:flex;
    flex-direction:column;
    align-items:center;
`
const MyMileage = styled.div`
    color:${Red};
    width:100%;
    font-weight:600;
`

const Mileage = styled.div`
    color:${Red};
    font-weight:900;
    font-size:25px;
    margin-top:28px;
    margin-bottom:30px;
`

const Usage = styled.div`
    width:100%;
    margin-top:20px;
    padding-left:15px;
    border-bottom:1px solid gainsboro;
    padding-bottom:10px;
    font-weight:600px !important;
`

const LoadingContainer = styled.div`
    padding-top:20px;
`


export default function MileagePresenter({ rows, loading }) {


    return <Container>
        <Card>
            <MyMileage>내마일리지</MyMileage>
            <Mileage>915 P</Mileage>
        </Card>
        <Usage style={{
            fontWeight: 600
        }}>이용내역</Usage>

        {loading ? <LoadingContainer><SmallLoading black={true} /></LoadingContainer> : <UsageList rows={rows} loading={loading} />}

    </Container>
}