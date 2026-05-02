'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from "@/assets/user.png"
import navLogo from "@/assets/nav-logo.png"
import { usePathname } from 'next/navigation';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {

    const pathname = usePathname()

    const navLinks = <>
        <li><Link href="/">Home</Link></li>
    </>

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    const avatarSrc = user?.image || userAvatar;
    const userName = user?.name || "Guest";

    return (
        <div className='flex justify-between items-center pt-10 pb-20'>
            <div className="">
                <Image src={navLogo} alt='Navbar Logo' width={41} height={41} />
            </div>
            <div className="">
                <ul className='flex gap-5'>
                    {navLinks}
                </ul>
            </div>

            {isPending ? ("Loading...") : user ? (
                <div className="flex items-center gap-2.5">
                    <h1>Hello, {userName}</h1>
                    <Image src={avatarSrc} alt='User Avatar' width={41} height={41} />
                    <div className="btn bg-[#403F3F] text-white text-xl font-semibold">
                        <Link className='py-3 px-5' href="/login" onClick={async () => await authClient.signOut()}>Logout</Link>
                    </div>
                </div>
            ) : (
                <div className="btn bg-[#403F3F] text-white text-xl font-semibold">
                    <Link className='py-3 px-5' href="/login">Login</Link>
                </div>
            )}
        </div>
    );
};

export default Navbar;
