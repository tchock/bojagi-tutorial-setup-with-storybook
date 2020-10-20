import React from 'react';
import styled, { css } from 'styled-components';

const AccordionItemWrapper = styled.div`
  overflow: hidden;
  transition: height 0.1s linear;
  height: ${props => props.open ? props.fullHeight : 0}px;
  line-height: 1.3em;
`;

const AccordionItemInnerWrapper = styled.div`
  border: 1px solid #aaa;
  border-top: 0;
  padding: 8px;
  font-family: sans-serif;
`;

const AccordionItemTitle = styled.h3`
  cursor: pointer;
  background-color: #ccc;
  border: 1px solid #aaa;
  padding: 8px;
  margin: -1px 0 0;
  font-family: sans-serif;
`;

export function Accordion({children}) {
  const [indexOpen, setIndexOpen] = React.useState(null);

  return <>
    {children.map((child, i) => (
      <>
        <AccordionItemTitle onClick={() => setIndexOpen(i)}>{child.props.title}</AccordionItemTitle>
        {React.cloneElement(child, { open: indexOpen === i })}
      </>
    ))}
  </>
}

export function AccordionItem({title, open, children}) {
  const wrapperRef = React.useRef(null);
  const [fullHeight, setFullHeight] = React.useState(false);

  React.useEffect(() => {
    if (wrapperRef.current && wrapperRef.current.scrollHeight > 0) {
      setFullHeight(wrapperRef.current.scrollHeight);
    }
  }, [wrapperRef.current]);
  
  return (
    <AccordionItemWrapper
      open={fullHeight === null || open}
      fullHeight={fullHeight}
      ref={wrapperRef}
    >
      <AccordionItemInnerWrapper>
        {children}
      </AccordionItemInnerWrapper>
    </AccordionItemWrapper>
  )
}
