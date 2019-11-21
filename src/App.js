import React from 'react';
import styled from 'styled-components';
import PrivateComponent from 'components/PrivateComponent';
import { connect } from 'react-redux'
import { logoutUser } from 'actions/userAction'

const Container = styled.div``

class App extends React.Component {
  state = {
    isLoggedIn: localStorage.getItem('token') ? true : false
  }

  componentWillUnmount() {
    window.localStorage.removeItem('user')
  }


  render() {
    const { logoutUser, isLoggedIn } = this.props;

    return (

      <Container >
        <PrivateComponent isLoggedIn={isLoggedIn} logout={logoutUser} />
      </Container>

    );
  }

  logout = () => {
    this.setState({
      isLoggedIn: false
    })
    window.localStorage.removeItem('token')
    window.location.href = "/"
  }



}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn
  }
}

export default connect(mapStateToProps, {
  logoutUser
})(App);
