'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyNavLink = () => {
    const pathname = usePathname();

    const getClass = (path) => {
        return (
            pathname === path ? "text-blue-500 font-semibold" : "")
    }
// console.log('parthname',pathname);
    return (
        <div className='lg:flex'>
            <li><Link href={'/'} className={getClass('/')}>Home</Link></li>
            <li><Link href={'/apps'} className={getClass('/apps')}>Apps</Link></li>
            <li><Link href={'/installation'} className={getClass('/installation')}>installation</Link></li>
            <li><Link href={'/dashboard'} className={getClass('/dashboard')}>Dashboard</Link></li>
        </div>
    );
};

export default MyNavLink; 