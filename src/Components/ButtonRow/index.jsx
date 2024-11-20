import PropTypes from 'prop-types';
import style from './ButtonRow.module.css'
import ColumnButton from '../ColumnButton';
const ButtonRow = ({cols, onColumnClick}) => {
    return (
        <div className={style["button-row"]}>
            {Array.from({length:cols}).map((_, colIndex) => (
                <ColumnButton
                    key={colIndex}
                    colIndex={colIndex}
                    onClick={onColumnClick}
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