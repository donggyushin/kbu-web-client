import React from 'react'
import styled, { keyframes } from 'styled-components'
import NormalLoading from 'components/global/normalLoading'
import TextareaAutosize from 'react-textarea-autosize'
import StudentPrayer from './StudentPrayer'

const SlideUp = keyframes`
    from {
        top:1500px;
    }
    to {
        top:0px;
    }
`

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
    padding-bottom:20px;
    animation:${SlideUp} 1s;
    position:relative;
`

const Label = styled.div`
    font-size:14px;
    font-weight:600;

`

const Date = styled.div`
    display: flex;
    justify-content: flex-end;
    font-family: 'applesdLight';
    position: absolute;
    width: 86%;
    top: 15px;
`

export default function ({
    loading,
    todaysPrayer,
    prayersOfStudents,
    year,
    month,
    day
}) {
    return <Container>
        <Form>
            <Date>
                {year}년 {month}월 {day}일
            </Date>
            <Label style={{
                marginBottom: 20
            }}>오늘의 말씀</Label>
            <TextareaAutosize disabled={true} className={'blue'} value={todaysPrayer.prayer} />
            <Label>
                학우님을 위한 기도
        </Label>
            {prayersOfStudents.map(cell => {
                const {
                    studentName,
                    prayer,
                    _id
                } = cell
                return <StudentPrayer
                    key={_id}
                    studentName={studentName}
                    prayer={prayer}
                />
            })}
        </Form>
        {loading && <NormalLoading />}
    </Container>
}