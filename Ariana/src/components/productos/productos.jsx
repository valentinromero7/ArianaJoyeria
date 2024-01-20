import React from 'react'

const Productos = ({img,nombre,precio}) => {
    return (
        <div className= "cards">
            <img src={img}/>
            <h3>{nombre}</h3>
            <p>$ {precio}</p>
        </div>
    )
}

export default Productos