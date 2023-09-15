import cart from "./assets/cart-outline.svg"
import "./styles.css"
import { Link } from "react-router-dom"

const CartWidget = () => {
    return (
        <Link to="/cart">
            <img src ={cart} alt = "cart-widget" className="carrito"/>
            13
        </Link>
    )
}

export default CartWidget