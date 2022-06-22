import { Component } from 'react';
import 'normalize.css';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  setFeedback = evt => {
    const stateName = evt.target.innerText.toLowerCase();
    this.setState(prevState => ({ [stateName]: prevState[stateName] + 1 }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    let total = this.countTotalFeedback();
    return total === 0 ? 0 : parseInt((good * 100) / total);
  }

  render() {
    let { good, neutral, bad } = this.state;

    let total = this.countTotalFeedback();
    let positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <Section>
        <GlobalStyle />
        <Section>
          <h2>Please leave your feedback</h2>
          <FeedbackOptions onLeaveFeedback={this.setFeedback} />
        </Section>
        <Section>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          ></Statistics>
        </Section>
      </Section>
    );
  }
}
