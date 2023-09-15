import CartWidget from "../CartWidget/CartWidget";
import logo from "./assets/store-removebg2.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import "./NavBar.css"; 

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
            <div className="container">
                <NavLink to="/" className="navbar-brand"> 
                    <img src={logo} alt="logo" className="logo" />
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                to="/category/men"
                                className="nav-link"
                                activeClassName="ActiveOption" 
                            >
                                Hombre
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/category/women"
                                className="nav-link"
                                activeClassName="ActiveOption" 
                            >
                                Mujer
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/category/jewelry"
                                className="nav-link"
                                activeClassName="ActiveOption" 
                            >
                                Joyería
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/category/electronics"
                                className="nav-link"
                                activeClassName="ActiveOption" 
                            >
                                Tecnología
                            </NavLink>
                        </li>
                    </ul>
                    <div className="carrito-nav">
                        <CartWidget />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;








/* import CartWidget  from "../CartWidget/CartWidget"
import logo from "./assets/store-removebg2.png"
import "./NavBar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";



const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary justify-content-center">
            <div className="container-fluid">
            <NavLink className="navbar-brand logo" href="#home"><img src ={logo} alt = "logo"  /></NavLink>
                <NavLink className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </NavLink>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav">
                            <ul className="Categories">
                                <NavLink to={"/category/men"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Hombre</NavLink>
                                <NavLink to={"/category/women"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Mujer</NavLink>
                                <NavLink to={"/category/jewelry"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Joyeria</NavLink>
                                <NavLink to={"/category/electronics"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Tecnologia</NavLink>
                            </ul>
                            <div className = "carrito-nav"><CartWidget /></div>
                        </div>
                    </div>
            </div>
        </nav>
    )
}

export default NavBar */