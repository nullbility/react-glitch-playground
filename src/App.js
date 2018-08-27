import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { setDeviceRotation } from './actions';

import { DotGrid, Panel, Text } from './components';

const Wrapper = styled.div`
  position: relative;
  font-family: Roboto, sans-serif;
  height: 100%;
  width: 100%;
  background-color: #001;
  color: #aff;
  overflow: hidden;

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
  transform-style: preserve-3d;
`;

/* transform: rotate3d(1, 1, 0, 10deg); */

const gridLayers = (numLayers) => {
  let layers = [];

  for(let i = 0; i < numLayers; i++) {
    const opacity = i === 0 ? .4 : (numLayers - i) / 50;

    layers.push(
      <DotGrid key={i} size="5rem" opacity={opacity} transformation={`translate3d(0px, 0px, ${i * -24}px)`} />
    );
  }

  return layers;
}

class App extends Component {
  constructor(props) {
    super(props);

    window.addEventListener("deviceorientation", function(e) {
      // remember to use vendor-prefixed transform property
      props.setDeviceRotation(
        "rotateZ(" + ( e.alpha - 270 ) + "deg) " +
        "rotateX(" + e.beta + "deg) " +
        "rotateY(" + ( -e.gamma ) + "deg)"
      );
    });

    this.state = {
      corruption: 0.1,
    };
  }

  setCorruption = (e) => {
    this.setState({ corruption: e.target.value });
  }

  render() {
    const { corruption } = this.state;
    const { deviceRotation } = this.props;

    return (
      <Wrapper>
        <Plane style={{ textAlign: 'center', transform: deviceRotation }}>
          {gridLayers(7)}
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
    deviceRotation: state.deviceRotation,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setDeviceRotation: (r) => dispatch(setDeviceRotation(r)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
