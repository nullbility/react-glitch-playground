import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { Text } from './components';

const Wrapper = styled.div`
  position: relative;
  font-family: Roboto, sans-serif;
  height: 100%;
  background-color: #001;
`;

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <Text>Hello World!</Text>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
  }
};

const mapDispatchToProps = dispatch => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
