import React from 'react';
import { useLoaderData } from "react-router-dom";
import Topic from '../Topic/Topic';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Topics = () => {
    const topics = useLoaderData();
    console.log(topics.data)
    return (
        <div>
            <h1 className='my-4 text-primary'>You have four topics to choose from</h1>
            <Container>
                <Row>
                    {
                        topics.data.map(topic =>

                            <Topic
                                key={topic.id}

                                topic={topic}
                            ></Topic>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Topics;