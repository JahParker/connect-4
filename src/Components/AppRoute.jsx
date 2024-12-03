import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from '../Pages/Home'
import App from '../App'
import GameOver from '../Pages/GameOver'

function AppRoute() {

return (
    <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connect" element={<App />} />
        <Route path="/gameover" element={<GameOver />} />
        </Routes>
    </Router>
)
}

export default AppRoute;