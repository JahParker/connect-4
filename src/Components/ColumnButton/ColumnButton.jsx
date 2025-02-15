import PropTypes from 'prop-types';
//import Triangle from '../../assets/Triangle.jsx'
import Triangle  from '../../assets/Tri.svg';

// Creates a square for the board grid
const ColumnButton = ({ colIndex, onColumnClick}) => {
  return (
    <button 
      style={{ background: 'none', border: 'none', padding: 0 }}
      onClick={() => onColumnClick(colIndex)} // Pass onClick to ColumnButton
    >
          <img src={Triangle} alt="Triangle Button" />
    </button>
  )
};

ColumnButton.propTypes = {
  colIndex: PropTypes.number.isRequired, // Ensure colIndex is a number
  onColumnClick: PropTypes.func.isRequired, // Ensure onClick is a function
  children: PropTypes.node, // Allow any valid children (like text or JSX)
};

export default ColumnButton;