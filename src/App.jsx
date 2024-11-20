import style from './App.module.css';
import Grid from './Components/Grid';

//Will check for winner and if board is full
function checkWinner() {
  
}

//Takes the players turn by adding piece into chosen slot and updating 2d array for check winner.
function takeTurn () {

}



const App = () => {
  return (
    <div className={style.app}>
      <div className={style["app-header"]}></div>
      <h1 className={style["app-title"]}>Connect 4</h1>
      <Grid />
    </div>
  )
};

export default App;