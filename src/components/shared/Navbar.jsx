'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from "@/assets/user.png"
import navLogo from "@/assets/nav-logo.png"
import { usePathname } from 'next/navigation';

const Navbar = () => {

    const pathname = usePathname()

    const navLinks = <>
        <li><Link className={pathname === '/' ? "border px-3 py-1" : ""} href="/">Home</Link></li>
        <li><Link className={pathname === '/about' ? "border px-3 py-1" : ""} href="/about">About</Link></li>
        <li><Link className={pathname === '/career' ? "border px-3 py-1" : ""} href="/career">Career</Link></li>
            </>

    return (
        <div className='flex justify-between items-center mt-10'>
            <div className="">
                <Image src={navLogo} alt='Navbar Logo' width={41} height={41} />
            </div>
            <div className="">
                <ul className='flex gap-5'>
                    {navLinks}
                </ul>
            </div>
            <div className="flex gap-2.5">
                <Image src={userAvatar} alt='User Avatar' width={41} height={41} />
                <div className="btn py-3 px-10 bg-[#403F3F] text-white text-xl font-semibold">
                    <Link href="/login">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;