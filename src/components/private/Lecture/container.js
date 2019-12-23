import React from 'react';
import LecturePresenter from './presenter';
import { connect } from 'react-redux'
import { touchable, untouchable } from 'actions/touchableAction'
import { getchOneLectureDetail, selectLecture } from 'actions/lectureAction'


let repeat = null

class LectureContainer extends React.Component {

    constructor(props) {
        super(props)

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    state = {
        detail: false,
        background: "",
        list: false,
        now: new Date(),
        startArray: [],  // 오늘 수업 시간의 시작시간들을 담고있는 리스트
        endArray: [],     // 오늘 수업 시간의 끝나는 시간들을 담고있는 리스트,
        leftTimeToNextClass: 0,
        clockMessage: "",
        date: new Date(),
        currentLecture: {
            name: "",
            background: ""
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000);
        this.props.requestLecture()
        document.addEventListener('touchend', this.handleClickOutside);
        if (this.props.lecture.schedule.length !== 0) {
            const date = new Date();
            const week = new Array('일', '월', '화', '수', '목', '금', '토');
            const today = week[date.getDay()]
            let todaySchedule = [];

            switch (today) {
                case '월':
                    todaySchedule = this.props.lecture.schedule[0]
                    break;
                case '화':
                    todaySchedule = this.props.lecture.schedule[1]
                    break;
                case '수':
                    todaySchedule = this.props.lecture.schedule[2]
                    break;
                case '목':
                    todaySchedule = this.props.lecture.schedule[3]
                    break;
                case '금':
                    todaySchedule = this.props.lecture.schedule[4]
                    break;
                default:
                    break;
            }



            let startArray = []
            let endArray = []

            if (todaySchedule.length !== 0) {
                todaySchedule.map(schedule => {
                    startArray.push(schedule[2])
                    endArray.push(schedule[3])
                })
                this.setState({
                    startArray,
                    endArray
                })
                this.getLeftTimeToNextClass(startArray, endArray, todaySchedule)
                repeat = setInterval(() => {
                    this.getLeftTimeToNextClass(startArray, endArray, todaySchedule)
                }, 30000);
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            // 오늘이 무슨 요일인지 맞추고, 오늘 수업표를 가져온다. 
            const date = new Date();
            const week = new Array('일', '월', '화', '수', '목', '금', '토');
            const today = week[date.getDay()]
            let todaySchedule = [];

            switch (today) {
                case '월':
                    todaySchedule = nextProps.lecture.schedule[0]
                    break;
                case '화':
                    todaySchedule = nextProps.lecture.schedule[1]
                    break;
                case '수':
                    todaySchedule = nextProps.lecture.schedule[2]
                    break;
                case '목':
                    todaySchedule = nextProps.lecture.schedule[3]
                    break;
                case '금':
                    todaySchedule = nextProps.lecture.schedule[4]
                    break;
                default:
                    break;
            }



            let startArray = []
            let endArray = []

            if (todaySchedule.length !== 0) {
                todaySchedule.map(schedule => {
                    startArray.push(schedule[2])
                    endArray.push(schedule[3])
                })
                this.setState({
                    startArray,
                    endArray
                })
                this.getLeftTimeToNextClass(startArray, endArray, todaySchedule)
                setTimeout(() => {
                    this.getLeftTimeToNextClass(startArray, endArray, todaySchedule)
                }, 1000);
                repeat = setInterval(() => {
                    this.getLeftTimeToNextClass(startArray, endArray, todaySchedule)
                }, 60000);
            }
        }
    }

    componentWillUnmount() {
        document.removeEventListener('touchend', this.handleClickOutside);
        clearInterval(repeat)
    }

    /**
 * Set the wrapper ref
 */
    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    /**
     * Alert if clicked on outside of element
     */
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.closeDetailView()
        }
    }


    render() {
        // const { schedule, loading } = this.state;
        const {
            schedule,
            loading,
            error
        } = this.props.lecture;
        const {
            colorMatches,
            firstClassTime,
            lastClassTime,
            touch,
            lectureDetail,
            selectedLecture
        } = this.props;
        const {
            detail,
            background,
            list,
            clockMessage,
            date,
            currentLecture
        } = this.state;
        const {
            subjectClicked,
            closeDetailView,
            showDataList
        } = this;
        return <LecturePresenter
            currentLecture={currentLecture}
            clockMessage={clockMessage}
            showDataList={showDataList}
            list={list}
            wrapper={this.setWrapperRef}
            selectedLecture={selectedLecture}
            lectureDetail={lectureDetail}
            touch={touch}
            closeDetailView={closeDetailView}
            background={background}
            subjectClicked={subjectClicked}
            detail={detail}
            lastClassTime={lastClassTime}
            firstClassTime={firstClassTime}
            colorMatches={colorMatches}
            error={error}
            loading={loading}
            schedule={schedule}
            date={date}
        />
    }

