import style from './App.module.css';
import Grid from './Components/Grid';
import { useState } from 'react';

const ROWS = 6;
const COLS = 7;

const App = () => {
  // State for the board (2D array)
  const [board, setBoard] = useState(Array(ROWS).fill(Array(COLS).fill(null)));
  const [player, setPlayer] = useState('r');

  //Will check for winner and if board is full
  /*function checkWinner() {
    
  }*/

  //Takes the players turn by adding piece into chosen slot and updating 2d array for check winner.
  function dropToken(colIndex) {
    if (board[0][colIndex] == 'r' || board[0][colIndex] == 'y') {
      console.log("Column full. Please choose empty position");
    }

    for (let i = ROWS - 1; i >= 0; i--) {
      if (board[i][colIndex] === null) {
        const newBoard = board.map((row) => [...row]); // Deep copy the board
        if (player === 'r') {
          newBoard[i][colIndex] = 'r';
          setPlayer('y');
        } else {
          newBoard[i][colIndex] = 'y';
          setPlayer('r')
        }
        console.log(`Token dropped at row ${i}, column ${colIndex} with the color ${newBoard[i][colIndex]}`)
        setBoard(newBoard);
        break;
      }
    }
  }

  return (
    <div className={style.app}>
      <div className={style["app-header"]}></div>
      <h1 className={style["app-title"]}>Connect 4</h1>
      <Grid board={board} onColumnClick={dropToken} />
    </div>
  )
};

export default App;