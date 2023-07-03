export const FeedbackOptions = ({ onLeaveFeedback, options }) =>
  options.map(option => (
    <button key={option} onClick={() => onLeaveFeedback(option)}>
      {option}
    </button>
  ));
