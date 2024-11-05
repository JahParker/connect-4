import styles from './App.module.css'
import React from 'react'
import GridSquare from './Components/GridSquare'

//Will check for winner and if board is full
function checkWinner() {
  
}

//Takes the players turn by adding piece into chosen slot and updating 2d array for check winner.
function takeTurn () {

}

function App() {

  return (
    <>
      <div className="App">
      <header className="App-header">
        <h1 className="App-title">Tetris Redux</h1>
      </header>
      <GridSquare color="1" />
    </div>
    </>
  )
}

export default App
