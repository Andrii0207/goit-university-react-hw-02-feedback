export default function FeedbackOptions({ options, onClick }) {
  return (
    <ul>
      {options.map(item => (
        <li key={item}>
          <button type="button" name={item} onClick={onClick}>
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
}
