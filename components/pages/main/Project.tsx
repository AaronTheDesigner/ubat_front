import React from 'react';
import Image from 'next/image';

type Author = {
    profile_image: string,
    name: string
}

type Tags = [{
    id: string,
    name: string,
    slug: string
}]

const Project:React.FC<{
                        title: string,
                        image: string,
                        custom_excerpt: string,
                        author: Author,
                        tags: Tags,
                        slug: string
                        }> = (props) => {
    const { title, image, custom_excerpt, author, tags, slug } = props;

    const modedTags = tags.filter(tag => tag.name != 'Experience');

    return (
        <div className="py-12 gap-y-10 flex flex-col items-center mx-10 md:gap-x-14 lg:gap-y-0 xl:flex-row even:xl:flex-row-reverse">
            {/* Project Image */}
            <div className="w-1/2">
                <div className="h-60 w-auto relative">
                <Image 
                    src={image}
                    layout='fill'
                />
                </div>
                
            </div>
            {/* Project Details */}
            <div className=" w-1/2 flex flex-col gap-y-6">
                <h3>
                    {title}
                </h3>
                <p>
                    {custom_excerpt}
                </p>
                <ul className="flex justify-evenly my-2 gap-2 flex-wrap">
                        {modedTags.map(tag => {
                            return <li className="rounded-full bg-white py-1 px-2" key={tag.id}>
                                {tag.name}
                            </li>
                        })}
                </ul>
                {/* <p className="from-transparent italic">
                </p> */}
                <a href="#" className="inline-block uppercase font-medium bg-accent px-4 py-2 text-black shadow-md ml-auto lg:ml-0 lg:w-max">
                    <span className="text-sm opacity-75">
                        Visit Project
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Project;
