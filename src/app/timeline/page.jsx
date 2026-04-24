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
     const handleSearch = (e) => {
        const searchValue = e.target.value 
        // console.log(searchValue, filterData);
        const searched = user.filter(ele => ele[1].name.includes(searchValue))
        setFilterData(searched)
     }
    return (
        <div className="my-5 w-[80%] mx-auto">
            <h2 className="text-4xl font-bold">TimeLine</h2>
            <div className=" flex justify-between">
                <div className="dropdown dropdown-center">
                <div tabIndex={0} role="button" className="btn m-1">Filter timeline  <FaAngleDown /> 
                </div>
                <ul tabIndex="-1" className="dropdown-content menu bg-gray-700 rounded-box z-1 w-52 p-2 shadow-sm space-y-2">
                    <li onClick={() => handleFilter(1)} className="hover:bg-gray-700"><a>Call</a></li>
                    <li onClick={() => handleFilter(2)} className="hover:bg-gray-700"><a>Text</a></li>
                    <li onClick={() => handleFilter(3)} className="hover:bg-gray-700"><a>Video</a></li>
                </ul>
                </div>
                <div onChange={(e) => handleSearch(e)} className="">
                    <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                        >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search" />
                    </label>
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