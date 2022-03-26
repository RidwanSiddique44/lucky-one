import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {

    const { picture, price, name } = props.product;
    return (
        <div className='container'>
            <img src={picture} alt="" />
            <h4 className='product-name'>Name:{name}</h4>
            <p className='price'>Price:${price}</p>
            <button onClick={() => props.handleCart(props.product.name)} className="btn">Add to Cart..
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;