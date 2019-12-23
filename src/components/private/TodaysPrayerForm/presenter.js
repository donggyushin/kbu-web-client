import React from 'react'
import styled from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import StudentInput from './StudentInput';
import NormalLoading from 'components/global/normalLoading';
const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Form = styled.div`
    width:90%;
    box-shadow: 0px 2px 4px #6D7278;
    display:flex;
    flex-direction:column;
    padding-top:29px;
    padding-left:23px;
    padding-right:23px;
    margin-bottom: 10px;
`

const Label = styled.div`
    font-size:14px;
    font-weight:600;

`

const AddButtonContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    margin-bottom:20px;
`

const SubmitButton = styled.div`
    width:100%;
    height:33px;
    background: rgba(0,0,0,0.25);
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    border-radius:3px;
    margin-bottom:7px;
    font-size: 18px;
    font-weight:600;
    margin-bottom:20px;
`

export default function ({
    todaysPrayer,
    handleInput,
    prayersOfStudent,
    addButtonClicked,
    submitButtonClicked,
    handlePrayersOfStudent,
    loading,
    loading2,
    deleteStudentPrayerCard
}) {
    return <Container>
        <Form>
            <Label style={{
                marginBottom: 20
            }}>오늘의 말씀</Label>
            <TextareaAutosize
                name={'todaysPrayer'}
                className={'textareaautosize'}
                value={todaysPrayer}
                onChange={handleInput}
                style={{
                    width: '100%',
                    resize: 'none',
                    marginBottom: 20
                }} />
            <Label>
                학생을 위한 기도
            </Label>
            {prayersOfStudent.map((cell, i) => {
                const { name, prayerOfStudent } = cell;
                return <StudentInput
                    key={i}
                    i={i}
                    name={name}
                    prayerOfStudent={prayerOfStudent}
                    handlePrayersOfStudent={handlePrayersOfStudent}
                    deleteStudentPrayerCard={deleteStudentPrayerCard}
                />
            })}
            <AddButtonContainer>
                <Fab
                    onClick={addButtonClicked}
                    style={{
                        outline: 'none'
                    }} color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </AddButtonContainer>
            <SubmitButton onClick={submitButtonClicked}>작성</SubmitButton>
        </Form>
        {loading && <NormalLoading />}
        {loading2 && <NormalLoading />}
    </Container>
}