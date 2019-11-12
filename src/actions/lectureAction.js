import { decodeJsonWebToken } from "utils/jsonwebtoken"
import axios from 'axios'
import REST_API_ENDPOINT from "constants/endpoint";
import { FETCH_LECTURE } from "./type";

let i = 0;
const colorSamples = ['#C2F3C6', '#ff9ff3', '#00b894', '#B9E6F1', '#0984e3', '#F7B32B', '#B33771', '#e66767', '#9c88ff', '#c23616', '#ffbe76', '#ff7979', '#badc58', '#54a0ff', '#6a89cc', '#fad390', '#f8c291', '#FFC6ED', '#81ecec', '#f6e58d']

function convertFromStringToIntegerArray(arrayFirstSchedule) {

    let convertedArray = arrayFirstSchedule.map(stringTime => {

        const hour = stringTime.split(':')[0]
        const minute = stringTime.split(':')[1]
        const total = parseInt(hour) * 60 + parseInt(minute)
        return total
    })


    return convertedArray

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


export const fetchLecture = () => (dispatch, getState) => {
    let arrayFirstSchedule = []
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
                        // 매 요일마다 가장 첫수업의 시간들을 담는다.

                        if (element[0]) {
                            arrayFirstSchedule.push(element[0][2])
                        }


                        for (let index = 0; index < element.length; index++) {
                            const element2 = element[index];

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

                    const integerArray = convertFromStringToIntegerArray(arrayFirstSchedule)
                    const firstClassTime = getSmallestNumber(integerArray)



                    dispatch({
                        type: FETCH_LECTURE,
                        schedule: lecture.schedule,
                        error: "",
                        selected: data.result.selected,
                        semesters: data.result.semesters,
                        colorMatches: lecture.colorMatches,
                        arrayFirstSchedule,
                        firstClassTime
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