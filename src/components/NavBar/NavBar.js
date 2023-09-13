import CartWidget  from "../CartWidget/CartWidget"
import logo from "./assets/store-removebg2.png"
import "./styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, Link } from "react-router-dom";


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary justify-content-center">
            <div className="container-fluid">
            <Link class="navbar-brand" className="logo" href="#home"><img src ={logo} alt = "logo"  /></Link>
                <Link className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav">
                            <div className="Categories">
                                <NavLink to={"/category/men"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Hombre</NavLink>
                                <NavLink to={"/category/women"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Mujer</NavLink>
                                <NavLink to={"/category/jewelry"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Joyeria</NavLink>
                                <NavLink to={"/category/electronics"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Tecnologia</NavLink>
                            </div>
                            <div className = "carrito-nav"><CartWidget /></div>
                        </div>
                    </div>
            </div>
        </nav>
    )
}

export default NavBar