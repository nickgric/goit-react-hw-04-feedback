import React from 'react';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <>{message && <section>{message}</section>}</>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
