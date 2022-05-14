import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import useProductDetail from '../../../hooks/useProductDetail';

const Checkout = () => {
    const { productId } = useParams();
    const [product] = useProductDetail();
    const [user] = useAuthState(auth);

    const handleCheckOut = () => {

        toast('Thanks your data is Recorded');

    }
    const handlePlaceOrder = data => {

        const url = `http://localhost:5000/order`;
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

    }

    return (


        < div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-2'>Please Checkout your booking</h2>
            <Form onSubmit={handlePlaceOrder}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" value={user.displayName} placeholder="Your Name" required readOnly disabled />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" value={user.email} placeholder="Your email" required readOnly disabled />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" name="address" placeholder="Your Address" required autoComplete="off" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" name="product" placeholder="product name" value={product.name} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" name="phone" placeholder="phone No" required />
                </Form.Group>
                <Button onClick={handleCheckOut} variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    CheckOut
                </Button>
            </Form>
            <ToastContainer />
        </div>
    );
};

export default Checkout;