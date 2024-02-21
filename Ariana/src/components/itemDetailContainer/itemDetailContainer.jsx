import React, { useEffect, useState} from 'react'
import productosJson from '../productos/productos.json'
import { useParams } from 'react-router-dom'

function asyncMock(itemId) {
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            if (itemId === undefined) {
                resolve(productosJson)
            }
            else{
                const productoFiltrado = productosJson.filter((item)=>{
                    return item.id===item
                })
            }
        },1000);
    })
}
export default function itemDetailContainer(){

    const {itemId} = useParams ()
    const [producto,setProducto] = useState([])

    useEffect(() => {
        asyncMock(itemId).then((res) => setProducto(res))
    },[])

    return (
        <main>
            <section>
                {producto.map((item) => (
                    <h2>{item.name}</h2>
                ))}
            </section>
        </main>
    )
}