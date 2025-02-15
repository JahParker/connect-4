import { Link } from 'react-router-dom';
import styles from './Home.module.css'

import React, { useEffect, useRef } from 'react';

/* TODO: 1st: Remove transparency from window 
         2nd: Remove little white background that appears after the image
         3rd: Move button into correct position 
         (Optional): Find out how to make elements resize with window 
*/

function Home() {
    return (
        <div className='home'>
            <Link to="/connect">
            <button className={styles.startButton}/>
            </Link>
        </div>
    );
}

export default Home;