import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';


const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const onSubmit = data => {
        console.log(data);
        data.email = user.email
        // axios.post('http://localhost:5000/addproduct', order)
        //     .then(response => {
        //         console.log(response);
        //     })

        const url = `http://localhost:5000/addproduct`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    return (
        <div className='w-50 mx-auto'>
            <h1>Please Add a Product</h1>
            {/* <p style={{ textTransform: "lowercase" }}>User:{user.email}</p> */}
            <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                <input className="mb-2 " style={{ textTransform: "lowercase" }} placeholder='Adminemail' value={user.email} {...register("email", { required: true, maxLength: 20 })} />
                <input className="mb-2" placeholder='Product Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className="mb-2" placeholder='Description' {...register("description")} />
                <input className="mb-2" placeholder='Price' type="number" {...register("price")} />
                <input className="mb-2" placeholder='Quantity' type="number" {...register("quantity")} />
                <input className="mb-2" placeholder='Photo URL' type="text" {...register("img")} />
                <input className="mb-2" placeholder='SupplierName' type="text" {...register("supplierName")} />
                <input type="submit" value='Add New Item' />
            </form>

        </div>
    );
};

export default AddProduct;