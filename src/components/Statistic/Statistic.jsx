import { Component } from 'react';
import { StatisticButton } from './StatisticButton';
import { StatisticSpan } from './StatisticSpan';
import { StatisticTitle } from './StatisticTitle';

export class Statistic extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodIncrement = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  neutralIncrement = e => {
    // console.log(e.target.value );
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  badIncrement = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  countPositiveFeedbackPercentage = ({ good }) =>
    Math.round((good * 100) / this.countTotalFeedback(this.state));

  render() {
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
        <StatisticTitle title="Please leave feedback" />

        <StatisticButton
          onDadIncrement={this.badIncrement}
          onNeutralIncrement={this.neutralIncrement}
          onGoodIncrement={this.goodIncrement}
        />
        <StatisticTitle title="Statistic" />
        <StatisticSpan
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback(this.state)}
          interest={this.countPositiveFeedbackPercentage(this.state)}
        />
      </div>
    );
  }
}
