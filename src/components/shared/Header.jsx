import React from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className="relative overflow-hidden py-8 text-center md:py-10">
            <Image
                src={logo}
                alt="The Dragon News"
                priority
                className="mx-auto w-[280px] md:w-[420px]"
            />
            <p className="mt-4 text-sm font-medium tracking-wide text-slate-500">
                Journalism Without Fear or Favour
            </p>
            <p className="mt-2 inline-flex rounded-full border border-sky-200 bg-white/70 px-4 py-1 font-semibold text-slate-700 shadow-sm backdrop-blur">
                {format(new Date(), "EEEE MMM dd, yyyy")}
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                <span className="rounded-full border border-rose-200 bg-rose-50 px-4 py-1 text-sm font-semibold text-rose-600">Breaking Updates</span>
                <span className="rounded-full border border-sky-200 bg-sky-50 px-4 py-1 text-sm font-semibold text-sky-700">Trusted Reports</span>
                <span className="rounded-full border border-amber-200 bg-amber-50 px-4 py-1 text-sm font-semibold text-amber-700">Global Coverage</span>
            </div>
        </div>
    );
};

export default Header;
