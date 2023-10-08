import cart from "./assets/cart-outline.svg"
import "./styles.css"
import { Link } from "react-router-dom"
import { useCart } from "../../context/CartProvider"

const CartWidget = () => {
    const { totalQuantity} = useCart();

    return (
        <Link to="/cart" className="CartWidget" style={{display: totalQuantity > 0 ? "block" : "none"}}>
            <img src ={cart} alt = "cart-widget" className="carrito"/>
            {totalQuantity}
        </Link>
    )
}

export default CartWidget