import React, { useState } from 'react';
import { MenuIcon } from '@heroicons/react/solid';
import MobileMenu from './MobileMenu';
import Link from 'next/link';

const MobileNav = () => {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        menu ? setMenu(false) : setMenu(true)
    }

    return (
        <div className="visible h-16 z-50 md:invisible md:z-0 fixed w-full">
            <nav className="filter drop-shadow-md px-8 py-3 flex flex-row items-center justify-between bg-gray-500">
                {/* logo */}
                <div className="text-2xl" >
                    <Link href="#">LOGO</Link>
                </div>
                <div className="text-2xl" >
                    <MenuIcon className="h-10 w-10 cursor-pointer" onClick={() => toggleMenu()}/>
                </div>
            </nav>
            <div className={menu ? "-translate-x-0 transition duration-500 ease-in-out" : "-translate-x-full transition duration-500 ease-in-out opacity-0"}>
                <MobileMenu className="" select={() => toggleMenu()} />
            </div>        
        </div>
    )
}

export default MobileNav
