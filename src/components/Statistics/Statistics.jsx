export default function Statistics({
  good,
  neutral,
  bad,
  total,
  countPositiveFeedbackPercentage,
}) {
  return (
    <>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total()} </li>
      <li>Positive feedback: {countPositiveFeedbackPercentage()}%</li>
    </>
  );
}
