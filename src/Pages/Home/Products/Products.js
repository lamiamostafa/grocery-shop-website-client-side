import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import Loading from '../../Shared/Loading/Loading';
import './Products.css';

const Products = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => {
                setIsLoading(false);
                setProducts(data)
            });

    }, [])
    return (
        <div id="products" className='container'>
            <div className="row">
                <div id="products" className='container'>
                    <div className="row">
                        <h1 className='text-primary text-center mt-5 mb-4 heading'> Our <span>Products</span></h1>
                        <div className="products-container ">
                            {isLoading && <Loading></Loading>}
                            {

                                products.slice(0, 6).map(product => <Product
                                    key={product._id}
                                    product={product}
                                >
                                </Product>)
                            }
                            <Link to="/manageallitems">Manage Inventories</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Products;