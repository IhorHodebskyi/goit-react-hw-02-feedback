import { StatisticTitle } from "./StatisticTitle";

export const StatisticSpan = ({
  good,
  neutral,
  bad,
  total = 0,
  interest = 0,
  title,
}) => {
  return total ? (
    <ul>
      <li>
        <span>Good: {good}</span>
      </li>
      <li>
        <span>Neutral: {neutral}</span>
      </li>
      <li>
        <span>Bad: {bad}</span>
      </li>
      <li>
        <span>Total: {total}</span>
      </li>
      <li>
        <span>Positive feedback: {interest}%</span>
      </li>
    </ul>
  ) : (
    <StatisticTitle title="There is no feedback" />
  );
};
