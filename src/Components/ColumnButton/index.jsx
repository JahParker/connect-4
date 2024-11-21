import style from './ColumnButton.module.css'
import PropTypes from 'prop-types';

// Creates a square for the board grid
const ColumnButton = ({ colIndex, onColumnClick, children }) => {
  return (
    <button
      className={style["column-button"]}
      onClick={() => onColumnClick(colIndex)} // Pass onClick to ColumnButton
    >
      {children}
      Button {colIndex + 1}
    </button>
  )
};

ColumnButton.propTypes = {
  colIndex: PropTypes.number.isRequired, // Ensure colIndex is a number
  onColumnClick: PropTypes.func.isRequired, // Ensure onClick is a function
  children: PropTypes.node, // Allow any valid children (like text or JSX)
};

export default ColumnButton;