import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';

import { Section } from './Section';
export class Statistic extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handelIncrement = type => {
    this.setState(prevState => ({ [type]: prevState[type] + 1 }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, type) => acc + type, 0);

  countPositiveFeedbackPercentage = ({ good }) =>
    Math.round((good * 100) / this.countTotalFeedback());

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handelIncrement}
          />
        </Section>
        <Section title="Statistic">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            interest={this.countPositiveFeedbackPercentage({ good })}
          />
        </Section>
      </div>
    );
  }
}
