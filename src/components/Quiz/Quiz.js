import React from 'react';
import Card from 'react-bootstrap/Card';

const Quiz = ({ quiz }) => {
    const { question, options, correctAnswer, id } = quiz;
    return (
        <div className='justify-content-center'>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{question}</Card.Title>
                    <Card.Text>
                        {options}
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Quiz;