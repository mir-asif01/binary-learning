import React from 'react';

const Blog = () => {
    return (
        <div className='md:w-3/4 w-full mx-auto p-2 shadow-sm'>
            <h1 className='text-2xl font-semibold mb-5'>Welcome to the Blog Page.</h1>
            <div>
                <div>
                    <h1 className='font-semibold p-2 text-justify text-xl'>Q-1 : What is Cors?</h1>
                    <p className='text-justify border-l-4 border-rose-600 py-2 px-1'>Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.</p>
                </div>
                <div>
                    <h1 className='font-semibold p-2 text-justify text-xl'>Q-2 : Why we are using Firebase? What other options do you have to implement authentication?</h1>
                    <p className='text-justify border-l-4 border-rose-600 py-2 px-1'>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.<br /><br/>Other interesting free alternatives to Firebase are Supabase, RxDB, Etebase and remoteStorage. Firebase alternatives are mainly Game Development Tools but may also be Web Analytics Services or Social Networks.</p>
                </div>
                <div>
                    <h1 className='font-semibold p-2 text-justify text-xl'>Q-3 : How does the private route work?</h1>
                    <p className='text-justify border-l-4 border-rose-600 py-2 px-1'>
                        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                    </p>
                </div>
                <div>
                    <h1 className='font-semibold p-2 text-justify text-xl'>Q-4 : What is Node? How does Node work?</h1>
                    <p className='text-justify border-l-4 border-rose-600 py-2 px-1'>
                        Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.<br/><br/>Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;