import React from 'react';
import ChapelPresenter from './presenter';
import { connect } from 'react-redux'


class ChapelContainer extends React.Component {

    state = {
        top: true
    }

    componentDidMount() {
        this.props.requestChapel()
        window.addEventListener('scroll', this.listenToScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }



    render() {
        const { chapels, summary, chapelLength, loading } = this.props.chapel;
        const { buttonToTopClicked } = this;
        const { imageName } = this.props;
        return <ChapelPresenter imageName={imageName} buttonToTopClicked={buttonToTopClicked} loading={loading} chapelLength={chapelLength} summary={summary} chapels={chapels} />
    }

    buttonToTopClicked = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }


    listenToScroll = (event) => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop

        const height =
            document.documentElement.scrollHeight - document.documentElement.clientHeight

        if (this.state.top) {
            if (winScroll > 69) {
                this.setState({
                    top: false
                })
                // document.getElementById('infotextcontainerrow').style.position = "fixed"
                // document.getElementById('infotextcontainerrow').style.top = 0
                // document.getElementById('infotextcontainerrow').style.left = 0
                // document.getElementById('infotextcontainerrow').style.opacity = 0.7
            }

            if (winScroll < 150) {
                document.getElementById('topbutton').style.opacity = 0
            }



        } else {
            if (winScroll < 70) {
                this.setState({
                    top: true
                })
                // document.getElementById('infotextcontainerrow').style.position = "absolute"
                // document.getElementById('infotextcontainerrow').style.opacity = 1
                // document.getElementById('infotextcontainerrow').style.top = '71px'
            }

            if (winScroll > 150) {
                document.getElementById('topbutton').style.opacity = 0.7
            }
        }

    }


}

const mapStateToProps = state => {
    return {
        imageName: state.chapel.cardImage
    }
}

export default connect(mapStateToProps, {})(ChapelContainer);