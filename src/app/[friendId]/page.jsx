import FriendsDetails from '@/component/FriendsDetails';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';


const page = async({params}) => {
    const {friendId} = await params
    const res = await fetch("http://localhost:3000/friends.json")
    const friends = await res.json()
    const friend = friends.find(friend => friend.id == friendId)

    if(!friend){
        notFound()
    }

    return (
        <div className="">
            <FriendsDetails friend={friend}></FriendsDetails>
        </div>
    );
};

export default page;