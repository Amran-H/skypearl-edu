import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Quiz = ({ quiz }) => {
    const { question, options, correctAnswer, id } = quiz;
    console.log(options)
    return (

        <Col className='rounded '>
            <Card className='bg-danger rounded py-3 my-3 ' style={{ width: '18rem' }}>
                <Card.Body >
                    <Card.Title>{question}</Card.Title>
                    <Card.Text>
                        <p><input type="radio"></input> {options[0]}</p>
                        <p><input type="radio"></input> {options[1]}</p>
                        <p><input type="radio"></input> {options[2]}</p>
                        <p><input type="radio"></input> {options[3]}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default Quiz;