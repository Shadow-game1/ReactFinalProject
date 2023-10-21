import React, { useContext } from 'react'
import { CartContext } from '../../context/Cartcontext'
import "./Cart.css"
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, emptyCart, totalCompra, removeItem } = useContext(CartContext)

    if(cart.length === 0) {
        return(
            <div className='container my-5'>
                <h2 className='cartVacio'>Tu carrito esta vacio</h2>
                <hr />
                <p>¡Añade algún producto al carrito para finalizar tu compra!</p>
                <Link to="/" className="btn btn-dark btnCart">Ver productos</Link>
            </div>
        )
    }

    return (
        <div className='container my-5 tC'>
            <h2 className='tC'>Tu compra</h2>
                <hr />
                {
                    cart.map((item) => (
                        <div className='cartProductos' key={item.id}>
                            <div className='imgBox'>
                                <img className='imgCart' src={item.img} alt={item.nombre} />
                            </div>
                            <div className='datosProductos'>
                                <h2>{item.nombre}</h2>
                                <h3>Cantidad: {item.cantidad}</h3> 
                                <h3>Subtotal: ${item.cantidad * item.precio}</h3>
                            </div>
                            <button className='btn btn-ligth' onClick={() => removeItem(item.id)}> <img className='trash' src="img/contenedor-de-basura.png" alt="" /></button>
                        </div>
                    ))
                }
            <div className='cartBtn'>
                <hr />
                <h3>TOTAL: ${totalCompra()}</h3>
                <button onClick={emptyCart} className='btn btn-danger'>Vaciar carrito</button>
                <Link to="/Finishorder" className='btn btn-primary'>Finalizar compra</Link>
            </div>
        </div>
    )
}



export default Cart