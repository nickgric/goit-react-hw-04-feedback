import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = ({ options, total, feedbackPercentage }) => {
  return (
    <>
      <ul>
        {Object.entries(options).map(option => (
          <li name={option[0]} key={option[0]}>
            {option[0][0].toUpperCase() + option[0].slice(1)}: {option[1]}
          </li>
        ))}
      </ul>
      <p>
        <b>Total:</b> {total}
      </p>
      <h3>Percentage:</h3>
      <ul>
        {Object.entries(feedbackPercentage).map(option => (
          <li name={option[0]} key={option[0]}>
            {option[0][0].toUpperCase() + option[0].slice(1)}:{' '}
            {option[1].toFixed(0)}%
          </li>
        ))}
      </ul>
    </>
  );
};

Statistics.propTypes = {
  options: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  feedbackPercentage: PropTypes.object.isRequired,
};
