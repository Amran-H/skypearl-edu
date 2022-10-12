import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Slider from '../Slider/Slider';
import Topic from '../Topic/Topic';



const Home = () => {
    const topics = useLoaderData();
    console.log(topics.data)
    return (
        <div>

            <Slider></Slider>
            <br />

            <h3 className='mb-5 mt-4'>Topics: {topics.data.length}</h3>
            <div className='mb-5'>
                <Container>
                    <Row>
                        {
                            topics.data.map(topic => <Topic
                                key={topic.id}
                                topic={topic}
                            ></Topic>

                            )
                        }
                    </Row>
                </Container>
            </div>
        </div >
    );
};

export default Home;