import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const quizes = useLoaderData();
    console.log(quizes.data.questions)
    return (
        <div className='container '>
            quiz: {quizes.data.questions.length}
            <br />
            <div className='m-auto'>
                {
                    quizes.data.questions.map(quiz => <Quiz
                        key={quiz.id}
                        quiz={quiz}
                    ></Quiz>)
                }
            </div>
        </div>
    );
};

export default Quizes;