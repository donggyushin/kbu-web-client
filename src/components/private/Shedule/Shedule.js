import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import styled from 'styled-components';

const Container = styled.div`
    width:100%;
    overflow-x:scroll;
    display:flex;
    flex-direction:column;
    /* align-items:center; */
`

const Row = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    align-items:center;
    margin-top:30px;
`

const PageText = styled.div`
    position:absolute;
    font-family: '1997';
`

class Shedule extends Component {
    state = {
        numPages: null,
        pageNumber: 2,
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const { pageNumber, numPages } = this.state;

        return (
            <Container>
                <Document
                    file="/shedule.pdf"
                    onLoadSuccess={this.onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
                <Row>
                    <PageText>{pageNumber} of {numPages}</PageText>
                </Row>
            </Container>
        );
    }
}

export default Shedule;