    getLeftTimeToNextClass = (startArray, endArray, todayLectures) => {

        let n = 0; // 몇번째 수업들 사이에 끼었는지 알아야함




        // 현재 시각을 구한다. 
        const now = new Date().getHours().toString() + ":" + new Date().getMinutes()
        const convertedNow = this.timeConverter(now)
        // 가장 첫 수업 시작보다 이른 시간이면, 첫 수업 시작과의 차이를 알려준다. 

        if (convertedNow < this.timeConverter(startArray[0])) {
            let leftHour = parseInt(startArray[0].split(':')[0]) - parseInt(now.split(":")[0])
            let leftMinute = parseInt(startArray[0].split(':')[1]) - parseInt(now.split(":")[1])
            if (leftHour < 10) {
                leftHour = '0' + leftHour
            }
            if (leftMinute < 10) {
                leftMinute = '0' + leftMinute
            }
            this.setState({
                clockMessage: `다음 수업 까지 ${leftHour}:${leftMinute}남음`
            })
        } else if (convertedNow > this.timeConverter(endArray[endArray.length - 1])) {
            // 가장 마지막 수업 끝 시간보다 늦은 시간이면, 오늘 수업이 없다고 알려준다. 
            this.setState({
                clockMessage: "오늘 수업 끝!"
            })
        } else {
            // 수업이 하나밖에 없을때에 여기까지 왔다면 무조건 첫 수업시간이다.

            if (startArray.length === 1) {

                const background = this.props.colorMatches[todayLectures[0][0]]

                this.setState({
                    clockMessage: "수업중",
                    currentLecture: {
                        name: todayLectures[0][0],
                        background
                    }
                })
            } else {


                // 수업 시작 시간을 기준으로 현재 몇번째 수업 사이에 껴있는지 확인한다. 
                for (let i = 0; i < startArray.length - 1; i++) {

                    const convertedI1thClassStartTime = this.timeConverter(startArray[i])
                    const convertedI2thClassStartTime = this.timeConverter(startArray[i + 1])
                    if (convertedI1thClassStartTime < convertedNow && convertedNow < convertedI2thClassStartTime) {
                        n = i;
                    }
                }

                // 만약에 n 이  0 일 경우는 마지막 수업중일 경우밖에 없다. 
                if (n === 0) {


                    const background = this.props.colorMatches[todayLectures[todayLectures.length - 1][0]]

                    this.setState({
                        clockMessage: "수업중",
                        currentLecture: {
                            name: todayLectures[todayLectures.length - 1][0],
                            background
                        }
                    })
                    return
                }

                // 예를 들어서 n 번째 수업시간보다는 늦으면서 n+1 번째 수업 시간보다 낮다면, 
                // n 번째 수업 사이에 껴있다는 소리이다. (n은 1부터 오늘 수업 갯수의 - 1까지)
                // n 번째 수업 끝 시간보다 현재 시간이 이르다면 수업중이라는 메시지를, 
                if (convertedNow < this.timeConverter(endArray[n])) {
                    const background = this.props.colorMatches[todayLectures[n][0]]
                    this.setState({
                        clockMessage: "수업중",
                        currentLecture: {
                            name: todayLectures[n][0],
                            background
                        }
                    })
                } else {
                    // n 번째 수업 끝 시간보다 현재 시간이 이후라면 n+1 번째 수업 시작 시간과의 차를 알려준다. 
                    const diff = this.timeConverter(startArray[n + 1]) - convertedNow
                    let leftHour = parseInt(diff / 60)
                    let leftMinute = parseInt(diff % 60).toString()
                    if (leftHour < 10) {
                        leftHour = '0' + leftHour
                    }
                    if (leftMinute < 10) {
                        leftMinute = '0' + leftMinute
                    }
                    leftHour = leftHour.toString()
                    this.setState({
                        clockMessage: `다음 수업까지 ${leftHour}:${leftMinute}남음`
                    })
                }
            }
        }

    }

    timeConverter = (time) => {
        const hour = parseInt(time.split(':')[0])
        const minute = parseInt(time.split(':')[1])
        return 60 * hour + minute
    }

    showDataList = () => {
        this.setState({
            list: true
        })
    }

    closeDetailView = () => {

        this.setState({
            detail: false,
            subject: [],
            background: "",
            list: false
        })
        setTimeout(() => {
            this.props.touchable()
        }, 300);

    }

    subjectClicked = (subject, background) => {
        this.props.untouchable()
        this.setState({
            detail: true,
            background
        })
        const lectureName = subject[0]
        const location = subject[1]
        const start = subject[2]
        const end = subject[3]
        const code = subject[4]
        this.props.getchOneLectureDetail(lectureName)
        this.props.selectLecture(lectureName, location, start, end, code)
    }
}

const mapStateToProps = (state) => {
    return {
        firstClassTime: state.lecture.firstClassTime,
        lastClassTime: state.lecture.lastClassTime,
        touch: state.touchable.touchable,
        lectureDetail: state.lecture.detail,
        selectedLecture: state.lecture.selectedLecture,
        colorMatches: state.lecture.colorMatches
    }
}

export default connect(mapStateToProps, {
    touchable,
    untouchable,
    getchOneLectureDetail,
    selectLecture
})(LectureContainer)