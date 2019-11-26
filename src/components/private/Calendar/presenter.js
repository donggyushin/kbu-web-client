import React from 'react'
import styled from 'styled-components';
import sampleEvents from './events'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import CalendarDetailView from './EventDetail';

const localizer = momentLocalizer(moment)

const Container = styled.div``



export default function ({ onNavigation, events, onEventSelected, event, detailView, outsideOfDetailViewClicked, eventPropGetter }) {

    return <Container>
        <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '100vh' }}
            onSelectEvent={onEventSelected}
            eventPropGetter={eventPropGetter}
            onNavigate={onNavigation}
            popup={true}
        />
        {detailView && <CalendarDetailView outsideOfDetailViewClicked={outsideOfDetailViewClicked} event={event} />}
        {/* <iframe src="https://calendar.google.com/calendar/embed?src=4tjtr23q6bcevh6no8q040eue8%40group.calendar.google.com&ctz=Asia%2FSeoul" style={{ border: "0" }} width="100%" height="600" frameBorder="0" scrolling="no"></iframe> */}
    </Container>
}