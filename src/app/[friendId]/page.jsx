import FriendsDetails from '@/component/FriendsDetails';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';


const page = async({params}) => {
    const {friendId} = await params
    const res = await fetch("/friends.json", {cache: "no-store"})
    const friends = await res.json()
    console.log(friends);
    const friend = friends.find(friend => friend.id == friendId)

    if(!friend){
        console.log(friendId);
        notFound()
    }

    return (
        <div className="">
            <FriendsDetails friend={friend}></FriendsDetails>
        </div>
    );
};

export default page;