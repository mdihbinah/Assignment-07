import Link from "next/link";
import NavLink from "./NavLink";
import { TiHomeOutline } from "react-icons/ti";
import { IoTimeOutline } from "react-icons/io5";
import { ImStatsDots } from "react-icons/im";




const Navbar = () => {
    const links = <>
    <NavLink href={'/'}><TiHomeOutline /> Home</NavLink>
    <NavLink href={'/timeline'}><IoTimeOutline />Timeline</NavLink>
    <NavLink href={'/stats'}><ImStatsDots />Stats</NavLink>
</>

    return (
        <div>
            <div className="navbar bg-gray-800 shadow-sm">
  <div className="navbar-start">
    <Link href='/' className="btn btn-ghost text-xl"><span className="font-bold text-2xl">Keen</span><span className="opacity-80">Keeper</span> </Link>
  </div>
  <div className="navbar-end">
    <ul className="menu menu-horizontal hidden md:flex gap-3 px-1 mr-3">
      {links}
    </ul>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-32 p-2 shadow">
        {links}
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;