import React from 'react';
import Image from 'next/image';

const PostCard = (props) => {

    const renderTags = () => {
        return props.tags.map(tag => {
            return (
                <li className="bg-gray-400 py-1 px-2 rounded-xl text-xs">
                    {tag}
                </li>
            )
        })
    }

    return (
        <div className="flex flex-col w-80 bg-gray-200 p-3 rounded-lg w shadow-md justify-between first:md:w-3/4 first:md:h-screen" key={props.key}>
            <div className="flex flex-col gap-3">
                <Image 
                    src={props.image}
                    width="80"
                    height="200"
                />
                <h1 className="font-bold text-2xl text-center capitalize my-2">
                    {props.title}
                </h1>
            </div>
            <div className="flex flex-col text-center justify-between">
                <ul className="flex justify-evenly my-2 gap-2 flex-wrap">
                        {renderTags()}
                </ul>
                <p className="my-3">
                    {props.intro}
                </p>
                <a href="google.com" class="inline-block uppercase font-medium bg-accent px-4 py-2 text-black shadow-md mb-8">
                    <span class="text-lg opacity-75">Get Started</span>
                </a>
            </div>
        </div>
    )
}

export default PostCard
