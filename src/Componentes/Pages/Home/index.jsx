import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';

export default function Home(){
    return(
        <div className="bg-success d-flex justify-content-between align-items-center">
            <h1>Teste Home</h1>

            <Link className='btn btn-primary' to={"/velocimetro"}>Velocimetro</Link>

        </div>
    )
}