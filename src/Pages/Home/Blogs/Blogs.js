import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className="container w-50 mx-auto my-5">
            <h5>When should you use nodejs and when should you use mongodb?</h5>
            <p className="alignment"> Node. js is mainly used for non-blocking, event-driven servers, as it has single-threaded nature. It's also used for traditional web sites and back-end API services, but it was designed with real-time, push-based architectures in mind.js programmers are mainly claimed to use Node. js for enterprise apps. As, It's a light, scalable and open-source language platform which makes it very easy to build apps even at the enterprise level also. Overall it increases the efficiency of the development process as it fills the gap between frontend and backend applications.<br></br> NoSQL databases like MongoDB are a good choice when the data is document-centric and it doesn't fit well into the schema of a relational database, when we need to accommodate massive scale, when we are rapidly prototyping, and a few other use cases then MongoDb is best choice.</p>
            <h5>Difference between javascript and nodejs? </h5>
            <p className="alignment">We use Firebase as its Database capabilities is robust.Fireabase has a Wide number of services and it is fully free also.Accessible UI and ease of integration, Concise documentation , Static hosting capabilities.
                The options to implement authentication rather than firebase are Parse. Parse is a complete open-source application stack and backend framework that offers a collection of tools and features to help you develop your apps, Back4App, AWS Amplify, Kuzzle , Couchbase, NativeScript, RxDB, Flutter.</p>
            <h5>What Other Services does firebase provide other than authentication?</h5>
            <p className="alignment">Cloud Firestore, Cloud Functions,Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging.</p>
        </div>
    );
};

export default Blogs;