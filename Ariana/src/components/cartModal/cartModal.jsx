import React, { useState } from 'react';
import './cartModal.css';
import { useCart } from '../context/cartContext';
import { getFirestore, collection, addDoc, Timestamp } from "firebase/firestore";

const CartModal = ({ isOpen, onClose }) => {
    const { cart, clearCart } = useCart();
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [paymentError, setPaymentError] = useState(null);

    const calculateProductTotal = (item) => {
        return item.quantity * item.price;
    };

    const handlePay = async () => {
        try {
            const db = getFirestore();
            const ordersCollectionRef = collection(db, "orders");

            const order = {
                items: cart,
                total: cart.reduce((total, item) => total + calculateProductTotal(item), 0),
                createdAt: Timestamp.fromDate(new Date())
            };

            await addDoc(ordersCollectionRef, order);
            setPaymentSuccess(true);
            clearCart();
        } catch (error) {
            console.error("Error processing payment:", error);
            setPaymentError("Error al procesar el pago. Por favor, inténtalo de nuevo más tarde.");
        }
    };

    const closeModal = () => {
        onClose();
        setPaymentSuccess(false);
        setPaymentError(null);
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
                            {paymentError && <p className="payment-error">{paymentError}</p>}
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
