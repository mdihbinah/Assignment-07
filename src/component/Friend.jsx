import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Friend = ({friend}) => {
    const {id,name,picture,days_since_contact,tags,status} = friend
    return (
        <Link href={`/${id}`} className='border-3 border-accent rounded-lg p-4 flex flex-col justify-center items-center gap-2'>
            <Image src={picture} alt='name' width='100' height='100' className='rounded-full' ></Image>
            <p className='text-xl font-bold'>{name}</p>
            <p className='opacity-70'>{days_since_contact}d ago</p>
            <div className="flex gap-2">
                {
                    tags.map((ele, ind) => <p key={ind} className='bg-accent py-1 px-4 rounded-full'>{ele}</p>)
                }
            </div>
            <p className={`${(status == 'overdue')? 'badge badge-primary': (status == 'on-track')? 'badge badge-info': 'badge badge-error'}`} >{status}</p>
            
        </Link>
    );
};

export default Friend;