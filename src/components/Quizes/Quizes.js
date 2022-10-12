import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Quizes = () => {
    const quizes = useLoaderData();
    console.log(quizes.data.questions)
    return (
        <div className='container '>
            <h2 className='mt-4'> Total question: {quizes.data.questions.length}</h2>
            <br />

            <Container>
                <Row className=''>
                    {
                        quizes.data.questions.map(quiz => <Quiz
                            key={quiz.id}
                            quiz={quiz}
                        ></Quiz>)
                    }

                </Row>
            </Container>
        </div>
    );
};

export default Quizes;