import React from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import { Button } from './components/Button.jsx';
import { Slider } from './components/Slider.jsx';

const GlobalStyle = createGlobalStyle(css`
  html, body {
    margin: 0;
    padding: 8px;
  }
`);

const CompWrapper = styled.div`
  margin: 12px;
`;

export function App() {
  return (
    <>
      <GlobalStyle />
      <CompWrapper>
        <Button>Hello</Button>
      </CompWrapper>
      <CompWrapper>
        <Button variant="outline">Hello</Button>
      </CompWrapper>
      <CompWrapper>
        <Button variant="dotted">Hello</Button>
      </CompWrapper>
      <CompWrapper>
        <Slider />
      </CompWrapper>
      
    </>
  );
}
