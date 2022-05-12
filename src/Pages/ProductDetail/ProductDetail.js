import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { productId } = useParams();
    return (
        <div>

            <div className='text-center'>
                <Link to="/manageallitems">
                    <button className='btn btn-success my-5'>Proceed to Inventory</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductDetail;