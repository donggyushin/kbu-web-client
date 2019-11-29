/* global gapi */
import React from 'react'
import styled from 'styled-components'
import Presenter from './presenter'
import { getEvents, getNationalOffDay, get2020Events } from './gcal'
import { connect } from 'react-redux'
import { fetchEvents, selectEvent, turnDownCalendarDetailView } from 'actions/calendarAction'
import themeColor from 'constants/themeColor'

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


    state = {
        touchable: true
    }


    async componentDidMount() {


        document.addEventListener('touchend', this.handleClickOutside);
        console.log('rbc calendar: ', document.querySelector(".rbc-calendar").style.height)
        document.querySelector(".rbc-calendar").style.height = "100px;"

        if (this.props.events.length === 0) {

            getEvents((events) => {


                this.props.fetchEvents(events)

                getNationalOffDay((events) => {

                    this.props.fetchEvents(events)


                    get2020Events(events => {

                        this.props.fetchEvents(events)
                    })

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


        document.querySelectorAll(".rbc-header > span")[0].innerHTML = "일"
        document.querySelectorAll(".rbc-header > span")[1].innerHTML = "월"
        document.querySelectorAll(".rbc-header > span")[2].innerHTML = "화"
        document.querySelectorAll(".rbc-header > span")[3].innerHTML = "수"
        document.querySelectorAll(".rbc-header > span")[4].innerHTML = "목"
        document.querySelectorAll(".rbc-header > span")[5].innerHTML = "금"
        document.querySelectorAll(".rbc-header > span")[6].innerHTML = "토"

        setTimeout(() => {
            this.disableLinks()
        }, 1000);

    }

    componentWillUnmount() {
        document.removeEventListener('touchend', this.handleClickOutside);
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
        return <Presenter refer={this.setWrapperRef} onNavigation={onNavigation} eventPropGetter={eventPropGetter} wrapper={setWrapperRef} outsideOfDetailViewClicked={outsideOfDetailViewClicked} event={event} detailView={detailView} events={events} onEventSelected={onEventSelected} />
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

    disableLinks = () => {
        const cellsContainer = document.querySelectorAll(".rbc-date-cell")
        const cellsToGoToDailySchdule = document.querySelectorAll(".rbc-date-cell > a")
        for (let index = 0; index < cellsToGoToDailySchdule.length; index++) {
            const element = cellsToGoToDailySchdule[index];

            const day = element.innerHTML
            console.log('here!')
            console.log('element: ', element.innerHTML)
            const newHtmlTag = document.createElement('div')
            newHtmlTag.innerHTML = day
            element.style.display = "none"
            console.log('container: ', cellsContainer[index])
            cellsContainer[index].appendChild(newHtmlTag)
        }
    }

    eventPropGetter = (event, start, end, isSelected) => {
        let style = {}
        if (event.from === 'KBU') {
            style = {
                background: themeColor.theme,
            }
        } else if (event.from === 'offday') {
            style = {

                background: '#e84393'
            }
        }
        const result = {
            style
        }

        return result
    }


    onEventSelected = (event, e) => {
        const { selectEvent } = this.props;

        if (this.state.touchable) {
            selectEvent(event)
            this.setState({
                touchable: false
            })
        }


    }

    outsideOfDetailViewClicked = () => {


        console.log('asd')

        this.props.turnDownCalendarDetailView()
        setTimeout(() => {
            this.setState({
                touchable: true
            })
        }, 100);
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