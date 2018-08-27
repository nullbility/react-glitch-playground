import React from 'react';
import styled from 'styled-components';

const gridStyles = {
  'square-dots': 'square-dot-matrix',
  // add more grid styles here
};

export const DotGrid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-image: url('./images/${props => gridStyles[props.gridStyle || 'square-dots']}.svg');
  background-size: 5rem;
  background-position: center;

  pointer-events: none;
  z-index: 0;
`;