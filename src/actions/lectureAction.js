import { decodeJsonWebToken } from "utils/jsonwebtoken"
import axios from 'axios'
import REST_API_ENDPOINT, { PYTHON_SERVER_ENDPOINT } from "constants/endpoint";
import { FETCH_LECTURE, FETCH_ONE_LECTURE_DATA, SELECT_LECTURE, LECTURE_LOADING } from "./type";
import InfoModal from "components/global/Modal";


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



        return

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






        axios.get(`${PYTHON_SERVER_ENDPOINT}intranet/timetable`, {
            headers: {
                'authorization': localStorage.getItem('intratoken')
            }
        })
            .then(res => res.data)
            .then(data => {
                console.log('data from timetable server: ', data)
                let lecture = {
                    schedule: data.tbody,
                    colorMatches: {}
                }

                for (let index = 0; index < data.tbody.length; index++) {
                    const element = data.tbody[index];

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
                    selected: data.selected,
                    semesters: data.selectable,
                    colorMatches: lecture.colorMatches,
                    arrayFirstSchedule,
                    firstClassTime,
                    lastClassTime
                })

                axios.get(`${PYTHON_SERVER_ENDPOINT}lms/lecture`, {
                    headers: {
                        'authorization': localStorage.getItem('lmstoken')
                    }
                })
                    .then(res => res.data)
                    .then(data => {
                        console.log('lms lecture data: ', data)
                        // 여기서 부터 해야해 강의 코드들을 불러와서 객체 형식으로 강의명: 강의코드 
                        // 패턴으로 저장해주기
                    })
                    .catch(err => {
                        console.error(err)
                        InfoModal('경고', 'LMS 강의 정보를 불러오는데 실패함', () => {
                            window.location.href = '/'
                        })
                    })


            })
            .catch(err => {
                InfoModal('경고', '시간표를 불러오는데 실패하였습니다. ', () => {
                    window.location.href = '/'
                })
            })

        return
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