import React from 'react';
import Image from 'next/image';

const Project = (props) => {
    return (
        <div className="py-12 gap-y-10 flex flex-col items-center mx-10 md:gap-x-14 lg:gap-y-0 xl:flex-row even:xl:flex-row-reverse">
            {/* Project Image */}
            <div className="flex-none">
                <Image 
                    src={props.image}
                />
            </div>
            {/* Project Details */}
            <div className="flex flex-col gap-y-6">
                <h3>
                    {props.title}
                </h3>
                <p>
                    {props.description}
                </p>
                <p className="from-transparent italic">
                    {props.services}
                </p>
                <a href="#" class="inline-block uppercase font-medium bg-accent px-4 py-2 text-black shadow-md ml-auto lg:ml-0 lg:w-max">
                    <span class="text-sm opacity-75">
                        Visit Project
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Project
