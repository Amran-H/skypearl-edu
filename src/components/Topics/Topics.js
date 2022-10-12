import React from 'react';

import { useLoaderData } from "react-router-dom";
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData();
    console.log(topics.data)
    return (
        <div>

            <h4>this is topic: {topics.data.length}</h4>
            {
                topics.data.map(topic => <Topic
                    key={topics.data.id}
                    topic={topic}
                ></Topic>)
            }

        </div>
    );
};

export default Topics;