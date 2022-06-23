import React from 'react';
import PropTypes from 'prop-types';
import { ButtonList, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const capitalize = ([first,...rest]) => first.toUpperCase() + rest.join('').toLowerCase();
  return (
    <ButtonList>
      {options.map((item) => (
        <li key={item}>
        <Button name={item} onClick={onLeaveFeedback}>
          {capitalize(item)}
        </Button>
      </li>  
      ))}
    </ButtonList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
