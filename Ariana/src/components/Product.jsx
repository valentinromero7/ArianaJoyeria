import React from 'react'

const Product = ({img, titulo, precio}) => {
    return (
        <div>
            <img src={img} height={380} width={300} alt="img1" />
            <h1>{titulo}</h1>
            <p>{precio}</p>
        </div>
    )
}

export default Product