import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from '../../context/CartProvider';


const ItemDetail = ({id, title, image, price, stock, category, description}) =>{
    const [quantity, setQuantity] = useState(0);
    const { addItem } = useCart();

    const handleAddToCart = (number) => {
        setQuantity(number);
        addItem({ id: id, title, price, stock, image, description }, number);

    }

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {title}
                </h2>
            </header>
            <picture>
                <img src = {image} alt={title} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripcion: {description}
                </p>
                <p className="Info">
                    Precio: $ {price}
                </p>
            </section>
            <div className="ItemFooter">
                {
                    stock === 0 ? 
                    (<p className='text-danger bg-danger-subtle text-center rounded'> Fuera de stock</p>)
                    : 
                    quantity > 0 ? (<Link to="/cart" className="Option">Terminar Compra</Link>) 
                    : 
                    (<ItemCount initial={1} stock={stock || 0} onAdd={handleAddToCart}/>)
                }
            </div>
        </article>
    )
}

export default ItemDetail;