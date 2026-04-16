import DateC from '@/component/Date';
import Image from 'next/image';
import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { FaVideo } from 'react-icons/fa';
import { FiArchive } from 'react-icons/fi';
import { MdAddIcCall, MdOutlineTextsms } from 'react-icons/md';
import { RiNotificationSnoozeLine } from 'react-icons/ri';

const page = async({params}) => {
    const {friendId} = await params
    const res = await fetch("http://localhost:3000/friends.json")
    const friends = await res.json()
    const friend = friends.find(friend => friend.id == friendId)
    const {id, email, name, picture, bio,tags,status,next_due_date,goal,days_since_contact} = friend

    return (
        <div className='w-[90%] mx-auto grid md:grid-cols-5 md:gap-5 space-y-5 my-10'>
            <div className="flex flex-col space-y-5 col-span-2">
                <div className="border-2 border-accent p-3 flex flex-col justify-center items-center gap-2 rounded-xl">
                    <Image src={picture} alt='name' width='100' height='100' className='rounded-full' ></Image>
                                <p className='text-xl font-bold'>{name}</p>
                                <div className="flex gap-2">
                                    {
                                        tags.map((ele, ind) => <p key={ind} className='bg-accent py-1 px-4 rounded-full'>{ele}</p>)
                                    }
                                </div>
                                <p className={`${(status == 'overdue')? 'badge badge-primary': (status == 'on-track')? 'badge badge-info': 'badge badge-error'}`} >{status}</p>
                                <p className='text-center text-sm'>{bio}</p>
                                <p>{email}</p>
                </div>
                <div className="space-y-3">
                    <div className="flex justify-center items-center gap-3 bg-gray-500 rounded-sm p-2"><RiNotificationSnoozeLine />Snooze 2 Weeks</div>
                    <div className="flex justify-center items-center gap-3 bg-gray-500 rounded-sm p-2"><FiArchive />Archive</div>
                    <div className="flex justify-center items-center gap-3 bg-gray-500 rounded-sm p-2"><AiOutlineDelete />Delete</div>
                </div>
            </div>
            <div className="col-span-3 grid md:grid-rows-3 gap-10">
                <div className="grid md:grid-cols-3 gap-5">
                    <div className="flex flex-col justify-center items-center p-3 gap-1 bg-gray-500 rounded-xl">
                        <h3 className='text-3xl font-bold'>{days_since_contact}</h3>
                        <p>Days Since Contact</p>
                    </div>
                    <div className="flex flex-col justify-center items-center p-3 gap-1 bg-gray-500 rounded-xl">
                        <h3 className='text-3xl font-bold'>{goal}</h3>
                        <p>Goal (Days)</p>
                    </div>
                    <div className="flex flex-col justify-center items-center p-3 gap-1 bg-gray-500 rounded-xl">
                        <h3 className='text-3xl font-bold'><DateC date={new Date(`${next_due_date}`)} ></DateC></h3>
                        <p>Next Due</p>
                    </div>
                </div>
                <div className="flex flex-col justify-around gap-3 rounded-lg bg-gray-500 p-3">
                    <div className="flex justify-between items-center">
                        <h2>Relationship Goal</h2>
                        <button className='btn'>Edit</button>
                    </div>
                    <p>Connect every {goal} days</p>
                </div>
                <div className="flex flex-col justify-between space-y-3">
                    <p>Quick Check-In</p>
                    <div className="grid grid-cols-3 gap-3">
                        <div className="flex flex-col items-center gap-2 bg-gray-500 p-5 rounded-sm">
                            <MdAddIcCall />
                            <p>Call</p>
                        </div>
                        <div className="flex flex-col items-center gap-2 bg-gray-500 p-5 rounded-sm">
                            <MdOutlineTextsms />
                            <p>Text</p>
                        </div>
                        <div className="flex flex-col items-center gap-2 bg-gray-500 p-5 rounded-sm">
                            <FaVideo />
                            <p>Video</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;