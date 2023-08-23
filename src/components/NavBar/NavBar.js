import CartWidget  from "../CartWidget/CartWidget"
import logo from "./assets/store-removebg2.png"
import "./styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary justify-content-center">
            <div className="container-fluid">
            <a class="navbar-brand" className="logo" href="#home"><img src ={logo} alt = "logo"  /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#productos">Productos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contacto">Contacto</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#nosotros">Nosotros</a>
                            </li>
                            <div className = "carrito-nav"><CartWidget /></div>
                        </ul>
                    </div>
            </div>
        </nav>
    )
}

export default NavBar