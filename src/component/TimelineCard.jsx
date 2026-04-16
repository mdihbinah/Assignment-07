import React from 'react';
import { FaVideo } from 'react-icons/fa';
import { MdAddIcCall, MdOutlineTextsms } from 'react-icons/md';
import DateC from './Date';

const TimelineCard = ({data}) => {
    const x = data[0]
    const friend = data[1]
    // console.log(x, friend);
    const date = new Date()

    return (
        <div>
            <div className="">
                <div className="flex gap-10 bg-gray-700 p-3 mt-5 rounded-md">
                    <div className="text-3xl md:text-5xl flex justify-center items-center">
                        {x==1? <MdAddIcCall />: x==2? <MdOutlineTextsms />: <FaVideo />}
                    </div>
                    <div className="">
                        <h1><span className='font-bold text-xl'>Text</span> with {friend.name}</h1>
                        <div className="">{<DateC date={date} ></DateC>}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimelineCard;