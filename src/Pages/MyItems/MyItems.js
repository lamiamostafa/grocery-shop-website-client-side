import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { signOut } from 'firebase/auth';
// import axiosPrivate from '../../api/axiosPrivate';
// import Product from '../Home/Product/Product';

// import useProducts from '../../hooks/useProducts';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    // const [products, setProducts] = useProducts();
    // const navigate = useNavigate();
    useEffect(() => {
        const email = user.email;
        const getItems = async () => {
            const url = `http://localhost:5000/myitem?email=${email}`;

            const { data } = await axios.get(url,
                {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                }
            );
            setMyItems(data);


        }
        getItems();


    }, [user]);
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
                    const remaining = myItems.filter(myItem => myItem._id !== id);
                    setMyItems(remaining)

                })

        }
    }

    return (
        <div className="row">
            <h2 className=' text-center mt-5 mb-4 heading'>{user.name} <span>Your Adding Products</span></h2>
            <div className="products-container ">
                {
                    myItems.map(myItem => <div key={myItem._id} className='g-5 col-sm-12 col-md-6 col-lg-4 product'>
                        <div className="card " style={{ width: "18rem" }}>
                            <img src={myItem.img} className="card-img-top text-center" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{myItem.name}</h5>
                                <p className="card-text"><small>{myItem.description}</small></p>
                                <p className="card-text">Price:${myItem.price}</p>
                                <p className="card-text">Quantity:{myItem.quantity}</p>
                                <p className="card-text">DeliveredBy:{myItem.supplierName}</p>

                                <button onClick={() => handleDelete(myItem._id)} className='btn btn-primary updateButton button'>Delete: {myItem.name}</button>
                            </div>
                        </div>
                    </div>)
                }

            </div>

        </div>

    );


};

export default MyItems;