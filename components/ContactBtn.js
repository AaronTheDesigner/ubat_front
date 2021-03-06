import React from 'react'
import Link from 'next/link'

const ContactBtn = () => {
  return (
        <Link href="#contact">
            <a className='dosis-bold opacity-95 uppercase tracking-widest py-3 px-4 bg-purple rounded-md shadow-2xl hover:text-blue hover:bg-orange 2xl:text-xl transition-all'>Hire Me</a>
        </Link>
    
  )
}

export default ContactBtn