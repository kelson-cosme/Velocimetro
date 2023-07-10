import "./speed-style.css"

export default function Velocimetro(){
    return(
        <div>
            <div>
                <span id="speed">0</span>
                <span> Km/h</span>
            </div>
            
            <button id="start">Start</button>
            <button id="stop">Stop</button>
        </div>

    )
}