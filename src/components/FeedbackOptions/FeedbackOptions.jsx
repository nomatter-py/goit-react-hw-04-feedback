import React from 'react';
import PropTypes from 'prop-types';
import { ButtonList, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <ButtonList>
      <li>
        <Button mood="good" onClick={onLeaveFeedback}>
          Good
        </Button>
      </li>
      <li>
        <Button mood="neutral" onClick={onLeaveFeedback}>
          Neutral
        </Button>
      </li>
      <li>
        <Button mood="bad" onClick={onLeaveFeedback}>
          Bad
        </Button>
      </li>
    </ButtonList>
  );
};

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
};
