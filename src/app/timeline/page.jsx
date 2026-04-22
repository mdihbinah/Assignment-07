'use client'
import TimelineCard from "@/component/TimelineCard";
import { UserContext } from "@/contextApi/UserContext";
import { useContext, useState } from "react";
import { BiFileBlank } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";


const TimeLine = () => {
    const {user, setUser} = useContext(UserContext)
    const [filterData, setFilterData] = useState(user)

     const handleFilter = (x) => {
        const filtered = user.filter(ele => ele[0] == x)
        setFilterData(filtered)
        // console.log(filterData);
     }

    return (
        <div className="my-5 w-[80%] mx-auto">
            <h2 className="text-4xl font-bold">TimeLine</h2>
            <div className="">
                <div className="dropdown dropdown-center">
                <div tabIndex={0} role="button" className="btn m-1">Filter timeline  <FaAngleDown /> 
                </div>
                <ul tabIndex="-1" className="dropdown-content menu bg-gray-700 rounded-box z-1 w-52 p-2 shadow-sm space-y-2">
                    <li onClick={() => handleFilter(1)} className="hover:bg-gray-700"><a>Call</a></li>
                    <li onClick={() => handleFilter(2)} className="hover:bg-gray-700"><a>Text</a></li>
                    <li onClick={() => handleFilter(3)} className="hover:bg-gray-700"><a>Video</a></li>
                </ul>
                </div>
            </div>
            <div className={`bg-gray-700 flex flex-col justify-center items-center gap-3 p-10 my-5 rounded-md md:rounded-2xl text-xl text-center md:text-4xl ${filterData.length == 0? '': 'hidden'}`}>
                    <BiFileBlank className="lg:text-8xl" />
                    There are no information.
                </div>
            {
                filterData.map((data, ind) => <TimelineCard key={ind} data={data}></TimelineCard>)
            }
        </div>
    );
};

export default TimeLine;