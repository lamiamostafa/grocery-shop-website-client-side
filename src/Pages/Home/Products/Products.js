import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [])
    return (
        <div id="products" className='container'>
            <div className="row">
                <div id="products" className='container'>
                    <div className="row">
                        <h1 className='text-primary text-center mt-5 mb-4 heading'> Our <span>Products</span></h1>
                        <div className="products-container ">
                            {
                                products.slice(0, 6).map(product => <Product
                                    key={product.id}
                                    product={product}
                                >
                                </Product>)
                            }
                            <Link to="/">Show More</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Products;