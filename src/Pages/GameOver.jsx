import {Link} from "react-router-dom"
function GameOver() {
    return (
        <div className="home">
            <h1 className="white-text">
                Game Over Player Wins
            </h1>
            <Link to="/connect">
                <button>
                    New Game
                </button>
            </Link>
            <br/>
            <Link to="/">
                <button>
                    Start Menu
                </button>
            </Link>
        </div>
    );
}

export default GameOver;