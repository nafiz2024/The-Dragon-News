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
        <div className='flex flex-col items-center gap-4 pt-6 pb-10 text-center md:flex-row md:justify-between md:pt-10 md:pb-20 md:text-left'>
            <div className="shrink-0">
                <Image src={navLogo} alt='Navbar Logo' width={41} height={41} />
            </div>
            <div className="order-3 md:order-none">
                <ul className='flex flex-wrap justify-center gap-4 md:gap-5'>
                    {navLinks}
                </ul>
            </div>

            {isPending ? ("Loading...") : user ? (
                <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:justify-end">
                    <h1 className="text-sm sm:text-base">Hello, {userName}</h1>
                    <Image className="rounded-full" src={avatarSrc} alt='User Avatar' width={41} height={41} />
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
