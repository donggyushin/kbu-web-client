/* global gapi */
import React from 'react'
import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import styled from 'styled-components'
import Presenter from './presenter'
import { getEvents } from './gcal'

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

export default class CalendarContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            events: [

            ],
        };
    }

    componentDidMount() {
        getEvents((events) => {
            console.log('events')
            this.setState({ events })
        })

    }





    render() {
        return <Presenter />
    }



}

