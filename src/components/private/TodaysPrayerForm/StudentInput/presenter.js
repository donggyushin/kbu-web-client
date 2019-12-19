import React from 'react'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'
import TextareaAutosize from 'react-textarea-autosize';

const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    margin-top:20px;
    margin-bottom:20px;
`

const Card = styled.div`
    width:100%;
    border-radius:3px;
    box-shadow: 0px 2px 4px #6D7278;
    padding-top: 10px;
    padding-left: 10px;
    padding-right:10px;
`

export default function ({
    name,
    prayerOfStudent
}) {
    return <Container>
        <Card>
            <TextField style={{ width: '100%' }} id="standard-basic" label="학우님 성명" />
            <TextareaAutosize
                className={'textareaautosize'}
                placeholder={'학우님의 기도문을 적어주세요'}
                style={{
                    width: '100%',
                    resize: 'none',
                    marginBottom: 20,
                    minHeight: 20,
                    border: 0
                }} />
        </Card>
    </Container>
}