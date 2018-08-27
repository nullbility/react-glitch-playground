import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { DotGrid, Panel, Text } from './components';

const Wrapper = styled.div`
  position: relative;
  font-family: Roboto, sans-serif;
  height: 100%;
  background-color: #001;
  color: #aff;

  perspective: 3000px;
  perspective-orign: center center;
`;

const Plane = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/* transform: rotate3d(1, 1, 0, 10deg); */

const gridLayers = (numLayers) => {
  let layers = [];

  for(let i = 0; i < numLayers; i++) {
    const opacity = i === 0 ? .4 : (numLayers - i) / 75;

    layers.push(
      <DotGrid key={i} size="5rem" opacity={opacity} transformation={`translate3d(0px, 0px, ${i * -240}px)`} />
    );
  }

  return layers;
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      corruption: 0.2,
    };
  }

  setCorruption = (e) => {
    this.setState({ corruption: e.target.value });
  }

  render() {
    const { corruption } = this.state;

    return (
      <Wrapper>
        <Plane style={{ textAlign: 'center' }}>
          {gridLayers(1)}
          <Panel>
            <Text corruption={corruption}>82 Subscribers</Text>
            <br />
            <input type="range" value={corruption} step=".1" min="0" max="1" onChange={this.setCorruption} />
          </Panel>
        </Plane>
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
