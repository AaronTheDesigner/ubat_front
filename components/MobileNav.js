import React, { useState } from 'react';
import { MenuIcon } from '@heroicons/react/solid';
import MobileMenu from './MobileMenu';

const MobileNav = () => {
    const [menu, setMenu] = useState(false)

    console.log(menu)

    const toggleMenu = () => {
        menu ? setMenu(false) : setMenu(true)
    }

    return (
        <div className="visible md:invisible md:z-0 fixed w-full">
            <nav className="z-50 px-8 py-3 flex flex-row items-center justify-between bg-gray-500">
                {/* logo */}
                <div className="text-2xl" >
                    <a href="#">LOGO</a>
                </div>
                <div className="text-2xl" >
                    <MenuIcon className="h-10 w-10 cursor-pointer" onClick={() => toggleMenu()}/>
                </div>
            </nav>
            <div className={menu ? "-translate-x-full transition duration-500 ease-in-out" : "-translate-x-0 transition duration-500 ease-in-out"}>
                <MobileMenu className="" />
            </div>        
        </div>
    )
}

export default MobileNav
