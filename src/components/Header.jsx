import React from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className="py-8 text-center">
            <Image
                src={logo}
                alt="The Dragon News"
                priority
                className="mx-auto w-[280px] md:w-[420px]"
            />
            <p className="mt-3 text-sm text-gray-500">
                Journalism Without Fear or Favour
            </p>
            <p className="mt-2 font-semibold text-gray-700">
                {format(new Date(), "EEEE MMM dd, yyyy")}
            </p>
        </div>
    );
};

export default Header;
