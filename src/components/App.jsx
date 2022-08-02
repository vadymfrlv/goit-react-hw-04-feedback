import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

export default class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  onLeaveFeedback = evt => {
    const name = evt.currentTarget.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const { good } = this.state;
    return Math.round((good / totalFeedback) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();

    return (
      <div
        style={{
          marginTop: 150,
          marginRight: 'auto',
          marginLeft: 'auto',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Section title="Please leave a feedback 🥹">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedback === 0 ? (
            <Notification message="There are no feedbacks yet" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}
