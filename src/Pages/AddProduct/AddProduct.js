import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [addProduct, setAddProduct] = useState();
    const [user] = useAuthState(auth);
    const onSubmit = data => {
        const newEmail = user.email;
        const newField = { ...addProduct, email: newEmail };
        setAddProduct(newField);
        console.log(data);
        // const email = user.email
        // axios.post('http://localhost:5000/addproduct', data.email)
        //     .then(response => {
        //         console.log(response);
        //     })
        //     try {
        //         axios.post("http://localhost:5000/addproduct", {
        //             email: user.email,
        //             productName: data.productName,
        //             description: data.description,
        //             image: data.image,
        //             supplierName: data.supplierName,
        //             quantity: data.quantity,
        //             price: data.price
        //         })
        //             .then(res => { toast.success("Added success", { id: "success" }) })
        //     } catch {
        //         toast.error("Added failed", { id: "failed" })
        //     }

        // };

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