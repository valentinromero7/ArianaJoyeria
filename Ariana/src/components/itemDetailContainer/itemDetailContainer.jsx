import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../context/cartContext';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import './itemDetailContainer.css';
import ItemCount from '../itemCount/itemCount';

export default function ItemDetailContainer() {
    const { itemId } = useParams();
    const [producto, setProducto] = useState();
    const { addItem } = useCart();

    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const db = getFirestore();
                const productoRef = doc(db, "productos", itemId);
                const productoSnapshot = await getDoc(productoRef);
                if (productoSnapshot.exists()) {
                    return { id: productoSnapshot.id, ...productoSnapshot.data() };
                } else {
                    console.log("No se encontró ningún producto con el ID especificado:", itemId);
                    return null; // Devolver null cuando el producto no existe
                }
            } catch (error) {
                console.error("Error fetching producto:", error);
                return null; // Devolver null en caso de error
            }
        };
    
        fetchProducto().then(producto => {
            if (producto) {
                setProducto(producto);
            }
        });
    
    }, [itemId]);
    
    

    const handleAddToCart = (count) => {
        if (count > 0 && producto) {
            addItem(producto, count);
            console.log(`Se agregaron ${count} unidades del producto "${producto.name}" al carrito.`);
        } else {
            console.log("La cantidad debe ser mayor a cero o el producto no está disponible.");
        }
    };

    if (!producto) {
        return <p>Cargando producto...</p>;
    }

    return (
        <main>
            <section className='itemDetailContainer'>
                <div className='itemDetailContainerDiv' key={producto.id}>
                    <img src={`../${producto.img}`} className="imagenProductoDetail" alt={producto.name} />
                    <div className='itemDetailDiv'>
                        <h2 className='textoDetail'>{producto.name}</h2>
                        <p className='textoDetail'>{producto.description}</p>
                        <p className='textoDetail'>Precio: ${producto.price}</p>
                        <ItemCount maxStock={producto.stock} onAdd={handleAddToCart} />
                        <Link to="/" className="botonSalir">x</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
