import { useState, useEffect }  from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from "../../services/firebase/firebaseconfig"
import Loader from '../Loader/Loader';
import Filters from "../Filters/filters"

const ItemListContainer = ({ greeting }) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        
        const collectionRef = categoryId
        ? query(collection(db, "products"), where("category", "==", categoryId))
        : collection(db,"products")
    
        getDocs(collectionRef)
            .then((snapshots) => {
                const productsAdapted = snapshots.docs.map(snapshot => 
                    ({ id: snapshot.id, ...snapshot.data() 
                }))
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId]);
    

    return (
        <div>
            <h1>{greeting}</h1>
            <div className="filtros">
                <Filters />
            </div>
            {loading ? <Loader/> :<ItemList products={products} />}
        </div>
    );
}

export default ItemListContainer;