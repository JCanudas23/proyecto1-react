import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams, Link } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
/* import { getDoc, doc } from "../../services/firebase/firebaseConfig" */
import { db } from "../../services/firebase/firebaseconfig"
import Loader from '../Loader/Loader';

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);
    const { itemId } = useParams();
    
    useEffect(() => {
        setLoading(true)
        const docRef = doc(db, "products", itemId)

        getDoc(docRef)
            .then(snapshot => {
                const data = snapshot.data()
                const detailProduct = { id: snapshot.id, ...data }
                setProduct(detailProduct)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    
     }, [itemId])

    return(
        <section className="ItemDetailContainer">
            <Link to={-1} className="GoBackLink"> Ir atras </Link>
            { loading ? <Loader /> : 
            <ItemDetail {...product} />}
        </section>
    )
}

export default ItemDetailContainer