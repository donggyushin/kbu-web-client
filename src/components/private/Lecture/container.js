import React from 'react';
import LecturePresenter from './presenter';
import { connect } from 'react-redux'
import { touchable, untouchable } from 'actions/touchableAction'
import { getchOneLectureDetail, selectLecture } from 'actions/lectureAction'
import { element } from 'prop-types';

class LectureContainer extends React.Component {

    constructor(props) {
        super(props)

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    state = {
        detail: false,
        background: ""
    }

    componentDidMount() {
        this.props.requestLecture()
        document.addEventListener('touchend', this.handleClickOutside);
        console.log(document.getElementsByClassName("height25"))

    }

    componentWillUnmount() {
        document.removeEventListener('touchend', this.handleClickOutside);
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
        const { schedule, loading, error } = this.props.lecture;
        const { colorMatches, firstClassTime, lastClassTime, touch, lectureDetail, selectedLecture } = this.props;
        const { detail, background } = this.state;
        const { subjectClicked, closeDetailView } = this;
        return <LecturePresenter wrapper={this.setWrapperRef} selectedLecture={selectedLecture} lectureDetail={lectureDetail} touch={touch} closeDetailView={closeDetailView} background={background} subjectClicked={subjectClicked} detail={detail} lastClassTime={lastClassTime} firstClassTime={firstClassTime} colorMatches={colorMatches} error={error} loading={loading} schedule={schedule} />
    }

    closeDetailView = () => {

        this.setState({
            detail: false,
            subject: [],
            background: ""
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
        selectedLecture: state.lecture.selectedLecture
    }
}

export default connect(mapStateToProps, {
    touchable,
    untouchable,
    getchOneLectureDetail,
    selectLecture
})(LectureContainer)