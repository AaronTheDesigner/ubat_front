import React from 'react'
import Image from 'next/image'
import logo from '../public/assets/logo.svg'
import Link from 'next/link'
import BackgroundAnimation from './BackgroundAnimation'
import ContactBtn from './ContactBtn'
import Button from './Button'


const MainStandard = () => {
    return (
        // Hero
        <div className="flex text-white relative mt-12 mb-20 lg:mt-28 px-5 sm:px-10 md:px-16 lg:px-28 xl:px-60 overflow-hidden">
            <div className="flex flex-col z-10 gap-y-10 max-w-lg md:max-w-xl xl:max-w-2xl 2xl:max-w-4xl">
                <h1 className="equinox-bold tracking-wide text-5xl uppercase md:text-6xl 2xl:text-7xl">
                    <span className="text-teal tracking-widest">i</span>deas to<br /> <span className="text-orange">r</span>eality
                </h1>
                <p className="text-xl dosis-medium md:text-2xl 2xl:text-3xl">
                    My name is <span className="logo equinox-bold uppercase">Aaron Toliver</span>. I provide digital solutions for small businesses and individuals. Professional, candid, and cost-effective.
                </p>
                <div className="flex min-h-fit gap-x-10">
                    <ContactBtn />
                    <Button href="#services" name="services"/>
                </div>
                
            </div>
            <div className='absolute overflow-x-hidden w-full max-w-sm max-h-sm right md:-top-20 2xl:max-w-3xl 2xl:max-h-3xl md:right-48 2xl:relative'>
                <BackgroundAnimation/>
            </div>
        </div>
    )
}

export default MainStandard;
