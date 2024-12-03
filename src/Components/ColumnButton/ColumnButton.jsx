import style from './ColumnButton.module.css'
import PropTypes from 'prop-types';
import Triangle from '../../assets/Triangle.jsx'

// Creates a square for the board grid
const ColumnButton = ({ colIndex, onColumnClick, children }) => {
  return (
    <button
      onClick={() => onColumnClick(colIndex)} // Pass onClick to ColumnButton
    >
      {children || <Triangle color="yellow" size={50}/>}
    </button>
  )
};

ColumnButton.propTypes = {
  colIndex: PropTypes.number.isRequired, // Ensure colIndex is a number
  onColumnClick: PropTypes.func.isRequired, // Ensure onClick is a function
  children: PropTypes.node, // Allow any valid children (like text or JSX)
};

export default ColumnButton;