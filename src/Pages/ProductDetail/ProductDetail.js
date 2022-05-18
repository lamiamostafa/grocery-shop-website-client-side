import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useProductDetail from '../../hooks/useProductDetail';


const ProductDetail = () => {
    const { productId } = useParams();
    const [item, setItem] = useProductDetail(productId);
    const [updateQuantity, setUpdateQuantity] = useState({});
    // const [item, setItem] = useState({});

    // const [product, setProduct] = useState({});
    // const { quantity } = product;
    // useEffect(() => {
    //     const url = `http://localhost:5000/product/${productId}`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setItem(data));
    // }, []);

    const delivered = productId => {

        const oldQuantity = parseInt(item.quantity);
        const newQuantity = oldQuantity - 1;

        const url = `http://localhost:5000/product/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ newQuantity })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUpdateQuantity(data);

                alert("Delivered item successfully");

            });

    }

    const handleStockQuantity = event => {
        event.preventDefault();
        const oldQuantity = parseInt(item.quantity);
        console.log(oldQuantity);
        const quantity = parseInt(event.target.quantity.value);
        console.log(quantity);
        const newQuantity = oldQuantity + quantity;


        const url = `http://localhost:5000/product/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ newQuantity })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUpdateQuantity(data);
                alert("Restock item successfully");

            });
    }
    return (
        <div className=' mx-auto col-sm-12 col-md-6 col-lg-4 product'>
            <div className="card text-center " style={{ width: "18rem" }}>
                <img src={item.img} className="card-img-top text-center" alt="..." />
                <div className="card-body">
                    <p className="card-title">ID:{item._id}</p>
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text"><small>{item.description}</small></p>
                    <p className="card-text">Price:${item.price}</p>
                    <p className="card-text">Quantity:{item.quantity}</p>
                    <p className="card-text">DeliveredBy:{item.supplierName}</p>
                    <button onClick={() => delivered(productId)} className='btn btn-success my-2 '>Delivered</button>
                    <form onSubmit={handleStockQuantity} className="d-flex">
                        <input className="w-50 text-successs" type="number" name="quantity" id="quantity" />

                        <button className='btn btn-success mx-2'>Restock</button>
                    </form>


                </div>
            </div>


            <div className='text-center'>
                <Link to="/manageallitems">Manage Inventories</Link>
            </div>
        </div>
    );
};

export default ProductDetail;