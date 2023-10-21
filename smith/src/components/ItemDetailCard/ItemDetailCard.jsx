import { useContext, useState } from "react"
import { ItemCount } from "../ItemCount/ItemCount"
import "./ItemDetailCard.css"
import { CartContext } from "../../context/Cartcontext"
import { Link } from "react-router-dom"

export const ItemDetailCard = ({item}) => {
    const { addCart, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

    const handleAdd = () => {
        const newItem = {
            ...item,
            cantidad
        }
    addCart(newItem)
    }

    return (
        <div className="detalle-producto">
        <img src={item.img} alt={item.nombre} />
            <div>
                <h3>{item.nombre}</h3>
                <h5>{item.editorial}</h5>
                <h4><strong>${item.precio}</strong></h4>
                <p>{item.detalle}</p>
                <h6>Subtotal: ${item.precio * cantidad}</h6> 
                {item.stock <= 10 && <h2>¡Quedan pocas unidades!</h2>}
                {
                    isInCart(item.id)
                        ? <Link  to="/Cart">Terminar compra</Link>
                        : <ItemCount
                            stock={item.stock}
                            cantidad={cantidad}
                            setCantidad={setCantidad}
                            item={item}
                            add={handleAdd}
                        />
                }
            </div>
        </div>
    )
}