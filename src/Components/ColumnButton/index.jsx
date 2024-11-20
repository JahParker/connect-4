import style from './ColumnButton.module.css'
import PropTypes from 'prop-types';

// Creates a square for the board grid
const ColumnButton = ({colIndex, onClick, children}) => {
  return (
    <button 
        className={style["column-button"]}
        onClick={() => onClick(colIndex)}
     >
        {children}
        </button>
  )
};

ColumnButton.propTypes = {
    colIndex: PropTypes.number.isRequired, // Ensure colIndex is a number
    onClick: PropTypes.func.isRequired, // Ensure onClick is a function
    children: PropTypes.node, // Allow any valid children (like text or JSX)
  };
  
export default ColumnButton;