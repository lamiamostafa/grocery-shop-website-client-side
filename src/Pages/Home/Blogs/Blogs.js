import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className="container w-50 mx-auto my-5">
            <h5>Difference between authentication and Authorization</h5>
            <p className="alignment"> Authentication is the process of verifying who a user is. On the Otherhand ,Authorization is the process of verifying what they have access to.Authentication is done before the authorization process, whereas authorization process is done after the authentication process.In authentication process, the identity of users are checked for providing the access to the system.A common example for athentication  process is  entering a username and password when you log in to a website A good example for authorization is house ownership.</p>
            <h5>Why are you use Firebase? what other options do you have to implement authentication?</h5>
            <p className="alignment">We use Firebase as its Database capabilities is robust.Fireabase has a Wide number of services and it is fully free also.Accessible UI and ease of integration, Concise documentation , Static hosting capabilities.
                The options to implement authentication rather than firebase are Parse. Parse is a complete open-source application stack and backend framework that offers a collection of tools and features to help you develop your apps, Back4App, AWS Amplify, Kuzzle , Couchbase, NativeScript, RxDB, Flutter.</p>
            <h5>What Other Services does firebase provide other than authentication?</h5>
            <p className="alignment">Cloud Firestore, Cloud Functions,Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging.</p>
        </div>
    );
};

export default Blogs;