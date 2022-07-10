import { useState } from 'react';
import 'normalize.css';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = [`good`, `neutral`, `bad`];

  const setFeedback = evt => {
    const stateName = evt.target.name;

    if (stateName === 'good') setGood(state => state + 1);
    if (stateName === 'neutral') setNeutral(state => state + 1);
    if (stateName === 'bad') setBad(state => state + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    let total = countTotalFeedback();
    return total === 0 ? 0 : parseInt((good * 100) / total);
  };

  let total = countTotalFeedback();
  return (
    <Section>
      <GlobalStyle />
      <Section>
        <h2>Please leave your feedback</h2>
        <FeedbackOptions options={options} onLeaveFeedback={setFeedback} />
      </Section>
      <Section>
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </Section>
  );
};
