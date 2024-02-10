export default function Section({ title, children }) {
  return (
    <ul>
      {title && title}
      {children}
    </ul>
  );
}
