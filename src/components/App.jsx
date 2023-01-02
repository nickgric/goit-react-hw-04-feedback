import React, { Component } from 'react';

import { Section } from './Section';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';

export class App extends Component {
  state = {
    excellent: 0,
    good: 0,
    neutral: 0,
    bad: 0,
    terrible: 0,
  };

  onLeaveFeedback = event => {
    const { name } = event.target;
    return this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((a, b) => a + b, 0);
  };

  countFeedbackPercentage = () => {
    const FeedbackPercentage = {};
    Object.entries(this.state).forEach(option => {
      const name = option[0];
      const result =
        this.countTotalFeedback() === 0
          ? 0
          : (option[1] / this.countTotalFeedback()) * 100;
      FeedbackPercentage[name] = result;
    });
    return FeedbackPercentage;
  };

  render() {
    const {
      onLeaveFeedback,
      countTotalFeedback,
      countFeedbackPercentage,
      state,
    } = this;

    return (
      <>
        <h1>React-HW02_01 @nickgric</h1>
        <Section title="Please leave (positive) feedback">
          <FeedbackOptions
            options={Object.keys(state)}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() !== 0 && (
            <Statistics
              options={state}
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
  }
}
