import { Link } from 'react-router-dom';
import './CartWidget.css'
import { useContext } from 'react';
import { CartContext } from '../../context/Cartcontext';


const CartWidget = () => {
    const { totalCantidad } = useContext(CartContext)

    return(
        <Link to='./Cart' className="carrito">
            <img src="/img/carrito-de-compras.png" alt="Carrito" /> 
            <span>{totalCantidad()}</span>
        </Link>
    )
}

export default CartWidget