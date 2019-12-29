import React from 'react'
import Presenter from './presenter'



class Container extends React.Component {

    state = {
        tabBar: false,
        slideTabBarToLeft: false
    }

    constructor(props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        document.addEventListener('touchend', this.handleClickOutside)
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
        document.removeEventListener('touchend', this.handleClickOutside)
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.turnDownTab()
        }
    }

    render() {
        const {
            tabBar,
            slideTabBarToLeft
        } = this.state;
        const {
            turnOnTab
        } = this;
        const {
            isLoggedIn,
            logout,
            location
        } = this.props;
        return <Presenter
            isLoggedIn={isLoggedIn}
            location={location}
            slideTabBarToLeft={slideTabBarToLeft}
            logout={logout}
            isLoggedIn={isLoggedIn}
            refer={this.setWrapperRef}
            turnOnTab={turnOnTab}
            tabBar={tabBar} />
    }

    turnDownTab = () => {

        console.log('turn down tab')

        this.setState({
            slideTabBarToLeft: true
        })

        setTimeout(() => {
            this.setState({
                tabBar: false
            })
        }, 200);

    }

    turnOnTab = () => {
        this.setState({
            tabBar: true,
            slideTabBarToLeft: false
        })

    }
}


export default (Container)