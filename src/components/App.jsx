import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  handleClick = e => {
    const { name } = e.target;
    this.setState({ [name]: this.state[name]+ 1 });    
  }



  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }


  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    let tottalFeedback = good + neutral + bad;
    return Math.round(100 * good / tottalFeedback);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state)
    return (
      <>
        <Section title={"Please leave feedback"}><FeedbackOptions options={options} onLeaveFeedback={this.handleClick}/></Section>        
        <Section title={"Statistics"}>
          {this.countTotalFeedback() > 0
            ?
            (<Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />)
            :
            (<Notification title={"There is no feedback"} />)} 
        </Section>
      </>  
  );
  }
};
