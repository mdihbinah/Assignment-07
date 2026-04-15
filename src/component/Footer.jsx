import Link from 'next/link';
import text from './text.module.css'
import { FaInstagram } from 'react-icons/fa';
import { CiFacebook } from 'react-icons/ci';
import { BsTwitterX } from 'react-icons/bs';
const Footer = () => {
    return (
        <div className="bg-[#244D3F]">
            <div className='w-[90%] m-auto flex flex-col justify-center items-center gap-10 p-5'>
                <div className="flex flex-col justify-center items-center gap-2">
                    <h1 className='text-3xl
                    '>KeenKeeper</h1>
                    <p className={`${text.text} text-xs`} >Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <div className="flex flex-col items-center">
                        <h3>Social Links</h3>
                        <ul className='flex gap-2 mt-1'>
                            <li><a href='//www.instagram.com' target="_blank"><FaInstagram /></a></li>
                            <li><a href='//www.facebook.com/' target="_blank"><CiFacebook /></a></li>
                            <li><a href='//www.x.com/' target="_blank"><BsTwitterX /></a></li>
                        </ul>
                    </div>
                </div>
                <div className={`${text.text} flex justify-between gap-5 text-xs w-full`}>
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                    <div className="flex gap-3">
                        <p>Privacy Policy</p>
                        <p> Terms of Service </p>
                        <p>Cookies</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;