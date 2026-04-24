'use client'
import { useContext } from 'react';
import text from './text.module.css'
import { IoMdAdd } from 'react-icons/io';
import { BannerContext } from '@/contextApi/UserContext';

const Banner = () => {
    const {stats, setStats} = useContext(BannerContext)
    return (
        <div className='mt-5 space-y-4'>
            <div className="flex flex-col justify-center items-center gap-3 text-center">
                <h1 className='text-4xl font-bold'>Friends to keep close in your life</h1>
                <p className={`${text.text}`} >Your personal shelf of meaningful connections. Browse, tend, and nurture the
relationships that matter most.</p>
                <button className='btn btn-success text-white'><IoMdAdd />Add a Friend</button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4">
                <div className="bg-gray-700 lg:w-50 p-4 m-2 text-center rounded-md">
                    <h1>{stats[0]}</h1>
                    <p>Total Friends</p>
                </div>
                <div className="bg-gray-700 lg:w-50 p-4 m-2 text-center rounded-md">
                    <h1>{stats[1]}</h1>
                    <p>On Track</p>
                </div>
                <div className="bg-gray-700 lg:w-50 p-4 m-2 text-center rounded-md">
                    <h1>{stats[2]}</h1>
                    <p>Need Attention</p>
                </div>
                <div className="bg-gray-700 lg:w-50 p-4 m-2 text-center rounded-md">
                    <h1>{stats[3]}</h1>
                    <p>Interactions This Month</p>
                </div>
            </div>
            <div className="divider"></div>
        </div>
    );
};

export default Banner;