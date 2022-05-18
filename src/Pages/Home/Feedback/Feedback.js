import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Feedback = () => {
    const handleFeedBack = () => {
        toast('Thanks for your feedback');
    }
    return (
        <div id="feedback" className='container w-50 mx-auto my-5' >
            <h2 className='text-success text-center mt-2'>We Welcome Your Questions</h2>
            <Form >
                <Form.Group className="mb-2 pt-2" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Any Problem? Yes/No " />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Enter Your Message" />
                </Form.Group>
                <Button onClick={handleFeedBack} variant="success w-50 mx-auto d-block my-4" type="submit">
                    Submit
                </Button>
                <ToastContainer></ToastContainer>
            </Form>

        </div>
    );
};

export default Feedback;