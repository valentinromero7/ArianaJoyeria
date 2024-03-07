import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../context/cartContext';
import productosJson from '../productos/productos.json';
import './itemDetailContainer.css';
import ItemCount from '../itemCount/itemCount';

function asyncMock(itemId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (itemId === undefined) {
                resolve(productosJson);
            } else {
                const productoFiltrado = productosJson.filter((item) => {
                    return item.id === itemId;
                });
                resolve(productoFiltrado);
            }
        }, 1000);
    });
}

export default function ItemDetailContainer() {
    const { itemId } = useParams();
    const [producto, setProducto] = useState([]);
    const { addItem } = useCart();

    useEffect(() => {
        asyncMock(itemId).then((res) => setProducto(res));
    }, [itemId]);

    const handleAddToCart = (count) => {
        if (count > 0) {
            const selectedProduct = producto[0];
            addItem(selectedProduct, count);
            console.log(`Se agregaron ${count} unidades del producto "${selectedProduct?.name}" al carrito.`);
        } else {
            console.log("La cantidad debe ser mayor a cero.");
        }
    };    

    return (
        <main>
            <section className='itemDetailContainer'>
                {producto.map((item) => (
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
                ))}
            </section>
        </main>
    );
}