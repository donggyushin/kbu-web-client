import React from 'react';
import { css } from '@emotion/core'
import { PacmanLoader } from 'react-spinners'
import styled from 'styled-components';
import ThemeColor from 'constants/themeColor'

const Container = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    
`

const override = css`
    position: relative;
    right:20px;
    bottom:20px;
    z-index:2;
`

class AwesomeLoadingComponent extends React.Component {
    render() {
        const { loading } = this.props;
        return <Container>
            <PacmanLoader

                css={override}
                sizeUnit={"px"}
                size={40}
                color={ThemeColor.theme}
                loading={true}
            />
        </Container>

    }
}

export default AwesomeLoadingComponent