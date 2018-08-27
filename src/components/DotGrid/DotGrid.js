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

  pointer-events: none;
  z-index: 0;

  background-position: center;

  background-size: ${props => props.size || '2rem'};
  background-image: url('./images/${props => gridStyles[props.gridStyle || 'square-dots']}.svg');
  opacity: ${props => props.opacity || 0.3};

  transform: ${props => props.transformation || 'translate3d(0px, 0px, 0px)'};
`;