import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../context/cartContext';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import './itemDetailContainer.css';
import ItemCount from '../itemCount/itemCount';

export default function ItemDetailContainer() {
    const { itemId } = useParams();
    const [item, setItem] = useState();
    const { addItem } = useCart();

    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const db = getFirestore();
                const productoRef = doc(db, "productos", itemId);
                const productoSnapshot = await getDoc(productoRef);
                if (productoSnapshot.exists()) {
                    // El documento existe, entonces puedes acceder a sus datos
                    const productoData = { id: productoSnapshot.id, ...productoSnapshot.data() };
                    console.log("Producto encontrado:", productoData);
                    return productoData;
                } else {
                    console.log("No se encontró ningún producto con el ID especificado:", itemId);
                    return null; // Devolver null cuando el producto no existe
                }
            } catch (error) {
                console.error("Error fetching producto:", error);
                return null; // Devolver null en caso de error
            }
        };
    
        fetchProducto().then(item => {
            if (item) {
                setItem(item);
            }
        });
    
    }, [itemId]);
    
    

    const handleAddToCart = (count) => {
        if (count > 0 && item) {
            addItem(item, count);
            console.log(`Se agregaron ${count} unidades del producto "${item.name}" al carrito.`);
        } else {
            console.log("La cantidad debe ser mayor a cero o el producto no está disponible.");
        }
    };

    if (!item) {
        return <p>Cargando producto...</p>;
    }

    return (
        <main>
            <section className='itemDetailContainer'>
                <div className='itemDetailContainerDiv' key={item.id}>
                    <img src={`../${item.img}`} className="imagenProductoDetail" alt={item.name} />
                    <div className='itemDetailDiv'>
                        <h2 className='textoDetail'>{item.name}</h2>
                        <p className='textoDetail'>{item.description}</p>
                        <p className='textoDetail'>Precio: ${item.price}</p>
                        <ItemCount maxStock={item.stock} onAdd={handleAddToCart} />
                        <Link to="/" className="botonSalir">x</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
