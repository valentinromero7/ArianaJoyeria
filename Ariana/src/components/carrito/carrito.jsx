import React from 'react'
import { IoCart } from "react-icons/io5";

const Carrito = () => {
    return (
        <div className="contenedorCarrito">
            <button className='botonCarrito'>
                <IoCart className="carrito"/>
            </button>
        </div>
    )
}

export default Carrito