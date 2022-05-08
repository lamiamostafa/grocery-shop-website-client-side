import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const handleCheckOut = () => {
        toast('Thanks your data is Recorded');

    }
    return (


        < div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-2'>Please Checkout your booking</h2>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="How Long you suffered?" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Your Diseases" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Appointment Time" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Appointment Date" />
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