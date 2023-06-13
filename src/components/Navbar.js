import { Link } from "react-router-dom";


function Navbar (){

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
            <div className="container">
                <Link className="navbar-brand" to="/">React CURD</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Contact-us">Contact us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/About-us">About us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Students">Students</Link>
                    </li>
        
                    <li className="nav-item">
                        <Link className="nav-link disabled">Disabled</Link>
                    </li>
                </ul>
      
                </div>
            </div>
        </nav>
        
    );

}

export default Navbar;

