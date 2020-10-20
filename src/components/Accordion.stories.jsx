import React from 'react';
import { Accordion, AccordionItem } from './Accordion.jsx';
import styled, { css } from 'styled-components';

export default {
  title: 'Accordion',
};

const Wrapper = styled.div`
  width: 80vw;
  max-width: 500px;
`;

export const base = () => (
  <Accordion>
    <AccordionItem title="Title of first item">
      Content of first item<br />
      Content of first item<br />
      Content of first item<br />
      Content of first item<br />
      Content of first item
    </AccordionItem>
    <AccordionItem title="Title of the second item">Content of the second item</AccordionItem>
    <AccordionItem title="Three time's a charm">Lorem Ipsum Dolor</AccordionItem>
  </Accordion>
);

base.decorators = [(story) => <Wrapper>{story()}</Wrapper>];
