import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

import { Wrapper } from './App.styled';

const buttons = ['good', 'neutral', 'bad'];
let isOpen = false;

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = stateName => {
    this.setState(prevState => ({
      [stateName]: prevState[stateName] + 1,
    }));
    // console.log(this.state.good);
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  toggle = () => {
    isOpen = isOpen === false ? true : isOpen;
  };

  render() {
    return (
      <Wrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={buttons}
            onLeaveFeedback={this.handleIncrement}
            onClick={this.toggle}
          />
        </Section>
        <Section title="Statistics">
          {isOpen ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Wrapper>
    );
  }
}
