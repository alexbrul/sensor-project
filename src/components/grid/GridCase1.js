import React from 'react'
import Box from './Box.js'
import './GridCase1.css';
import Room from './Room.js'

export default function Grid() {
    let grid = [];

    for(let i = 0; i < 100; i++) {
        grid.push(<Box/>)
    }

    return (     
        <div className="Grid-main">
            <div className="Grid-wall"> wall </div>
            <div className="Grid-roomContainer">
            <Room/>
            <Room/>
            <Room/>
            </div>
            <div className="Grid-wall"> wall </div>
            <div className="Grid-hallway">-</div>
            <div className="Grid-hallway">hallway</div>
            <div className="Grid-hallway">-</div>


            <div className="Grid-wall"> wall </div>


            <div className="Grid-roomContainer"> 
            <Room/> 
            <Room/>
            </div>
            <div className="Grid-wall"> wall </div>

        </div>
    )
}
