import { useState } from 'react';

import { Section } from './Section';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';

export const App = () => {
  const initialState = {
    excellent: 0,
    good: 0,
    neutral: 0,
    bad: 0,
    terrible: 0,
  };

  const [options, setOptions] = useState(initialState);

  const onLeaveFeedback = event => {
    const { name } = event.target;
    return setOptions(prevState => ({
      ...prevState,
      [name]: prevState[name] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return Object.values(options).reduce((a, b) => a + b, 0);
  };

  const countFeedbackPercentage = () => {
    const FeedbackPercentage = {};
    Object.entries(options).forEach(option => {
      const name = option[0];
      const result =
        countTotalFeedback() === 0
          ? 0
          : (option[1] / countTotalFeedback()) * 100;
      FeedbackPercentage[name] = result;
    });
    return FeedbackPercentage;
  };

  return (
    <>
      <h1>React-HW04_01 @nickgric</h1>
      <Section title="Please leave (positive) feedback">
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() !== 0 && (
          <Statistics
            options={options}
            total={countTotalFeedback()}
            feedbackPercentage={countFeedbackPercentage()}
          />
        )}
        {countTotalFeedback() === 0 && (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
};
