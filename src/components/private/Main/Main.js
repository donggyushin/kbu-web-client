import React from 'react';
import styled from 'styled-components';
import CodeButton from './CodeButton/CodeButton';
import StudentCard from './StudentCard/StudentCard';


const Container = styled.div`
    width:100%;
    min-height:80vh;
    display:flex;
    flex-direction:column;
    align-items:center;
`

class FirstPrivatePage extends React.Component {
    render() {
        const { QRCodeOn } = this.props;
        return <Container>
            <StudentCard />
            <br />
            <br />
            <br />
            <CodeButton QRCodeOn={QRCodeOn} />
        </Container>
    }
}

export default FirstPrivatePage