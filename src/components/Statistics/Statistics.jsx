import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Heading,
  StatisticsList,
  StatItem,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Wrapper>
      <Heading>Statistics</Heading>
      <StatisticsList>
        <StatItem>Good: {good}</StatItem>
        <StatItem>Neutral: {neutral}</StatItem>
        <StatItem>Bad: {bad}</StatItem>
        <StatItem>Total: {total}</StatItem>
        <StatItem>Positive feedback: {positivePercentage}%</StatItem>
      </StatisticsList>
    </Wrapper>
  );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};
