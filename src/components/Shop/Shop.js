import React, { useEffect, useState } from 'react';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(
        () => {
            fetch('data.json')
                .then(res => res.json())
                .then(data => setProducts(data))
        }, [])
    return (
        <div>
            this is shop
        </div>
    );
};

export default Shop;