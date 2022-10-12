import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Topic = ({ topic }) => {
    const { name, logo, total } = topic;
    return (
        <div className='rounded '>
            <Card style={{ width: '18rem' }}>
                <div style={{}}>
                    <div className='bg-dark'>
                        <Card.Img variant="top" src={logo} />
                    </div>
                    <Card.Body>
                        <Card.Title className="text-danger">Name: {name}</Card.Title>
                        <Card.Text >
                            <p >Total Questions: {total}</p>
                        </Card.Text>
                        <Button variant="primary">Take Quiz</Button>
                    </Card.Body>
                </div>
            </Card>

        </div>

    );
};

export default Topic;