import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='home'>
            <h1 className="white-text">
                Disco 4 Ever
            </h1>
            <Link to="/connect">
                <button >
                    Start Game
                </button>
            </Link>
        </div>
    );
}

export default Home;