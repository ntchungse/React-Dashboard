import React from 'react'

function ProductCard({ image, desc, price }) {
    return (
        <div className="productcard">
            <img src={image} alt={desc} />
            <p>{desc}</p>
            <p>{price}</p>
        </div>
    )
}

export default ProductCard
