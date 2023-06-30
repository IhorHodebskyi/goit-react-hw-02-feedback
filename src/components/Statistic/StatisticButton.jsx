export const StatisticButton = ({
  onGoodIncrement,
  onNeutralIncrement,
  onDadIncrement,
}) => (
  <ul>
    <li>
      <button onClick={onGoodIncrement}>Good</button>
    </li>
    <li>
      <button onClick={onNeutralIncrement}>Neutral</button>
    </li>
    <li>
      <button onClick={onDadIncrement}>Bad</button>
    </li>
  </ul>
);
