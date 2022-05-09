import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { productId } = useParams();
    return (
        <div>

            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary my-5'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductDetail;