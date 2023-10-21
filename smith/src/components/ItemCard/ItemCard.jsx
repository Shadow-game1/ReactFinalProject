import "./ItemCard.css"
import { Link } from "react-router-dom"

const ItemCard = ( {item} ) => {
    return(
        <div>
            <img src={item.img} alt={item.nombre} />
            <h5>{item.editorial}</h5>
            <h3>{item.nombre}</h3>
            <h4><strong>${item.precio}</strong></h4>
            <Link to={`/detail/${item.id}`}>Ver más</Link>
        </div>
    )
}

export default ItemCard