/* global gapi */
import React from 'react'
import styled from 'styled-components'
import Presenter from './presenter'
import { getEvents, getNationalOffDay } from './gcal'
import { connect } from 'react-redux'
import { fetchEvents, selectEvent, turnDownCalendarDetailView } from 'actions/calendarAction'

let Month
let Year


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

    async componentDidMount() {

        let eventsList = []

        if (this.props.events.length === 0) {

            getEvents((events) => {
                console.log('get events: ', events)
                eventsList.push(events)
                eventsList = [
                    ...eventsList,
                    ...events
                ]
                getNationalOffDay((events) => {
                    console.log('get events2: ', events)
                    eventsList = [
                        ...eventsList,
                        ...events
                    ]
                    this.props.fetchEvents(eventsList)
                })


            })
        }



        document.querySelector(".rbc-calendar").style.height = "100vh"

        document.querySelectorAll(".rbc-btn-group > button")[0].textContent = "오늘"
        document.querySelectorAll(".rbc-btn-group > button")[1].textContent = "<"
        document.querySelectorAll(".rbc-btn-group > button")[2].textContent = ">"
        document.querySelectorAll(".rbc-btn-group > button")[3].textContent = "월간"
        document.querySelectorAll(".rbc-btn-group > button")[4].textContent = "주간"
        document.querySelectorAll(".rbc-btn-group > button")[5].textContent = "일간"
        document.querySelectorAll(".rbc-btn-group > button")[6].textContent = "요약"
        document.querySelectorAll(".rbc-btn-group > button")[4].style.display = "none";
        document.querySelectorAll(".rbc-btn-group > button")[5].style.display = "none";
        document.querySelectorAll(".rbc-btn-group > button")[3].style.display = "none";
        document.querySelectorAll(".rbc-btn-group > button")[6].style.display = "none";
        const today = document.querySelectorAll(".rbc-btn-group > button")[0]
        document.querySelectorAll(".rbc-btn-group > button")[1].style.outline = "none"
        document.querySelectorAll(".rbc-btn-group > button")[2].style.outline = "none"

        today.style.position = "absolute"
        today.style.left = "67%"
        today.style.top = "7px"
        today.style.borderRadius = "50%"
        today.style.width = "48px"
        today.style.height = "48px"
        today.style.textAlign = "center"
        today.style.padding = "0px"
        today.style.border = "2px solid black"
        today.style.color = "gray"
        today.style.zIndex = "3"
        today.style.outline = "none"

        const label = document.querySelector(".rbc-toolbar-label").textContent.split(' ');
        let monthNumber = "";
        switch (label[0].toLowerCase()) {
            case "january":
                monthNumber = "1"
                break;
            case "februry":
                monthNumber = "2"
                break;

            case "march":
                monthNumber = "3"
                break;

            case "april":
                monthNumber = "4"
                break;

            case "may":
                monthNumber = "5"
                break;

            case "june":
                monthNumber = "6"
                break;

            case "july":
                monthNumber = "7"
                break;

            case "august":
                monthNumber = "8"
                break;

            case "september":
                monthNumber = "9"
                break;

            case "october":
                monthNumber = "10"
                break;

            case "november":
                monthNumber = "11"
                break;

            case "december":
                monthNumber = "12"
                break;



            default:
                break;
        }
        // document.querySelector(".rbc-toolbar-label").style.display = "none";

        document.querySelector(".rbc-btn-group").style.width = "100%"
        document.querySelector(".rbc-btn-group").style.position = "relative"
        const Container = document.createElement('div')
        Month = document.createElement('div')
        Year = document.createElement('div')
        Container.style.display = "flex"
        Container.style.flexDirection = "column"
        Month.innerText = monthNumber
        Month.style.width = "100%"
        Month.style.textAlign = "center"
        Month.style.fontSize = "27px"
        Month.style.position = "relative"
        Month.style.top = "5px"
        Year.innerText = label[1]
        Year.style.width = "100%"
        Year.style.fontWeight = "200"
        Year.style.textAlign = "center"
        Year.style.position = "relative"
        Year.style.bottom = "5px"
        // document.querySelector(".rbc-toolbar").appendChild(Container)
        // Container.appendChild(Month)
        // Container.appendChild(Year)
        document.querySelectorAll(".rbc-btn-group > button")[1].style.position = "absolute"
        document.querySelectorAll(".rbc-btn-group > button")[1].style.left = "0"
        document.querySelectorAll(".rbc-btn-group > button")[1].style.top = "7px"
        document.querySelectorAll(".rbc-btn-group > button")[1].style.border = "0"
        document.querySelectorAll(".rbc-btn-group > button")[1].style.fontSize = "25px"
        document.querySelectorAll(".rbc-btn-group > button")[1].style.width = "100px"
        document.querySelectorAll(".rbc-btn-group > button")[1].style.textAlign = "start"
        document.querySelectorAll(".rbc-btn-group > button")[2].style.position = "absolute"
        document.querySelectorAll(".rbc-btn-group > button")[2].style.right = "0"
        document.querySelectorAll(".rbc-btn-group > button")[2].style.top = "7px"
        document.querySelectorAll(".rbc-btn-group > button")[2].style.border = "0"
        document.querySelectorAll(".rbc-btn-group > button")[2].style.fontSize = "25px"
        document.querySelectorAll(".rbc-btn-group > button")[2].style.width = "100px"
        document.querySelectorAll(".rbc-btn-group > button")[2].style.textAlign = "end"





        // document.querySelector(".rbc-btn-group").style.width = "100%"
        // document.querySelector(".rbc-btn-group").style.display = "flex"
        // document.querySelector(".rbc-btn-group").style.justifyContent = "center"
        // document.querySelectorAll(".rbc-btn-group > button")[5].style.display = "none"


        // document.addEventListener('mousedown', this.handleClickOutside);
        // document.querySelector(".rbc-toolbar-label").style.width = "100%"

        // document.querySelectorAll(".rbc-month-header > .rbc-header > span")[0].textContent = "일"
        // document.querySelectorAll(".rbc-month-header > .rbc-header > span")[1].textContent = "월"
        // document.querySelectorAll(".rbc-month-header > .rbc-header > span")[2].textContent = "화"
        // document.querySelectorAll(".rbc-month-header > .rbc-header > span")[3].textContent = "수"
        // document.querySelectorAll(".rbc-month-header > .rbc-header > span")[4].textContent = "목"
        // document.querySelectorAll(".rbc-month-header > .rbc-header > span")[5].textContent = "금"
        // document.querySelectorAll(".rbc-month-header > .rbc-header > span")[6].textContent = "토"



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
        const { onEventSelected, outsideOfDetailViewClicked, setWrapperRef, eventPropGetter, onNavigation } = this;
        const { events, detailView, event } = this.props;
        return <Presenter onNavigation={onNavigation} eventPropGetter={eventPropGetter} wrapper={setWrapperRef} outsideOfDetailViewClicked={outsideOfDetailViewClicked} event={event} detailView={detailView} events={events} onEventSelected={onEventSelected} />
    }

    onNavigation = () => {
        console.log('on navigation')
        const label = document.querySelector(".rbc-toolbar-label").textContent.split(' ');
        let monthNumber = "";
        switch (label[0].toLowerCase()) {
            case "january":
                monthNumber = "1"
                break;
            case "februry":
                monthNumber = "2"
                break;

            case "march":
                monthNumber = "3"
                break;

            case "april":
                monthNumber = "4"
                break;

            case "may":
                monthNumber = "5"
                break;

            case "june":
                monthNumber = "6"
                break;

            case "july":
                monthNumber = "7"
                break;

            case "august":
                monthNumber = "8"
                break;

            case "september":
                monthNumber = "9"
                break;

            case "october":
                monthNumber = "10"
                break;

            case "november":
                monthNumber = "11"
                break;

            case "december":
                monthNumber = "12"
                break;



            default:
                break;
        }
        console.log('monthNumber: ', monthNumber)
        console.log('year: ', label[1])
        Month.innerText = monthNumber
        Year.innerText = label[1]
    }

    eventPropGetter = (event, start, end, isSelected) => {
        let style = {}
        if (event.from === 'google') {
            style = {
                background: '#e84393'
            }
        } else if (event.from === 'offday') {
            style = {
                background: '#00b894'
            }
        }
        const result = {
            style
        }

        return result
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