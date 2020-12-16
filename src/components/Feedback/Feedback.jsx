// import React, { Component } from 'react';
import { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Value from './Value';
import s from './Feedback.module.css';
import Notification from './Notification';

export default function Feedback() {
  const [good, setGoodFeedback] = useState(0);
  const [neutral, setNeutralFeedback] = useState(0);
  const [bad, setBadFeedback] = useState(0);

  const onLeaveFeedback = item => {
    switch (item) {
      case 'good':
        setGoodFeedback(s => s + 1);
        break;
      case 'neutral':
        setNeutralFeedback(s => s + 1);
        break;
      case 'bad':
        setBadFeedback(s => s + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };

  return (
    <div className={s.feedback}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics" className={s.statistics}>
        {countTotalFeedback() === 0 ? (
          <Notification message="No one reported yet"></Notification>
        ) : (
          <Value
            goodStats={good}
            neutralStats={neutral}
            badStats={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}

// class Feedback extends Component {
//   state = {
//     good: this.props.initialValue,
//     neutral: this.props.initialValue,
//     bad: this.props.initialValue,
//   };

//   onLeaveFeedback = item => {
//     this.setState(prevState => ({
//       [item]: prevState[item] + 1,
//     }));
//   };

//   countTotalFeedback() {
//     return Object.values(this.state).reduce((acc, item) => acc + item, 0);
//   }

//   countPositiveFeedbackPercentage() {
//     return Math.round((this.state.good * 100) / this.countTotalFeedback());
//   }

//   render() {
//     return (
//       <div className={s.feedback}>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//         <Section title="Statistics" className={s.statistics}>
//           {this.countTotalFeedback() === 0 ? (
//             <Notification message="No one reported yet"></Notification>
//           ) : (
//             <Value
//               goodStats={this.state.good}
//               neutralStats={this.state.neutral}
//               badStats={this.state.bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

// export default Feedback;
