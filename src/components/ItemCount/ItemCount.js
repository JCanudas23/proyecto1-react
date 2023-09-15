import "./ItemCount.css"
import { useState } from "react"

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)
  
    const increment = () => {
      if (quantity >= stock) return
      setQuantity(prev => prev + 1)
    }
  
    const decrement = () => {
      if (quantity <= 1) return
      setQuantity(prev => prev - 1)
    }
  
    const handleOnAdd = () => {
      onAdd(quantity)
    }
    
    return(
        <div className = "Counter">
            <div className="Controls">
                <button className="Button" onClick={decrement}>-</button>
                <h4 className="Number">{quantity}</h4>
                <button className="Button" onClick={increment}>+</button>
            </div>
            <div>
                <button className="Button" onClick={handleOnAdd}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount