import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className="container w-50 mx-auto my-5">
            <h5>When should you use nodejs and when should you use mongodb?</h5>
            <p className="alignment"> Node. js is mainly used for non-blocking, event-driven servers, as it has single-threaded nature. It's also used for traditional web sites and back-end API services, but it was designed with real-time, push-based architectures in mind.js programmers are mainly claimed to use Node. js for enterprise apps. As, It's a light, scalable and open-source language platform which makes it very easy to build apps even at the enterprise level also. Overall it increases the efficiency of the development process as it fills the gap between frontend and backend applications.<br></br> NoSQL databases like MongoDB are a good choice when the data is document-centric and it doesn't fit well into the schema of a relational database, when we need to accommodate massive scale, when we are rapidly prototyping, and a few other use cases then MongoDb is best choice.</p>
            <h5>Difference between javascript and nodejs? </h5>
            <p className="alignment">JavaScript is a simple programming language and it runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language and it holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.
                Both of these are used for programming. But there is a significant difference between Node.JS and Javascript. JavaScript is a lightweight scripting language that is object-oriented. It is used for developing HTML pages that are dynamic and have various interactive effects on their web pages. The Node.JS, on the other hand, helps in representing a list of all the methods and objects that the JavaScript code can access when run via node interpreters or in the V8 engine.</p>
            <h5>Differences between sql and nosql databases?</h5>
            <p className="alignment">SQL databases are mainly vertically scalable, while NoSQL databases are mainly horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.SQL databases have fixed or static or predefined schema. NoSQL databases have dynamic schema. SQL databases display data in form of tables so it is known as table-based database. NoSQL databases display data as collection of key-value pair, documents, graph databases or wide-column stores.</p>
        </div>
    );
};

export default Blogs;