import style from './GridSquare.module.css'
import PropTypes from 'prop-types';

// Creates a square for the board grid
const GridSquare = ({color}) => {
  return (
    <>
      {color === 'r' ? (
        <div className={style["red"]} />
      ) : color === 'y' ? (
        <div className={style["yellow"]} />
      ) : (
        <div className={style["grid-square"]} />
      )}
    </>
  )
};
GridSquare.propTypes = {
  color: PropTypes.string,
};

export default GridSquare;