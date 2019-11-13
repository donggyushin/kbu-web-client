import React from 'react'
import styled from 'styled-components';
import sampleEvents from './events'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)

const Container = styled.div``



export default function ({ events }) {
    console.log('sampleEvents:', sampleEvents)
    return <Container>
        <Calendar
            localizer={localizer}
            events={sampleEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '100vh' }}
        />
    </Container>
}