import React from 'react';
import useProducts from '../../hooks/useProducts';
import { useNavigate } from 'react-router-dom';

const ManageProducts = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useProducts();
    console.log(products);

    const navigateAddProducts = event => {
        navigate('/addproduct');
    }
    const handleDelete = id => {
        const proceed = window.confirm("Are you sure?");
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining)

                })

        }
    }
    return (
        <div className="row">
            <h2 className=' text-center mt-5 mb-4 heading'> Manage <span>Your Products</span></h2>
            <div className="products-container ">
                {
                    products.map(product => <div key={product._id} className='g-5 col-sm-12 col-md-6 col-lg-4 product'>
                        <div className="card " style={{ width: "18rem" }}>
                            <img src={product.img} className="card-img-top text-center" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text"><small>{product.description}</small></p>
                                <p className="card-text">Price:${product.price}</p>
                                <p className="card-text">Quantity:{product.quantity}</p>
                                <p className="card-text">DeliveredBy:{product.supplierName}</p>

                                <button onClick={() => handleDelete(product._id)} className='btn btn-primary updateButton button'>Delete: {product.name}</button>


                            </div>
                        </div>
                    </div>)
                }
                <div className="mx-auto">
                    <button onClick={navigateAddProducts} className='btn btn-primary updateButton button '>ADD ITEM </button>
                </div>

            </div>

        </div>
    );
};

export default ManageProducts;