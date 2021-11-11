import React from 'react';
import Image from 'next/image';
import person_icon from '../../../public/assets/person_icon.svg'
import Link from 'next/link';

const PostCard = (props) => {

    

    const renderTags = () => {
        return props.tags.map(tag => {
            console.log(tag)
            return (
                <li className="bg-gray-400 py-1 px-2 rounded-xl text-xs">
                    {tag}
                </li>
            )
        })
    }

    return (
        <div className="flex flex-col w-80 bg-gray-200 p-3 rounded-lg w shadow-md justify-between items-center" key={props.key}>
            <div className="w-full h-48 relative">
                <Image 
                    src={props.image}
                    layout="fill"
                />
            </div>        
            <h1 className="font-bold text-2xl text-center capitalize my-2">
                    {props.title}
            </h1>
            <span className="flex items-center gap-5" >
                    <Image 
                        src={person_icon}
                        height={25}
                        width={25}
                    />
                    <p className="text-xl font-bold capitalize">
                        Author Name
                    </p>
            </span>
            <div className="flex flex-col text-center justify-between">
                <ul className="flex justify-evenly my-2 gap-2 flex-wrap">
                        {renderTags()}
                </ul>
                <p className="my-3">
                    {props.intro}
                </p>
                <Link href="/read" className="inline-block uppercase font-medium bg-accent px-4 py-2 text-black shadow-md mb-8">
                    <span className="text-lg opacity-75">Get Started</span>
                </Link>
            </div>
        </div>
    )
}

export default PostCard
