import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props)
    const { picture, price, name } = props.product;
    return (
        <div className='container'>
            <img src={picture} alt="" />
            <h4 className='product-name'>Name:{name}</h4>
            <p className='price'>Price:${price}</p>
            <button className="btn">Add to Cart</button>
        </div>
    );
};

export default Product;