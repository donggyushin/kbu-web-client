import React from 'react';
import styled from 'styled-components';
import QRCode from 'qrcode.react';

const Container = styled.div`
    position:fixed;
    top:0;
    left:0;
    height:100%;
    width:100%;
    background:rgba(0,0,0,0.7);
    opacity:${props => props.view ? 1 : 0};
    transition:0.3s;
    display:${props => props.view ? "flex" : "none"};
    align-items:center;
    justify-content:center;
    
`

const CodeContainer = styled.div`
    position:relative;
    top:500px;
`

class QRCodeComponent extends React.Component {


    constructor(props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        setTimeout(() => {
            const { QRCodeOff } = this.props;
            QRCodeOff()
        }, 15000);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    /**
     * Set the wrapper ref
     */
    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    /**
     * Alert if clicked on outside of element
     */
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            const { QRCodeOff } = this.props;
            QRCodeOff()
        }
    }


    render() {
        const { view } = this.props;
        return <Container view={view}>
            <CodeContainer className={'qrcode-container'} ref={this.setWrapperRef}>
                <QRCode
                    size={200}
                    value={'http://facebook.github.io/react/'} />
            </CodeContainer>
        </Container>
    }
}

export default QRCodeComponent;