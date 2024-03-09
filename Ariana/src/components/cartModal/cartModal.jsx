import React, { useState } from 'react';
import './cartModal.css';
import { useCart } from '../context/cartContext';

const CartModal = ({ isOpen, onClose }) => {
    const { cart, clearCart } = useCart(); 
    const [paymentSuccess, setPaymentSuccess] = useState(false); 

    const calculateProductTotal = (item) => {
        return item.quantity * item.price;
    };

    const handlePay = () => {
        setTimeout(() => {
            setPaymentSuccess(true);
            clearCart();
        }, 2000);
    };

    const closeModal = () => {
        onClose();
        setPaymentSuccess(false); 
    };

    return (
        isOpen && (
            <div className="cart-modal-overlay" onClick={closeModal}>
                <div className="cart-modal-content" onClick={(e) => e.stopPropagation()}>
                    {paymentSuccess ? (
                        <div className="payment-success">
                            <p>Pago exitoso. Gracias por tu compra.</p>
                            <button onClick={closeModal}>Cerrar</button>
                        </div>
                    ) : (
                        <>
                            <h2>Carrito de compras</h2>
                            <p>Total de productos: {cart.length}</p>
                            <ul className='ulModal'>
                                {cart.map((item, id) => (
                                    <li className='liModal' key={id}>
                                        <img src={`../${item.img}`} className="imagenProducto" alt={item.name} />
                                        <p className='primer-parrafo-modal'>{item.name}</p>
                                        <p className='pModal'>Precio unitario: {item.price}</p>
                                        <p className='pModal'>Cantidad: {item.quantity}</p>
                                        <p className='ultimo-parrafo-modal'>Total: {calculateProductTotal(item)}</p>
                                    </li>
                                ))}
                            </ul>
                            <div className="cart-modal-buttons">
                                <button className="close-btn" onClick={closeModal}>Cerrar</button>
                                {cart.length > 0 && <button onClick={handlePay}>Pagar</button>}
                            </div>
                        </>
                    )}
                </div>
            </div>
        )
    );
};

export default CartModal;
