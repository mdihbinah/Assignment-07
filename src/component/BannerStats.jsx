'use client'
import { BannerContext } from "@/contextApi/UserContext";
import { useContext, useEffect } from "react";


const BannerStats = ({friends}) => {
    const {stats, setStats} = useContext(BannerContext)
    const temp = [0, 0, 0, 0]
    friends.map( friend => {
        const {days_since_contact, status, goal, next_due_date} = friend
        temp[0] += 1
        if (status == 'on-track'){
            temp[1] += 1
        }

        if(days_since_contact >= goal){
            temp[2] += 1
        }
        const date = new Date(next_due_date)
        if(date.getMonth() == 3){
            temp[3] += 1
        }
    }
)
    useEffect(() => {
    setStats(temp);
    }, []);
    return (
        <div>
            
        </div>
    );
};

export default BannerStats;