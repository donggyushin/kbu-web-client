import request from 'superagent';

const API_KEY = 'AIzaSyDIjysGsz_-lByZxTvbIgt0njr-OCxqTcg';
const CALENDAR_ID = '4tjtr23q6bcevh6no8q040eue8@group.calendar.google.com'
const CALENDAR_ID_NATIONAL_OFF_DAY = 'ko.south_korea%23holiday%40group.v.calendar.google.com'

let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`
let url2 = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID_NATIONAL_OFF_DAY}/events?key=${API_KEY}`


export function getNationalOffDay(callback) {
    request
        .get(url2)
        .end((err, resp) => {
            if (!err) {
                const events = []
                JSON.parse(resp.text).items.map((event) => {
                    events.push({
                        start: event.start.date || event.start.dateTime,
                        end: event.end.date || event.end.dateTime,
                        title: event.summary,
                        from: 'offday'
                    })
                })
                callback(events)
            } else {

                callback([])
            }
        })
}

export function getEvents(callback) {
    request
        .get(url)
        .end((err, resp) => {
            if (!err) {
                const events = []
                JSON.parse(resp.text).items.map((event) => {
                    events.push({
                        start: event.start.date || event.start.dateTime,
                        end: event.end.date || event.end.dateTime,
                        title: event.summary,
                        from: 'google'
                    })
                })
                callback(events)
            }
        })
}