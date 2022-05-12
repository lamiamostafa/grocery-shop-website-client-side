import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    })
    return (
        <div>
            <h2>You are about to book: {product.name}</h2>
            <div className='text-center'>
                <Link to="/manageallitems">
                    <button className='btn btn-success my-5'>Proceed to Inventory</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductDetail;