// import { Component } from 'react';

// export class FeedbackOptions extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleIncrement = stateName => {
//     this.setState(prevState => ({
//       [stateName]: prevState[stateName] + 1,
//     }));
//     console.log(this.state.good);
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   };

//   render() {
//     const { options } = this.props;
//     return (
//       <div>
//         <div>
//           <h1>Please leave feedback</h1>
//           <ul>
//             <li>
//               <button
//                 type="button"
//                 onClick={() => this.handleIncrement('good')}
//               >
//                 {options[0]}
//               </button>
//             </li>
//             <li>
//               <button
//                 type="button"
//                 onClick={() => this.handleIncrement('neutral')}
//               >
//                 {options[1]}
//               </button>
//             </li>
//             <li>
//               <button type="button" onClick={() => this.handleIncrement('bad')}>
//                 {options[2]}
//               </button>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <h2>Statistics</h2>
//           <p>Good: {this.state.good}</p>
//           <p>Neutral: {this.state.neutral}</p>
//           <p>Bad: {this.state.bad}</p>
//           <p>Total: {this.countTotalFeedback()} </p>
//           <p>Positive feedback: {this.countPositiveFeedbackPercentage()}% </p>
//         </div>
//       </div>
//     );
//   }
// }

export const FeedbackOptions = ({ onClick, options, onLeaveFeedback }) => {
  return (
    <div onClick={onClick}>
      <ul>
        <li>
          <button type="button" onClick={() => onLeaveFeedback('good')}>
            {options[0]}
          </button>
        </li>
        <li>
          <button type="button" onClick={() => onLeaveFeedback('neutral')}>
            {options[1]}
          </button>
        </li>
        <li>
          <button type="button" onClick={() => onLeaveFeedback('bad')}>
            {options[2]}
          </button>
        </li>
      </ul>
    </div>
  );
};
