import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
// import useProducts from '../../hooks/useProducts';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const email = user.email;
        fetch(`http://localhost:5000/product?email=${email}`)
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [user]);

    return (
        <div>
            <h2>Your orders:{products.length}</h2>

        </div>
    );
};

export default MyItems;