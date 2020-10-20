import React from 'react';
import { Slider } from './Slider.jsx';
import styled, { css } from 'styled-components';

export default {
  title: 'Slider',
};

const Wrapper = styled.div`
  width: 80vw;
  max-width: 500px;
`;

export const base = () => <Slider />;

base.decorators = [(story) => <Wrapper>{story()}</Wrapper>];
