import style from './App.module.css';
import Grid from './Components/Grid/Grid';
import { useState } from 'react';
import {Link} from "react-router-dom"
import './index.css'
import Circle from './assets/Circle'


const ROWS = 6;
const COLUMNS = 7;

const App = () => {
  // State for the board (2D array)
  const [board, setBoard] = useState(Array(ROWS).fill(Array(COLUMNS).fill(null)));
  const [player, setPlayer] = useState('r');
 
  // Takes the players turn by adding piece into chosen slot and updating 2d array for check winner.
  function dropToken(col) {

    // Column full
    if (board[0][col] !== null) {
      console.log("Column full. Please choose empty position");
    }

    // Checks the column, bottom to top, if there is an empty space for a token
    for (let row = ROWS - 1; row >= 0; row--) {
      if (board[row][col] === null) {

        const newBoard = board.map((row) => [...row]); // Deep copy the board

        if (player === 'r') {
          newBoard[row][col] = 'r';
          setPlayer('y');
        } else {
          newBoard[row][col] = 'y';
          setPlayer('r');
        }
        console.log(`Token dropped at row ${row}, column ${col} with the color ${newBoard[row][col]}`)

        setBoard(newBoard);
        checkWinner(row, col);
        break;
      }
    }
  }

   //Will check for winner and if board is full
  function checkWinner(row, col) {
    if (checkVertical(row,col)) console.log('Winner');
    if (checkHorizontal(row,col)) console.log('Winner');
    if (checkDiagonal(row,col)) console.log('Winner');
  }

  function checkVertical(row, col) {
    if (player === board[row+1][col] 
      && player === board[row+2][col]
      && player === board[row+3][col]) return true
  }

  function checkHorizontal(row, col) {
    let leftSpaces = col; // # of spaces left of the token

    // console.log(player);
    // console.log(board[row][col-3]);
    // console.log(board[row][col-2]);
    // console.log(board[row][col-1]);
    // console.log(board[row][col+1]);
    // console.log(board[row][col+2]);
    // console.log(board[row][col+3]);

    // Alternatively
    // Loop left, if token not the same as current player, return false
    // Loop right, if token not the same as current player, return false

    switch (leftSpaces) {
      case 0:
        if (player === board[row][col+1] 
            && player === board[row][col+2]
            && player === board[row][col+3]) return true
        break;
      case 1:
        if (player === board[row][col-1] 
          && player === board[row][col+1]
          && player === board[row][col+2]) return true
        break;
      case 2:
        if (player === board[row][col-2] 
          && player === board[row][col-1]
          && player === board[row][col+1]) return true
        break;
      default:
        if (player === board[row][col-3] 
          && player === board[row][col-2]
          && player === board[row][col-1]) return true
        break;
    }
  }

  function checkDiagonal() {
    
  }
  
 
  return (
    <div>
      <div className={style["game-container"]}>
        <Circle color="yellow" isActive={player === 'y'} size={150}/>
        <div className={style.app}>
          <div className={style["app-header"]}>Connect 4</div>
          <Grid board={board} onColumnClick={dropToken} />
        </div>
        <Circle color="red" isActive={player === 'r'} size={150}/>
      </div>
    <Link to="/">
      <button>
        Return to start  
      </button>
    </Link>
    </div>
  )
};

export default App;