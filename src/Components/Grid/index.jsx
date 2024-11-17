import style from './Grid.module.css';
import GridSquare from "../GridSquare";
import ButtonRow from './Components/ButtonRow';

const ROWS = 6;
const COLS = 7;

let grid = Array(ROWS).fill(Array(COLS).fill(null));

const handleColumnClick =(colIndex) => {
  console.log(`Column ${colIndex + 1} button clicked`)
}

const Grid = () => {
  return (
    <>
    <ButtonRow cols={COLS} onColumnClick={handleColumnClick}/>
    <div className={style.grid}>
      {grid.map((row, rowIndex) => (
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

export default Grid
