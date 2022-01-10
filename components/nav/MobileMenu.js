import React from 'react'
import Link from 'next/link'

const MobileMenu = ({onClick}) => {

    // use a hook => onclick for each link slides the menu back to the side.
    // if ^^^ does not work, consider passing up props
    return (
        <div className="flex z-0 flex-col bg-gray-500 h-screen items-center overflow-y-visible gap-y-4" role="mobile menu" >
            {/* logo */}
            <div className="text-4xl font-bold mt-20" onClick={onClick}>
                <Link href="/#">LOGO</Link>
            </div>
            {/* menu */}
            <div className="list-none flex flex-col justify-center items-center text-xl gap-y-5 my-7">
                <div className="inline-block relative">
                    <li className="relative" onClick={onClick}>
                        <Link href="/#services" className="inline-block h-full w-full">Services</Link>
                    </li>
                </div>
                <div className="inline-block relative">
                    <li className="relative" onClick={onClick}>
                        <Link href="/blog" className="inline-block h-full w-full">Blog</Link>
                    </li>
                </div>
                <div className="inline-block relative">
                    <li className="relative" onClick={onClick}>
                        <Link href="/#experience" className="inline-block h-full w-full">Experience</Link>
                    </li>
                </div>
                <div className="inline-block relative">
                    <li className="relative" onClick={onClick}>
                        <Link href="/#reviews" className="inline-block h-full w-full">Testimonials</Link>
                    </li>
                </div>
                <div className="inline-block relative">
                    <li className="relative" onClick={onClick}>
                        <Link href="/#contact" className="inline-block h-full w-full">Contact</Link>
                    </li>
                </div>
            </div>
            {/* social items */}
            {/* <div className="flex h-11 gap-x-4 opacity-75">
                <Link href="#" class="p-2">
                    <svg className="w-6 h-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <title>Email</title>
                        <path d="M20 18H18V9.25L12 13L6 9.25V18H4V6H5.2L12 10.25L18.8 6H20V18ZM20 4H4C2.89 4 2 4.89 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4Z" fill="black"></path>
                    </svg>
                </Link>
                <Link href="#" className="p-2">
                    <svg className="w-6 h-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <title>Twitter</title>
                        <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28004 9.09 5.11004 7.38 3.00004 4.79C2.63004 5.42 2.42004 6.16 2.42004 6.94C2.42004 8.43 3.17004 9.75 4.33004 10.5C3.62004 10.5 2.96004 10.3 2.38004 10V10.03C2.38004 12.11 3.86004 13.85 5.82004 14.24C5.19077 14.4122 4.53013 14.4362 3.89004 14.31C4.16165 15.1625 4.69358 15.9084 5.41106 16.4429C6.12854 16.9775 6.99549 17.2737 7.89004 17.29C6.37367 18.4904 4.49404 19.1393 2.56004 19.13C2.22004 19.13 1.88004 19.11 1.54004 19.07C3.44004 20.29 5.70004 21 8.12004 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" fill="black"></path>
                    </svg>
                </Link>
                <Link href="#" className="p-2">
                    <svg className="w-6 h-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <title>Facebook</title>
                        <path d="M12 2.04001C6.5 2.04001 2 6.53001 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85001C10.44 7.34001 11.93 5.96001 14.22 5.96001C15.31 5.96001 16.45 6.15001 16.45 6.15001V8.62001H15.19C13.95 8.62001 13.56 9.39001 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5879 18.0622 20.3855 19.6099 18.5701C21.1576 16.7546 22.0054 14.4457 22 12.06C22 6.53001 17.5 2.04001 12 2.04001Z" fill="black"></path>
                    </svg>
                </Link>
            </div> */}
        </div>
    )
}

export default MobileMenu
