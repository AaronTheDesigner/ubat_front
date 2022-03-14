import React from 'react'
import Image from 'next/image'

const Review = (props) => {

    const { name, company, image, quote } = props;

    return (
        <div 
            className="h-60 w-60 rounded-xl grid place-content-center p-2 sm:h-64 sm:w-64 lg:h-72 lg:w-72 xl:h-96 xl:w-96"
            style={{
                background: `${image}`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'multiply',
                backgroundColor: '#0f16249b',
                backgroundRepeat: 'no-repeat'
            }} 
        >
            <span className="w-full mb-4 text-white text-sm text-center italic dosis-bold tracking-wider lg:text-basis xl:text-xl xl:tracking-wide">
                {quote}    
            </span>
            <span className="w-full text-white text-sm text-center dosis-semibold lg:text-basis tracking-wider xl:text-lg">- {name}</span>
            <span className="w-full text-white text-sm text-center dosis-medium lg:text-basis tracking-wider xl:text-lg">{company}</span>
        </div>
    )
}

export default Review
