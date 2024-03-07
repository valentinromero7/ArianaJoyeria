import React from 'react';
import './cartModal.css';
import { useCart } from '../context/cartContext';

const CartModal = ({ isOpen, onClose }) => {
    const { cart } = useCart();

    const calculateProductTotal = (item) => {
        return item.quantity * item.price;
    };

    return (
        isOpen && (
            <div className="cart-modal-overlay" onClick={onClose}>
                <div className="cart-modal-content" onClick={(e) => e.stopPropagation()}>
                    <h2>Carrito de compras</h2>
                    <p>Total de productos: {cart.length}</p>
                    <ul>
                        {cart.map((item, id) => (
                            <li key={id}>
                                <p>{item.name}</p>
                                <p>Precio unitario: {item.price}</p>
                                <p>Cantidad: {item.quantity}</p>
                                <p>Total: {calculateProductTotal(item)}</p>
                            </li>
                        ))}
                    </ul>
                    <button onClick={onClose}>Cerrar</button>
                </div>
            </div>
        )
    );
};

export default CartModal;
