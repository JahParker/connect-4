import style from './Grid.module.css';
import GridSquare from "../GridSquare";
import ButtonRow from "../ButtonRow/index"
import PropTypes from 'prop-types';

const COLS = 7;


const Grid = ({ board, onColumnClick }) => {
  return (
    <>
      <ButtonRow cols={COLS} onColumnClick={onColumnClick} />
      <div className={style.grid}>
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className={style.row}>
            {row.map((cell, colIndex) => (
              <GridSquare key={colIndex} />
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

Grid.propTypes = {
  board: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOf([null, 'r', 'y']))
  ).isRequired,
  onColumnClick: PropTypes.func.isRequired,
};

export default Grid
