import React from 'react';

const Blogs = () => {
    return (
        <div className='px-10'>
            <h1 className='text-3xl font-semibold text-fuchsia-700'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
             <p> An access token and refresh token are commonly used in authentication and authorization processes. Here's a breakdown of what they are, how they work, and where they should be stored on the client-side:

Access Token:

An access token is a credential that is issued by an authentication server after a user successfully authenticates and grants authorization to a client application.

Refresh Token:

A refresh token is a credential that is also issued by an authentication server along with the access token.
Unlike the access token, the refresh token has a longer lifespan and is used to obtain a new access token when the current one expires.

Storage on the Client-side:

Access tokens should be stored on the client-side, typically in memory or a short-lived storage mechanism, such as a browser's localStorage or session storage.</p>

<h1 className='text-3xl font-semibold text-fuchsia-700 pt-10' >Compare SQL and NoSQL databases?</h1>

<p>
SQL databases have predefined schemas, enforce data consistency and relationships through structured tables, and are suitable for complex, structured data.
NoSQL databases have flexible schemas, allow for rapid development and scalability, and are suitable for unstructured or rapidly changing data.</p>
<h1  className='text-3xl font-semibold text-fuchsia-700 pt-10'>What is express js? What is Nest JS ?</h1>
<p>
Express.js is a lightweight web application framework for Node.js that simplifies the process of building server-side applications and APIs. It provides a minimalistic approach with a robust set of features for routing, middleware, and handling HTTP requests and responses.

NestJS is a progressive, modular, and TypeScript-based framework for building scalable and efficient server-side applications. It follows the architectural principles of Angular and provides a rich ecosystem of modules and dependencies, enabling developers to create highly maintainable and scalable applications using TypeScript.</p>
<h1  className='text-3xl font-semibold text-fuchsia-700 pt-10'>What is MongoDB aggregate and how does it work</h1>
<p className=''>The aggregate function in MongoDB allows for advanced data processing by taking an array of pipeline stages as input. Each stage represents a specific operation, such as filtering, grouping, or sorting. Operators within each stage are used to manipulate and transform the data. Multiple stages can be chained together to perform complex data aggregations and computations.</p>
        </div>
    );
};

export default Blogs;