import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = value => {
    switch (value) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        throw new Error();
    }
  };

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    const totalFeedback = countTotalFeedback();
    return Math.round((good / totalFeedback) * 100);
  }

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
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There are no feedbacks yet" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveFeedbackPercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}
