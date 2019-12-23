import React from 'react'
import styled from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize'


const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    margin-top:20px;
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

const StudentName = styled.div`
    font-size: 13px;
    font-weight: 700;
    color: black;
`

export default function ({
    studentName,
    prayer
}) {
    return <Container>
        <Card>
            <StudentName>{studentName}</StudentName>
            <TextareaAutosize
                className={'textareaautosize'}
                value={prayer}
                style={{
                    width: '100%',
                    resize: 'none',
                    marginBottom: 20,
                    minHeight: 20,
                    border: 0
                }}
                disabled={true}
            />
        </Card>
    </Container>
}