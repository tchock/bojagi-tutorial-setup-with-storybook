import React from 'react';
import styled, { css } from 'styled-components';

const outlinedStyle = css`
color: #ed2186;
background-color: transparent;
&:hover {
  background-color: #af1e6630;
}
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 8px 16px;
  font-size: 1em;
  background-color: #ed2186;
  color: #fff;
  border: 1px solid #af1e66;
  
  &:hover {
    background-color: #af1e66;
  }

  ${props => props.variant === 'outline' && outlinedStyle}
  ${props => props.variant === 'dotted' && css`
    ${outlinedStyle}
    border-style: dotted;
  `}

  outline: 0;
  border-radius: 6px;
  transition: background-color 0.5s;

  
`;
