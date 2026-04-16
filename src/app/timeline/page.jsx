'use client'
import { UserContext } from "@/contextApi/UserContext";
import { useContext } from "react";


const TimeLine = () => {
    const {user} = useContext(UserContext)
    console.log(user);
    return (
        <div className="w-[90%]">
            <h2>TimeLine</h2>
            <div className="">

            </div>
        </div>
    );
};

export default TimeLine;