import React, { useState } from 'react'
import "./ItemCount.css"

export const ItemCount = ({stock, cantidad, setCantidad, add}) => {

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < stock && setCantidad(cantidad + 1)
    }

    return (<div className='contador'>
        <button
            onClick={handleRestar} 
            className={cantidad === 1 ?'btn mx-1 btn-outline-secondary' :'btn mx-1 btn-outline-dark'}
            disabled={cantidad === 1}
        >-</button>
        <span className='mx-2'>{cantidad}</span>
        <button
            onClick={handleSumar}
            className={cantidad === stock ?'btn mx-1 btn-secondary' :'btn mx-1 btn-dark'}
            disabled={cantidad === stock}
            >+</button>
        <a onClick={add} href="#">Añadir al carrito</a> 
    </div>)
}


