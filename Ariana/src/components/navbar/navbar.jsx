import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import './Navbar.css';
import CartModal from '../cartModal/cartModal.jsx';
import { useCart } from '../context/cartContext';

export default function Navbar() {
    const [isCartModalOpen, setIsCartModalOpen] = useState(false);
    const { cart } = useCart();

    const handleCartButtonClick = () => {
        setIsCartModalOpen(prevState => !prevState);
    };

    const handleCloseModal = () => {
        setIsCartModalOpen(false);
    };

    return (
        <header>
            <nav>
                <Link to="/" className="logo">
                    <img width={70} src="../img/logoArianaBlanco.jpg" className="logo" alt="Logo" />
                </Link>
                <NavLink to="/categoria/collares" className="link">Collares</NavLink>
                <NavLink to="/categoria/anillos" className="link">Anillos</NavLink>
                <NavLink to="/categoria/relojes" className="link">Relojes</NavLink>
                <button className="carrito" onClick={handleCartButtonClick}>
                    <FaShoppingCart />
                    <span className="contadorCarrito">{cart.length}</span>
                </button>
            </nav>
            <CartModal isOpen={isCartModalOpen} onClose={handleCloseModal} />
        </header>
    );
}