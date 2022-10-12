import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { name, logo, total, id } = topic;
    return (
        <Col className='rounded '>
            <Card style={{ width: '18rem' }}>
                <div>
                    <div className='bg-dark'>
                        <Card.Img variant="top" src={logo} />
                    </div>
                    <Card.Body>
                        <Card.Title className="text-danger">Name: {name}</Card.Title>
                        <Card.Text >
                            <p >Total Questions: {total}</p>
                        </Card.Text>
                        <Button variant="primary">
                            <Link className='text-white text-decoration-none' to={`/quizes/${id}`}>
                                Take Quiz
                            </Link>
                        </Button>
                    </Card.Body>
                </div>
            </Card>
        </Col>
    );
};

export default Topic;