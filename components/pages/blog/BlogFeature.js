import React from 'react';
import posts from './posts';
import Image from 'next/image';
import person_icon from '../../../public/assets/person_icon.svg';
import Link from 'next/link';

const BlogFeature = () => {

    const featuredPost = posts[0]

    const renderTags = () => {
        return featuredPost.tags.map(tag => {
            return (
                <li className="bg-gray-400 py-1 px-2 rounded-xl text-xs" key={tag.id}>
                    {tag.title}
                </li>
            )
        })
    }
    
    return (
        <div className="flex flex-col gap-3 md:mx-16 lg:mx-36 lg:flex-row">
            <div className="flex flex-col gap-3 lg:flex-col-reverse lg:justify-end">
                <Image 
                    src={featuredPost.image}
                />
                <div className="text-center break-words text-3xl font-extrabold uppercase ">
                    {featuredPost.title}
                </div>
            </div>
            <div className="flex flex-col items-center lg:items-start lg:justify-center">
                <span className="flex items-center gap-5" >
                    <Image 
                        src={person_icon}
                        height={50}
                        width={50}
                    />
                    <p className="text-2xl font-bold capitalize">
                        Author Name
                    </p>
                </span>
                <ul className="flex my-4 gap-x-4">
                    {renderTags()}
                </ul>
                <p className="text-base break-words text-center font-thin p-3 lg:text-left">
                    {featuredPost.intro}
                </p>
                <Link 
                    href="/read"
                >Read</Link>
            </div>
            
        </div>
    )
}

export default BlogFeature
