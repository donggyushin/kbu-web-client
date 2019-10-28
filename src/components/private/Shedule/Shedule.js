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
    margin-bottom:30px;
`

const PageText = styled.div`
    position:absolute;
    font-family: '1997';
`

const ArrowButton = styled.i`
    font-size:27px;
`



class Shedule extends Component {
    state = {
        numPages: null,
        pageNumber: 2,
    }

    componentDidMount() {
        this.setState({
            pageNumber: new Date().getMonth() + 2
        })
    }



    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const { pageNumber, numPages } = this.state;
        const { goPrevious, goNext } = this;
        return (
            <Container>
                <Document
                    file="/shedule.pdf"
                    onLoadSuccess={this.onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
                <Row>
                    {1 < this.state.pageNumber && <ArrowButton onClick={goPrevious} style={{
                        position: 'absolute',
                        left: 50
                    }} className={'fas fa-arrow-circle-left'} />}

                    <PageText>{pageNumber} of {numPages}</PageText>
                    {this.state.pageNumber < this.state.numPages && <ArrowButton onClick={goNext} style={{
                        position: 'absolute',
                        right: 50
                    }} className={'fas fa-arrow-circle-right'} />}

                </Row>
            </Container>
        );
    }


    goPrevious = () => {
        this.setState({
            pageNumber: this.state.pageNumber - 1
        })
    }

    goNext = () => {
        this.setState({
            pageNumber: this.state.pageNumber + 1
        })
    }
}

export default Shedule;