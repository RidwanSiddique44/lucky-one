import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const { cart } = props;
    // console.log(cart)
    return (
        <div className='cart-style'>
            <h2>Selected Items</h2>
            <hr />
            <h4>
                {cart}
            </h4>
            <button className="btn2">Choose one</button>
            <button className="btn3">Choice again</button>

        </div>
    );
};

export default Cart;