import React from 'react';
import LecturePresenter from './presenter';
import { connect } from 'react-redux'
import { touchable, untouchable } from 'actions/touchableAction'

class LectureContainer extends React.Component {

    constructor(props) {
        super(props)

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    state = {
        detail: false,
        subject: [],
        background: ""
    }

    componentDidMount() {
        this.props.requestLecture()
        document.addEventListener('touchend', this.handleClickOutside);
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
        const { colorMatches, firstClassTime, lastClassTime, touch } = this.props;
        const { detail, subject, background } = this.state;
        const { subjectClicked, closeDetailView } = this;
        return <LecturePresenter wrapper={this.setWrapperRef} touch={touch} closeDetailView={closeDetailView} background={background} subject={subject} subjectClicked={subjectClicked} detail={detail} lastClassTime={lastClassTime} firstClassTime={firstClassTime} colorMatches={colorMatches} error={error} loading={loading} schedule={schedule} />
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
            subject,
            background
        })
    }
}

const mapStateToProps = (state) => {
    return {
        firstClassTime: state.lecture.firstClassTime,
        lastClassTime: state.lecture.lastClassTime,
        touch: state.touchable.touchable
    }
}

export default connect(mapStateToProps, {
    touchable,
    untouchable
})(LectureContainer)