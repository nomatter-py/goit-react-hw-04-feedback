import React from 'react';
import PropTypes from 'prop-types';
import {  } from './Notification.styled';

export const Notification = ({ message }) => {
  return (<div>{message}</div>);
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
