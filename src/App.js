import React from 'react';
import styled from 'styled-components';
import PrivateComponent from 'components/PrivateComponent';
import PublicComponent from 'components/PublicComponent';

const Container = styled.div``

class App extends React.Component {
  state = {
    isLoggedIn: localStorage.getItem('token') ? true : false
  }
  render() {
    const { isLoggedIn } = this.state;
    return (
      <Container>
        {isLoggedIn ? <PrivateComponent /> : <PublicComponent />}
      </Container>
    );
  }
}

export default App;
