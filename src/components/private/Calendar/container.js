/* global gapi */
import React from 'react'
import styled from 'styled-components'
import Presenter from './presenter'
import { getEvents } from './gcal'
import { connect } from 'react-redux'
import { fetchEvents, selectEvent, turnDownCalendarDetailView } from 'actions/calendarAction'

// this weird syntax is just a shorthand way of specifying loaders

const CLIENT_ID = '589298923980-1eds4l3lg6c7qglq4ldel5uvmff8sfic.apps.googleusercontent.com';
const API_KEY = 'AIzaSyDdBx4__Ywp6F5sL7vJNrzrJIpvcWAn9P0';
const CALENDAR_ID = 'donggyu9410@gmail.com'
// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";
const Container = styled.div``

class CalendarContainer extends React.Component {

    constructor(props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {

        document.addEventListener('mousedown', this.handleClickOutside);

        getEvents((events) => {
            const { fetchEvents } = this.props;
            console.log('events')
            fetchEvents(events)
        })

    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }


    setWrapperRef(node) {
        this.wrapperRef = node;
    }


    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.outsideOfDetailViewClicked()
        }
    }





    render() {
        const { onEventSelected, outsideOfDetailViewClicked, setWrapperRef } = this;
        const { events, detailView, event } = this.props;
        return <Presenter wrapper={setWrapperRef} outsideOfDetailViewClicked={outsideOfDetailViewClicked} event={event} detailView={detailView} events={events} onEventSelected={onEventSelected} />
    }


    onEventSelected = (event, e) => {
        const { selectEvent } = this.props;
        selectEvent(event)
    }

    outsideOfDetailViewClicked = () => {
        this.props.turnDownCalendarDetailView()
    }



}

const mapStateToProps = state => {
    return {
        events: state.calendar.events,
        detailView: state.calendar.detailView,
        event: state.calendar.event
    }
}

export default connect(mapStateToProps, {
    fetchEvents,
    selectEvent,
    turnDownCalendarDetailView
})(CalendarContainer)