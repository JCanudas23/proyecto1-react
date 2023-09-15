import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import { getProductsById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams, Link } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const {itemId} = useParams()

    useEffect(() => {
        getProductsById(Number(itemId))
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error);
            })
    }, [itemId])

    return(
        <section className="ItemDetailContainer">
            <Link to={-1} className=""> Ir atras </Link>
            <ItemDetail {...product} />
        </section>
    )
}

export default ItemDetailContainer