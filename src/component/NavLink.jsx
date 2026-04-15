'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
    const pathname = usePathname()
    const isActive = pathname === href
    return (
        <li>
            <Link 
            href={href}
            className={`${isActive ? 'border-2 border-accent text-accent': ''}`}>
                {children}
            </Link></li>
    );
};

export default NavLink;