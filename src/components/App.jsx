import React from 'react';
import { useReducer } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

function buttonReducer(state, action) {
  switch (action.type) {
    case 'good':
      return { ...state, good: state.good + action.payload };
    case 'neutral':
      return { ...state, neutral: state.neutral + action.payload };
    case 'bad':
      return { ...state, bad: state.bad + action.payload };

    default:
      throw new Error(`Unsuported action type ${action.type}`);
  }
}

export function App() {
  const [state, dispatch] = useReducer(buttonReducer, {
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const hendleIncrement = key => {
    return dispatch({ type: key, payload: 1 });
  };

  const ourButton = () => {
    return Object.keys(state);
  };

  const countPositiveFeedbackPercentage = () => {
    if (state.good === 0) {
      return 0;
    } else {
      return Math.floor(
        (state.good / (state.good + state.neutral + state.bad)) * 100
      );
    }
  };

  const total = state.good + state.neutral + state.bad;
  return (
    <>
      <GlobalStyle />
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={ourButton()}
          onLeaveFeedback={hendleIncrement}
        />
      </Section>
      <Section title={'Statistics'}>
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            totalFeedback={total}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
}
