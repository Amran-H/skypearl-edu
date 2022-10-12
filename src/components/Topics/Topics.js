import React from 'react';
import Row from 'react-bootstrap/Row';
import { useLoaderData } from "react-router-dom";
import Topic from '../Topic/Topic';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';



const Topics = () => {
    const topics = useLoaderData();
    console.log(topics.data)
    return (
        <div>

            <h4>Total topics: {topics.data.length}</h4>
            <Container>
                <Row>
                    <Col>
                        <div>
                            {
                                topics.data.map(topic =>

                                    <Topic
                                        key={topics.data.id}
                                        topic={topic}
                                    ></Topic>)
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Topics;