import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
    const { _id, name, img, description, price, quantity, supplierName } = product;
    const navigate = useNavigate();

    const navigateToProductDetail = id => {
        navigate(`/product/${id}`);
    }
    return (

        <div className='g-5 col-sm-12 col-md-6 col-lg-4 product'>
            <div className="card " style={{ width: "18rem" }}>
                <img src={img} className="card-img-top text-center" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"><small>{description}</small></p>
                    <p className="card-text">Price:${price}</p>
                    <p className="card-text">Quantity:{quantity}</p>
                    <p className="card-text">DeliveredBy:{supplierName}</p>

                    {/* <button onClick={() => navigateToProductDetail(_id)} className='btn btn-primary updateButton button'>Add Items: {name}</button> */}
                    <button onClick={() => navigateToProductDetail(_id)} className='btn btn-primary updateButton button'> Stock Update</button>

                </div>
            </div>
        </div>
    );
};

export default Product;