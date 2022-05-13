import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/product`;
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
            <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                <input className="mb-2" placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className="mb-2" placeholder='Description' {...register("description")} />
                <input className="mb-2" placeholder='Price' type="number" {...register("price")} />
                <input className="mb-2" placeholder='Quantity' type="number" {...register("quantity")} />
                <input className="mb-2" placeholder='Photo URL' type="text" {...register("img")} />
                <input className="mb-2" placeholder='SupplierName' type="text" {...register("supplierName")} />
                <input type="submit" value='Add Product' />
            </form>

        </div>
    );
};

export default AddProduct;