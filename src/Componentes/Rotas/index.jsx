import {Route,Routes,BrowserRouter} from "react-router-dom"

import Home from "../Pages/Home"

export default function AplicationRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/" element= {<Home/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}