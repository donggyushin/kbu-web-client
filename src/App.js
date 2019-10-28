import React from 'react';
import styled from 'styled-components';
import PrivateComponent from 'components/PrivateComponent';
import PublicComponent from 'components/PublicComponent';

const Container = styled.div``

class App extends React.Component {
  state = {
    isLoggedIn: localStorage.getItem('token') ? true : false
  }

  componentWillUnmount() {
    window.localStorage.removeItem('user')
  }


  render() {
    const { isLoggedIn } = this.state;
    const { logout } = this;
    return (

      <Container>
        {isLoggedIn ? <PrivateComponent logout={logout} /> : <PublicComponent />}
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

export default App;
