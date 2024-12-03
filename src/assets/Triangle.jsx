import PropTypes from 'prop-types';

const Triangle = ({ color = "black", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon
      points="12,22 22,2 2,2" // Adjusted points for an upside-down triangle
      fill={color}
    />
  </svg>
);

export default Triangle;

Triangle.propTypes = {
  color: PropTypes.string.isRequired, // Ensure colIndex is a number
  size: PropTypes.number.isRequired, // Ensure onClick is a function
};