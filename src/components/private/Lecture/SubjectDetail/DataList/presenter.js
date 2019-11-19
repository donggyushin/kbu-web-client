import React from 'react';
import styled from 'styled-components';
import { Date, Attendance, NormalAbsence, Late, ETC } from '../presenter'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
`

const Row = styled.div`
    display:flex;
    width:100%;
    align-items:center;
`

export default function ({ lectureDetail }) {
    console.log('lectureDetail:', lectureDetail)
    return <Container>
        {lectureDetail.datas.map(data => {
            return <Row>
                <Date style={{
                    borderBottom: '1px solid white',
                    borderRight: '1px solid white'
                }}>{getMonthAndDay(data[0])}</Date>
                <Attendance style={{

                    borderBottom: '1px solid white',
                    borderRight: '1px solid white'
                }}>{data[2]}</Attendance>
                <NormalAbsence style={{

                    borderBottom: '1px solid white',
                    borderRight: '1px solid white'
                }}>{data[3]}</NormalAbsence>
                <Late style={{

                    borderBottom: '1px solid white',
                    borderRight: '1px solid white'
                }}>
                    {data[4]}
                </Late>
                <ETC style={{

                    borderBottom: '1px solid white',

                }}>
                    {data[5]}
                </ETC>
            </Row>
        })}
    </Container>
}

function getMonthAndDay(string) {
    return string.substr(5)
}