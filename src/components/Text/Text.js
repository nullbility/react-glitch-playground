import React from 'react';
import styled from 'styled-components';

import map from 'lodash/map';
import split from 'lodash/split';
import sample from 'lodash/sample';

const TextContainer = styled.span`
  display: inline-block;

  line-height: 1;
  font-feature-settings: "hwid" 1;

  transform: translateZ(10px);
`;

const katakana = [
  'あ','い','う','え','お',
  'か','き','く','け','こ',
  'さ','し','す','せ','そ',
  'た','ち','つ','て','と',
  'な','に','ぬ','ね','の',
  'は','ひ','ふ','へ','ほ',
  'ま','み','む','め','も',
  'や','ゆ','よ',
  'ら','り','る','れ','ろ',
  'わ','を',
  'ん',
  'ア','イ','ウ','エ','オ',
  'カ','キ','ク','ケ','コ',
  'サ','シ','ス','セ','ソ',
  'タ','チ','ツ','テ','ト',
  'ナ','ニ','ヌ','ネ','ノ',
  'ハ','ヒ','フ','ヘ','ホ',
  'マ','ミ','ム','メ','モ',
  'ヤ','ユ','ヨ',
  'ラ','リ','ル','レ','ロ','ワ','ヲ','ン',
];

const Char = styled.span`
  font-family: ${props => props.encoded ? 'inherit' : 'Source Han Serif'};
`;

export const Text = ({
  corruption = 0,
  children,
}) => (
  <TextContainer>
    {map(split(children, ''), (char, i) => {
      return char === ' '
        ? <Char> </Char>
        : (
          <Char key={children + 'char' + i} encoded>
            {Math.random() > corruption ? char : sample(katakana)}
          </Char>
        );
    })}
  </TextContainer>
);
