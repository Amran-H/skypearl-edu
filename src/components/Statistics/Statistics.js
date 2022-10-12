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
            <h2 className='my-5'>A LineChart based on the quantity of questions</h2>
            <div className=' d-flex justify-content-center '>
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

        </div>
    );
};

export default Statistics;