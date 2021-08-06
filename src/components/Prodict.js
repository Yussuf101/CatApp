import React from 'react'

function Product(props) {
    const{product, AddItems} = props;
    return (
        <div>
            <img className="" src={product.image} alt={product.name}/>
            <h3>{product.name}</h3>
            <div>£{product.price}</div>
            <div>
                <button onClick={()=>AddItems(product) }>Add to Basket </button>
            </div>
        </div>
    )
}

export default Product;
