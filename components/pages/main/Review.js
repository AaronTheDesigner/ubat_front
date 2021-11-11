import React from 'react'
import Image from 'next/image'

const Review = (props) => {
    return (
        <div className="border-4 gap-x-5 p-2 shadow-md flex flex-row odd:flex-row-reverse">
            <div className="italic font-thin">
                "{props.quote}"
            </div>
            <Image 
                src={props.image}
            />
        </div>
    )
}

export default Review
