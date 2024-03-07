import { useEffect,useState } from "react"
import { Link, useParams } from "react-router-dom"
import "./itemListContainer.css"
import productosJson from '../productos/productos.json'

function asyncMock(categoryId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(categoryId===undefined) {
                resolve(productosJson)
            }
            else{
                const productosFiltrados = productosJson.filter((item) => {
                    return item.categoria === categoryId
                })

                resolve(productosFiltrados)
            }

        }, 1000)
    })
}

export default function ItemListContainer() {
    const { categoryId } = useParams();
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        asyncMock(categoryId).then((res) => setProductos(res))
    }, [categoryId]);

    return (
        <main>
            <section className="item-list-container">
                {productos.map((item) => (
                    <div className="cards" key={item.id}>
                        <img src={`../${item.img}`} className="imagenProducto" alt={item.name} />
                        <Link to={`/item/${item.id}`} className="linkDetail">
                            <h2 className="nombre-prod">{item.name}</h2>
                        </Link>
                        <p className="textos-chicos-cards">{item.description}</p>
                        <p className="textos-chicos-cards">${item.price}</p>
                    </div>
                ))}
            </section>
        </main>
    )
}
