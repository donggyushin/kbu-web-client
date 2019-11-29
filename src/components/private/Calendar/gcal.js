import request from 'superagent';

const API_KEY = 'AIzaSyDIjysGsz_-lByZxTvbIgt0njr-OCxqTcg';
const CALENDAR_ID = '4tjtr23q6bcevh6no8q040eue8@group.calendar.google.com'
const CALENDAR_ID_NATIONAL_OFF_DAY = 'ko.south_korea%23holiday%40group.v.calendar.google.com'
const CALENDAR_ID_2020_KBU_EVENTS = 'pd3f1js8il9eamhp62mjdcv4lg@group.calendar.google.com'

const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`
const url2 = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID_NATIONAL_OFF_DAY}/events?key=${API_KEY}`
const url3 = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID_2020_KBU_EVENTS}/events?key=${API_KEY}`

export function get2020Events(callback) {
    request
        .get(url3)
        .end((err, resp) => {
            if (!err) {
                const events = []
                JSON.parse(resp.text).items.map((event) => {
                    events.push({
                        start: event.start.date || event.start.dateTime,
                        end: event.end.date || event.end.dateTime,
                        title: event.summary,
                        from: 'KBU'
                    })
                })
                callback(events)
            }
        })
}

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
                        from: 'KBU'
                    })
                })
                callback(events)
            }
        })
}