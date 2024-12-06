import PropTypes from 'prop-types';
import style from './ButtonRow.module.css'
import ColumnButton from '../ColumnButton/ColumnButton';
const ButtonRow = ({ cols, onColumnClick }) => {
    return (
        <div className={style["button-row"]}>
            {Array(cols)
                .fill(0) // Creates an array of `cols` elements
                .map((_, colIndex) => (
                    <ColumnButton
                        key={colIndex}
                        colIndex={colIndex} // Correctly pass colIndex
                        onColumnClick={onColumnClick} // Pass the function reference
                    >
                    </ColumnButton>
                ))}
        </div>
    );
};

ButtonRow.propTypes = {
    cols: PropTypes.number.isRequired,
    onColumnClick: PropTypes.func.isRequired,
};

export default ButtonRow