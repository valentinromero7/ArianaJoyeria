import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

export default function ItemListContainer() {
    const [productos, setProductos] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {

        const db = getFirestore();
        let productosRef = collection(db, "productos");

        if (categoryId) {
            productosRef = query (
                productosRef,
                where("category", "==", categoryId)
            );
        }

        getDocs(productosRef)
        .then((collection) => {
            console.log("Documentos de la colección:", collection.docs);
            const productos = collection.docs.map((doc) => {
                const data = doc.data();
                return data;
            });
            console.log("Productos mostrados:", productos);
            setProductos(productos);
        })
        .catch((error) => {
            console.error("Error al recuperar productos:", error);
        });

    }, [categoryId]);

    return (
        <main>
            <section className="item-list-container">
                {productos.map((item) => (
                    <div className="cards" key={item.id}>
                        <img src={item.img}className="imagenProducto" alt={item.name} />
                        <Link to={`/item/${item.id}`} className="linkDetail">
                            <h2 className="nombre-prod">{item.name}</h2>
                        </Link>
                        <p className="textos-chicos-cards">{item.description}</p>
                        <p className="textos-chicos-cards">${item.price}</p>
                    </div>
                ))}
            </section>
        </main>
    );
}

