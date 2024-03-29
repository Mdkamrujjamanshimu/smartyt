import React from 'react';
import Link from "next/link";

const Logo = () => {
    return (
        <Link href={'/'}>
            <h3 className='text-3xl font-semibold hover:text-orange-600 cursor-pointer duration-200'>smart.</h3>
        </Link>
    )
};

export default Logo;
