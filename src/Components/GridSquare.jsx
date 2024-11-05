import React from 'react'

// Creates a square for the board grid

export default function GridSquare(props) {
    const classes = `grid-square color-${props.color}`
    return <div className={classes} />
}