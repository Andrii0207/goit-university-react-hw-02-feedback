import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <ul>
      {title && title}
      {children}
    </ul>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};
