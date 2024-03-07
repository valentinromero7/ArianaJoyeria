import React, { useState } from 'react';
import './itemCount.css';

function ItemCount({ maxStock, onAdd }) {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        if (count < maxStock) {
            setCount(count + 1);
        }
    };

    const decrementCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handleAddToCart = () => {
        onAdd(count);
    };

    return (
        <div className="contadorContainer">
            <h2 className="contadorText">Cantidad: {count}</h2>
            <button className="contadorButton" onClick={decrementCount} disabled={count === 0}>-</button>
            <button className="contadorButton" onClick={incrementCount} disabled={count === maxStock}>+</button>
            <button className="agregarCarritoButton" onClick={handleAddToCart} disabled={count === 0}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;