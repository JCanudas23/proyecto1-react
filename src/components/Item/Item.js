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
                    Ver Detalle
                </Link>
                </footer>
            </article>
        </div>
        // <article className="CardItem">
        //     <header className="Header">
        //         <h2 className="ItemHeader">
        //             {title}
        //         </h2>
        //     </header>
        //     <picture>
        //         <img src = {image} alt = {title} className="ItemImg"/>
        //     </picture>
        //     <section>
        //         <p className="Info">
        //             Precio: ${price}
        //         </p>
        //         <p className="Info">
        //             Stock disponible: {stock}
        //         </p>
        //     </section>
        //     <footer className="ItemFooter">
        //         <Link to={`/item/${id}`} className="Option">Ver Detalle</Link>
        //     </footer>
        // </article>


    );
}

export default Item