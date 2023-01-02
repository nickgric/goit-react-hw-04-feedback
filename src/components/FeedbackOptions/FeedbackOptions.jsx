import React from 'react';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      <ul>
        {options.map(option => (
          <li key={option}>
            <button onClick={onLeaveFeedback} name={option}>
              {option[0].toUpperCase() + option.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
