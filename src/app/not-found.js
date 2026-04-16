'use client'

import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="h-screen flex flex-col justify-center items-center text-center px-5">
            <h1 className="text-3xl md:text-6xl font-bold text-red-500 space-x-3 md:space-x-6">
                <span>4</span>
                <span className='text-red-700'>0</span>
                <span>4</span>
            </h1>
            <h2 className="text-2xl mt-2 font-semibold">Page Not Found</h2>
            <p className="mt-2 text-gray-400">
                The page you are looking for doesn’t exist.
            </p>


            <Link href="/" className="mt-5 btn  btn-accent">
                Go Back Home
            </Link>
        </div>
    );
}