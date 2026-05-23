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

    const links = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/career", label: "Career" },
    ];

    const navLinks = <>
        {links.map((item) => {
            const isActive = pathname === item.href;
            return (
                <li key={item.href}>
                    <Link
                        className={`${isActive ? "bg-white text-sky-600 shadow-sm" : "text-slate-600 hover:text-sky-600"} rounded-full px-4 py-2 font-semibold`}
                        href={item.href}
                    >
                        {item.label}
                    </Link>
                </li>
            );
        })}
    </>

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    const avatarSrc = user?.image || userAvatar;
    const userName = user?.name || "Guest";

    return (
        <div className='surface-card mb-10 flex flex-col items-center gap-4 px-4 py-4 text-center md:flex-row md:justify-between md:px-6 md:text-left'>
            <div className="flex shrink-0 items-center gap-3 rounded-2xl bg-gradient-to-br from-orange-100 to-pink-100 p-2 pr-4">
                <Image src={navLogo} alt='Navbar Logo' width={41} height={41} />
                <div className="text-left">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Live</p>
                    <p className="text-sm font-bold text-slate-700">Dragon News</p>
                </div>
            </div>
            <div className="order-3 md:order-none">
                <ul className='flex flex-wrap items-center justify-center gap-2 rounded-full bg-slate-100 px-3 py-2'>
                    {navLinks}
                </ul>
            </div>

            {isPending ? ("Loading...") : user ? (
                <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:justify-end">
                    <h1 className="text-sm font-semibold text-slate-700 sm:text-base">Hello, {userName}</h1>
                    <Image className="rounded-full ring-2 ring-pink-200" src={avatarSrc} alt='User Avatar' width={41} height={41} />
                    <div className="btn border-none bg-gradient-to-r from-slate-700 to-slate-900 text-base text-white shadow-md">
                        <Link className='px-5 py-2' href="/login" onClick={async () => await authClient.signOut()}>Logout</Link>
                    </div>
                </div>
            ) : (
                <div className="btn border-none bg-gradient-to-r from-sky-500 to-blue-600 text-base text-white shadow-md hover:from-sky-600 hover:to-blue-700">
                    <Link className='px-6 py-2 font-semibold' href="/login">Login</Link>
                </div>
            )}
        </div>
    );
};

export default Navbar;
