import React from 'react';
import Image from 'next/image';

const Service = (props) => {

    return (
        <div>
            {/* icon */}
            <div>
                <Image
                    height="48"
                    width="48"
                    src={props.icon}
                />
            </div>
            {/* Heading */}
            <h3 className="mb-2 font-medium">
                {props.title}
            </h3>
            {/* Description */}
            <p className="leading-relaxed">
                {props.description}
            </p>
        </div>
    )
}

export default Service
