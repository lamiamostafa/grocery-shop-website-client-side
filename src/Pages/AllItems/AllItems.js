import React from 'react';
import { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';


const AllItems = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [])
    return (
        <div>
            <div id="products" className='container'>
                <div className="row">
                    <h1 className='text-primary text-center mt-5 mb-4 heading'> Our <span>All Products</span></h1>
                    <div className="products-container ">
                        {
                            products.map(product => <Product
                                key={product.id}
                                product={product}
                            >
                            </Product>)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllItems;