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
    }, []);
    return (
        <div className=' mx-auto col-sm-12 col-md-6 col-lg-4 product'>
            <div className="card text-center " style={{ width: "18rem" }}>
                <img src={product.img} className="card-img-top text-center" alt="..." />
                <div className="card-body">
                    <p className="card-title">ID:{product._id}</p>
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text"><small>{product.description}</small></p>
                    <p className="card-text">Price:${product.price}</p>
                    <p className="card-text">Quantity:{product.quantity}</p>
                    <p className="card-text">DeliveredBy:{product.supplierName}</p>
                    <button className='btn btn-success my-2 '>Delivered</button>
                    <div className="d-flex">
                        <input className="w-50" type="number" name="restock" id="" />
                        <button className='btn btn-success mx-2'>Restock</button>
                    </div>


                </div>
            </div>


            {/* <div className='text-center'>
                <Link to="/manageallitems">
                    
                </Link>
            </div> */}
        </div>
    );
};

export default ProductDetail;