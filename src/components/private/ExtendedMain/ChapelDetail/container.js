import React from 'react'
import Presenter from './presenter'
import { connect } from 'react-redux'
import ProgressBar from 'progressbar.js'
import { setChapelImage } from 'actions/chapelAction'

var bar;

class Container extends React.Component {

    state = {
        percentage: 0,
        image: ""
    }

    componentDidMount() {

        const { sure, duty } = this.props;
        bar = new ProgressBar.Circle(document.getElementById('container'), {
            strokeWidth: 6,
            easing: 'easeInOut',
            duration: 1400,
            color: '#74b9ff',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: null
        });

        let percentage = parseInt(sure) / parseInt(duty)
        percentage = parseFloat(percentage.toPrecision(2))
        console.log('percentage: ', typeof (percentage))
        this.setState({
            percentage
        })
        // Number from 0.0 to 1.0
        bar.animate(percentage * 0.8);
        if (percentage <= 0.3) {
            // image 1
            this.setState({
                image: "flower1.png"
            })
            this.props.setChapelImage("flower1.png")
        } else if (percentage <= 0.6) {
            // image 2
            this.setState({
                image: "flower2.png"
            })
            this.props.setChapelImage("flower2.png")
        } else if (percentage === 1.0) {
            // image 4
            this.setState({
                image: "flower4.png"
            })
            this.props.setChapelImage("flower4.png")
        } else {
            // image 3
            this.setState({
                image: "flower3.png"
            })
            this.props.setChapelImage("flower3.png")
        }



    }

    componentWillReceiveProps(nextProps) {
        const { sure, duty } = nextProps
        if (sure !== this.props.sure && duty !== this.props.duty) {
            let percentage = parseInt(sure) / parseInt(duty)
            percentage = parseFloat(percentage.toPrecision(2))
            this.setState({
                percentage
            })
            // Number from 0.0 to 1.0
            console.log('percentage: ', typeof (percentage))
            bar.animate(percentage * 0.8);
            if (percentage <= 0.3) {
                // image 1
                this.setState({
                    image: "flower1.png"
                })
                this.props.setChapelImage("flower1.png")
            } else if (percentage <= 0.6) {
                // image 2
                this.setState({
                    image: "flower2.png"
                })
                this.props.setChapelImage("flower2.png")
            } else if (percentage === 1.0) {
                // image 4
                this.setState({
                    image: "flower4.png"
                })
                this.props.setChapelImage("flower4.png")
            } else {
                // image 3
                this.setState({
                    image: "flower3.png"
                })
                this.props.setChapelImage("flower3.png")
            }
        }
    }

    render() {
        const { percentage, image } = this.state;
        const { duty, sure, user } = this.props;
        return <Presenter user={user} image={image} percentage={percentage} duty={duty} sure={sure} />
    }
}

const mapStateToProps = state => {
    const { duty, sure } = state.chapel.summary;
    return {
        duty,
        sure
    }
}

export default connect(mapStateToProps, {
    setChapelImage
})(Container);