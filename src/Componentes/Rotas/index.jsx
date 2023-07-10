import {Route,Routes,BrowserRouter} from "react-router-dom"

import Home from "../Pages/Home"
import Velocimetro from "../Pages/speedmeter"

export default function AplicationRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/" element= {<Home/>}/>
                    <Route path="/velocimetro" element={<Velocimetro/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}