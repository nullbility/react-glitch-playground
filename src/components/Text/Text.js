import React from 'react';
import styled from 'styled-components';

import map from 'lodash/map';
import split from 'lodash/split';

const TextContainer = styled.span`
  color: #aff;
  padding: .5rem 1rem;
  margin: 1rem;
  border: 1px solid #aff;
  border-left-width: 0px;
  border-right-width: 0px;
  display: inline-block;
`;

const Char = styled.span`
  font-family: ${props => props.encoded ? 'inherit' : 'Aurebesh'}
`;

export const Text = ({
  children
}) => (
  <TextContainer>
    {map(split(children, ''), (char, i) => (
      <Char key={children + 'char' + i} encoded={Math.random() > .5 ? true : false}>{char}</Char>
    ))}
  </TextContainer>
);
