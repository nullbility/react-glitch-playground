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

    this.state = {
      corruption: 0,
    };
  }

  setCorruption = (e) => {
    console.log(e);
    this.setState({ corruption: e.target.value });
  }

  render() {
    const { corruption } = this.state;

    return (
      <Wrapper>
        <Text corruption={corruption}>Hello World!</Text>
        <br />
        <input type="range" value={corruption} step=".1" min="0" max="1" onChange={this.setCorruption} />
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
