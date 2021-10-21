import React, { useState } from 'react';
import { MenuIcon } from '@heroicons/react/solid';

const MobileNav = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    console.log(menuOpen);

    return (
        <nav className="visible md:invisible w-full px-8 py-3 fixed flex flex-row items-center justify-between bg-gray-500">
            {/* logo */}
            <div className="text-2xl" >
                <a href="#">LOGO</a>
            </div>
            <div className="text-2xl" >
                <MenuIcon className="h-10 w-10 cursor-pointer" onClick={() => setMenuOpen(true)}/>
            </div>
        </nav>
    )
}

export default MobileNav
