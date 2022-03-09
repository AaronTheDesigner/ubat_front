import React from 'react'
import Link from 'next/link'

const Button = (props) => {
    const { href, name } = props;
    return (
        <Link href={href}>
            <a className='dosis-bold opacity-95 uppercase border-4 border-purple text-purple tracking-widest py-2 px-3 rounded-md shadow-2xl hover:text-teal hover:border-teal 2xl:text-xl transition-all'>{name}</a>
        </Link>
    
    )
}

export default Button