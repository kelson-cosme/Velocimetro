import {Link} from "react-router-dom"


export default function Velocimetro(){


    function start(){
        
        const speedElement = document.getElementById("speed") //Elemento onde irá aparecer a velocidade


        let startBtn = document.getElementById("start")
        let stopBtn = document.getElementById("stop")

        startBtn.classList.add("d-none")
        stopBtn.classList.remove("d-none")

//quando a velocidade for "null", o speed tera valor de "0", multiplicar por 3,6 para poder converter para Km/h
        function handleSuccess(position){

            speedElement.innerText = position.coords.speed ? position.coords.speed * 3.6: 0

        }

        function handleError(error){
            console.log(error.msg)
        }

        const opions = { enableHighAccuracy: true} //Ativar o alta precisão

        navigator.geolocation.watchPosition(handleSuccess, handleError, opions) 
    }

    function stop(){
        let startBtn = document.getElementById("start")
        let stopBtn = document.getElementById("stop")

        startBtn.classList.remove("d-none")
        stopBtn.classList.add("d-none")
    }
    
    return(
        
    <div className="container d-flex flex-column justify-content-between h-100">
            <nav className="navbar justify-content-end">
                <Link className="btn btn-close border border-black p-2"  to={"/"}></Link>
            </nav>

            <div  className="d-flex flex-column align-items-center justify-content-center bg-dark text-light flex-fill mb-3 rounded-3">
                <span style={{fontSize: "120px"}} className="fw-bold" id="speed">0</span>
                <span style={{fontSize: "36px"}}> Km/h</span>
            </div>
            
            <button id="start" onClick={start} className="btn btn-primary mb-3" ><span className="display-4">Start</span></button>
            <button id="stop" onClick={() => stop()} className="btn btn-danger d-none mb-3"><span className="display-4">Stop</span></button>
        </div>

    )
}