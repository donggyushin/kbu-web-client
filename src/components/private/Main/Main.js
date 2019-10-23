import React from 'react';
import styled from 'styled-components';
import CodeButton from './CodeButton/CodeButton';
import StudentCard from './StudentCard/StudentCard';
import { decodeJsonWebToken } from 'utils/jsonwebtoken';
import Axios from 'axios';
import REST_API_ENDPOINT from 'constants/endpoint';


const Container = styled.div`
    width:100%;
    min-height:80vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-bottom:100px;
`

class FirstPrivatePage extends React.Component {




    render() {
        const { QRCodeOn, user, loading } = this.props;

        return <Container>
            <StudentCard loading={loading} user={user} />

            <br />
            <br />
            <br />
            <CodeButton loading={loading} QRCodeOn={QRCodeOn} />
        </Container>
    }
}

export default FirstPrivatePage