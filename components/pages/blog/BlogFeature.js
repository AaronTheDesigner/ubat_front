import React from 'react';
import posts from './posts';
import Image from 'next/image';
import person_icon from '../../../public/assets/person_icon.svg';
import Link from 'next/link';

const BlogFeature = (props) => {

    // const renderTags = () => {
    //     return props.tags.map(tag => {
    //         return (
    //             <li className="bg-gray-400 py-1 px-2 rounded-xl text-xs" key={tag.id}>
    //                 {tag.title}
    //             </li>
    //         )
    //     })
    // }
    
    return (
        <div className="flex flex-col p-8 rounded-lg bg-gray-100 gap-3 md:mx-0 lg:mx-48 lg:my-12 lg:p-6 lg:flex-row xl:mx-36 2xl:mx-64">
            <div className="flex flex-col gap-3 lg:flex-col-reverse lg:justify-center">
                <div className="h-3/4 flex flex-col justify-center" >
                    <div className="flex justify-center">
                        <Image 
                            src={props.image}
                            // layout="fill"
                            height="300"
                            width="500"
                            className="rounded-lg"
                        />
                    </div>
                </div>            
                <div className="h-1/4 text-center break-words text-2xl font-extrabold uppercase flex flex-col justify-center">
                    {props.title}
                </div> 
            </div>
            <div className="flex flex-col items-center lg:items-start lg:justify-center lg:w-3/4">
                <span className="flex items-center gap-5" >
                    <Image 
                        src={props.author.profile_image}
                        height={50}
                        width={50}
                        className="rounded-full"
                    />
                    <p className="text-2xl font-bold capitalize">
                        Author Name
                    </p>
                </span>
                <ul className="flex my-4 gap-x-4">
                        {props.tags.map(tag => {
                            return <li className="rounded-full bg-white py-1 px-2" key={tag.id}>
                                {tag.name}
                            </li>
                        })}
                </ul>
                <p className="text-base break-words text-center font-thin p-3 lg:text-left">
                    {props.excerpt}
                </p>
                <Link href="/read">
                    <span className="cursor-pointer text-lg opacity-75 inline-block uppercase font-medium bg-accent px-4 py-2 text-black shadow-md mb-8 bg-white">
                        Read
                    </span>
                </Link>
            </div>
            
        </div>
    )
}

export default BlogFeature
