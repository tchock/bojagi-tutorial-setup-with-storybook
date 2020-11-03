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
  background-color: #4787ff;
  color: #fff;
  border: 1px solid #6347ff;

  &:hover {
    background-color: #6347ff;
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
