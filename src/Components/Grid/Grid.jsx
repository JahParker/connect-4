import style from './Grid.module.css';
import GridSquare from "../GridSquare/GridSquare";
import ButtonRow from "../ButtonRow/ButtonRow"
import PropTypes from 'prop-types';

const Grid = ({ board, onColumnClick }) => {
  return (
    <>
      <ButtonRow cols={board[0].length} onColumnClick={onColumnClick} />
      <div className={style.grid}>
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className={style.row}>
            {row.map((cell, colIndex) => (
              <GridSquare key={colIndex} color={cell}/>
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
