import React from "react";
import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({id, title, image, price, stock}) =>{
    
    return (
        <div className="CardContainer">
            <article className="CardItem">
                <header>
                <h2 className="ItemHeader">{title}</h2>
                </header>
                <picture>
                <img src={image} alt={title} className="ItemImg" />
                </picture>
                <section>
                <p className="ItemDescription">Descripción del producto...</p>
                <p className="ItemPrice">${price}</p>
                </section>
                <footer>
                <Link to={`/item/${id}`} className="ItemButton">
                   <button> Ver Detalle </button> 
                </Link>
                </footer>
            </article>
        </div>
    );
}

export default Item