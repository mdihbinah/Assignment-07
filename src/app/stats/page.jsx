'use client'
import { UserContext } from '@/contextApi/UserContext';
import { useContext } from 'react';
import { BiFileBlank } from 'react-icons/bi';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const colors = ['#0088FE', '#00C49F', '#FFBB28'];
const Stats = () => {
    const {user, setUser} = useContext(UserContext)

    const data = [
    { name: 'Call', value: 0 },
    { name: 'Text', value: 0 },
    { name: 'Video', value: 0 },
    ];

    data[0].value = user.filter(ele => ele[0] == 1).length
    data[1].value = user.filter(ele => ele[0] == 2).length
    data[2].value = user.filter(ele => ele[0] == 3).length  
    

    return (
        <div className='w-[90%] my-5 mx-auto'>
            <h2 className='mb-2 text-xl md:text-4xl'>Friedship Analytics</h2>
            <div className={`bg-gray-800 flex flex-col justify-center items-center gap-3 p-10 my-5 rounded-md md:rounded-2xl text-xl text-center md:text-4xl ${user.length == 0? '': 'hidden'}`}>
            <BiFileBlank className="lg:text-8xl" />
                There are no information.
            </div>
            <div className={`p-10 rounded-4xl bg-gray-800 ${user.length == 0? 'hidden': ''}`}>
                <p className='text-xl md:text-3xl'>By Interaction Type</p>
                <div className="flex justify-center items-center">
                    <ResponsiveContainer width={300} height={300}>
                        <PieChart >
                            <Pie data={data} dataKey='value' outerRadius={100} label>
                                {
                                    data.map((entry, index) => (
                                        <Cell key={index} fill={colors[index]} />
                                    ))
                                }
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Stats;