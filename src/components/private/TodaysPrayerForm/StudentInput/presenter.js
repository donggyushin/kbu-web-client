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
    position:relative;
`

const XButtonContainer = styled.div`
    position: absolute;
    top: 4px;
    right: 8px;
    padding: 7px;
`

const XButton = styled.i`
font-size: 18px;
`

export default function ({
    name,
    prayerOfStudent,
    handlePrayersOfStudent,
    i,
    deleteStudentPrayerCard
}) {
    return <Container>
        <Card>
            <TextField name={'name'} value={name} onChange={(e) => {
                handlePrayersOfStudent(i, e)
            }} style={{ width: '100%' }} id="standard-basic" label="학우님 성명" />
            <TextareaAutosize
                className={'textareaautosize'}
                placeholder={'학우님의 기도문을 적어주세요'}
                name={'prayerOfStudent'}
                value={prayerOfStudent}
                onChange={(e) => {
                    handlePrayersOfStudent(i, e)
                }}
                style={{
                    width: '100%',
                    resize: 'none',
                    marginBottom: 20,
                    minHeight: 20,
                    border: 0
                }} />
            <XButtonContainer onClick={() => {
                deleteStudentPrayerCard(i)
            }}>
                <XButton className={'fas fa-times'} />
            </XButtonContainer>
        </Card>
    </Container>
}