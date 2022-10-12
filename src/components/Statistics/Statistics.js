import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const data = [
        {
            name: "React",
            total: 8,
        },
        {
            name: "JavaScript",
            total: 9,
        },
        {
            name: "CSS",
            total: 8,
        },
        {
            name: "Git",
            total: 11,
        },
    ];
    return (
        <div className=''>

            <LineChart
                width={380}
                height={300}
                data={data}
            >
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
            </LineChart>

        </div>
    );
};

export default Statistics;