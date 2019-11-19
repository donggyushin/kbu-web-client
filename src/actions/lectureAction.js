import { decodeJsonWebToken } from "utils/jsonwebtoken"
import axios from 'axios'
import REST_API_ENDPOINT from "constants/endpoint";
import { FETCH_LECTURE, FETCH_ONE_LECTURE_DATA, SELECT_LECTURE, LECTURE_LOADING } from "./type";


let i = 0;
const colorSamples = ['#2980b9', '#ff9ff3', '#00b894', '#d35400', '#0984e3', '#F7B32B', '#B33771', '#e66767', '#9c88ff', '#c23616', '#ffbe76', '#ff7979', '#badc58', '#54a0ff', '#6a89cc', '#fad390', '#f8c291', '#FFC6ED', '#81ecec', '#f6e58d']

function convertFromStringToIntegerArray(arrayFirstSchedule) {

    let convertedArray = arrayFirstSchedule.map(stringTime => {

        const hour = stringTime.split(':')[0]
        const minute = stringTime.split(':')[1]
        const total = parseInt(hour) * 60 + parseInt(minute)
        return total
    })


    return convertedArray

}

function getLargestNumber(array) {
    let maximum = array[0]
    array.map(element => {
        if (maximum < element) {
            maximum = element
        }
    })
    return maximum
}

function getSmallestNumber(array) {
    let minimum = array[0]
    array.map(element => {
        if (minimum > element) {
            minimum = element
        }
    })
    return minimum
}

export const selectLecture = (name, location, start, end) => (dispatch, getState) => {
    dispatch({
        type: SELECT_LECTURE,
        name,
        location,
        start,
        end
    })
}

export const getchOneLectureDetail = (lectureName) => (dispatch, getState) => {
    const { lecture } = getState()
    const selectedLecture = lecture.selectedLecture

    if (lectureName === selectedLecture.name) {

    } else {
        dispatch({
            type: LECTURE_LOADING
        })
        axios.post(REST_API_ENDPOINT + `lecture/${lectureName}`, {
            token: window.localStorage.getItem("token")
        })
            .then(res => res.data)
            .then(data => {

                if (data.is_ok) {
                    dispatch({
                        type: FETCH_ONE_LECTURE_DATA,
                        etcAbsence: data.result.summary.기타,
                        normalAbsence: data.result.summary.일반결석,
                        late: data.result.summary.지각,
                        attendance: data.result.summary.출석,
                        datas: data.result.table_body,
                        head: data.result.table_head,
                        error: ""
                    })

                } else {
                    dispatch({
                        type: FETCH_ONE_LECTURE_DATA,
                        etcAbsence: null,
                        normalAbsence: null,
                        late: null,
                        attendance: null,
                        datas: null,
                        head: null,
                        error: "LMS 로부터 데이터를 가져오는데 실패하였습니다 ㅠㅠ",
                    })
                }
            })
            .catch(err => console.error(err))
    }


}

export const fetchLecture = () => (dispatch, getState) => {
    let arrayFirstSchedule = []
    let arrayLastSchedule = []
    const { lecture } = getState()
    if (lecture.schedule.length === 0) {
        const decoded = decodeJsonWebToken(window.localStorage.getItem("token"));
        axios.post(REST_API_ENDPOINT + 'lecture', {
            id: decoded.id,
            pw: decoded.password
        })
            .then(res => res.data)
            .then(data => {

                if (data.is_ok) {
                    let lecture = {
                        schedule: data.result.table_body,
                        colorMatches: {}
                    }
                    for (let index = 0; index < data.result.table_body.length; index++) {
                        const element = data.result.table_body[index];


                        if (element[0]) {
                            // 매 요일마다 가장 첫수업의 시간들을 담는다.
                            arrayFirstSchedule.push(element[0][2])
                            // 매 요일마다 가장 마지막 수업의 시간들을 담는다. 

                            arrayLastSchedule.push(element[element.length - 1][3])
                        }


                        for (let index = 0; index < element.length; index++) {
                            const element2 = element[index];
                            let exist = false

                            Object.keys(lecture.colorMatches).map(key => {

                                if (key === element2[0]) {
                                    exist = true
                                }
                            })

                            if (!exist) {

                                lecture = {
                                    ...lecture,
                                    colorMatches: {
                                        ...lecture.colorMatches,
                                        [element2[0]]: colorSamples[i]
                                    }
                                }
                                i++
                            }
                        }
                    }

                    const integerArray = convertFromStringToIntegerArray(arrayFirstSchedule)
                    const integerArray2 = convertFromStringToIntegerArray(arrayLastSchedule)
                    const firstClassTime = getSmallestNumber(integerArray)
                    const lastClassTime = getLargestNumber(integerArray2)


                    dispatch({
                        type: FETCH_LECTURE,
                        schedule: lecture.schedule,
                        error: "",
                        selected: data.result.selected,
                        semesters: data.result.semesters,
                        colorMatches: lecture.colorMatches,
                        arrayFirstSchedule,
                        firstClassTime,
                        lastClassTime
                    })



                } else {

                    dispatch({
                        type: FETCH_LECTURE,
                        schedule: [],
                        error: "수업시간을 불러오는데 실패하였습니다. ",
                        selected: "",
                        semesters: [],
                        colorMatches: {}
                    })

                }
            })
    }
}