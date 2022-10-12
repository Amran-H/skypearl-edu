import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div className='container mt-5'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header ><h2 className='text-danger'>What is purpose of react-router?</h2></Accordion.Header>
                    <Accordion.Body>
                        <h5>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</h5>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h2 className='text-danger'>How does context-API works?</h2></Accordion.Header>
                    <Accordion.Body>
                        <h5> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</h5>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h2 className='text-danger'>What is useref hook in react?</h2></Accordion.Header>
                    <Accordion.Body>
                        <h5>  The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</h5>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
    );
};

export default Blog;