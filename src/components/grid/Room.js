import React, {useState} from 'react'
import './Room.css'
import bed from '../../resources/hospitalbed.png'

export default function Room() {

    /* Plan for senger! Ditch overlay greiene. 
        Sett et overlay over et bilde, ta skjermbilde, så heller
        switch mellom bildene. Det er mye lettere!

        Også lage sengekomponenthook som tar ansvar for av og på osv.
    */

   const [overlayon, setoverlay] = useState(false);


    return (
        <div className="Room-main">
           
            <div className="Room-imgPos1Container">
                <img className="Bed-imgPos1" src={bed} onClick={() => on()} />
                <div id="overlay" onClick={() => off()}/>
            </div>
                
           
            <img className="Bed-imgPos2" src={bed} onClick={() => off()}  />
            <img className="Bed-imgPos3" src={bed} />
            <img className="Bed-imgPos4" src={bed} />
        </div>
    )
}

function on() {
    document.getElementById("overlay").style.display = "block";
    console.log("Hello")
}

function off() {
    document.getElementById("overlay").style.display = "none";
    console.log("off")
}
