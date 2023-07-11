import {Link} from "react-router-dom"



export default function Velocimetro(){
    return(
        <div className="container d-flex flex-column justify-content-between h-100">
            <nav className="navbar justify-content-end">
                <Link className="btn btn-close border border-black p-2"  to={"/"}></Link>
            </nav>

            <div className="d-flex flex-column align-items-center justify-content-center bg-dark text-light flex-fill mb-3 rounded-3">
                <span style={{fontSize: "120px"}} className="fw-bold" id="speed">0</span>
                <span style={{fontSize: "36px"}}> Km/h</span>
            </div>
            
            <button className="btn btn-primary mb-3" id="start"><span className="display-4">Start</span></button>
            <button className="btn btn-danger d-none mb-3" id="stop"><span className="display-4">Stop</span></button>
        </div>

    )
}