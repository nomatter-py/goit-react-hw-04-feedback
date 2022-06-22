import React from 'react';
import { SectionWrapper } from './Section.styled';

export const Section = props => {
  return <SectionWrapper>{props.children}</SectionWrapper>;
};
