import PropTypes from 'prop-types';


const Circle = ({ color = 'black', size = 150, isActive = false }) => (
  <div
  style={{
    width: size,
    height: size,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: isActive ? '10px solid white' : 'none', // Visible white border
    borderRadius: '100%', // Rounded border
    boxSizing: 'border-box', // Ensures border doesn't affect size
  }}
>
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12" // X-coordinate of the circle's center
      cy="12" // Y-coordinate of the circle's center
      r="10" // Radius of the circle
      fill={color}
    />
  </svg>
  </div>
);

export default Circle;

Circle.propTypes = {
  color: PropTypes.string.isRequired, 
  size: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired
};