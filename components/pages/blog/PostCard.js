import React from 'react';
import Image from 'next/image';
import person_icon from '../../../public/assets/person_icon.svg'
import Link from 'next/link';

const PostCard = (props) => {

    console.log(props.author)

    return (
        <div className="flex flex-col justify-between h-full">
            <div className="w-full h-48 relative">
                <Image 
                    src={props.image}
                    layout="fill"
                    className="rounded-lg"
                />
            </div>        
            <h1 className="font-bold text-xl text-center capitalize my-2">
                    {props.title}
            </h1>
            <span className="flex items-center justify-center gap-3" >
                    <Image 
                        src={props.author.profile_image}
                        height={25}
                        width={25}
                        className="rounded-full"
                    />
                    <p className="font-bold capitalize ">
                        {props.author.name}
                    </p>
            </span>
            <div className="flex flex-col text-center justify-between">
                <ul className="flex justify-evenly my-2 gap-2 flex-wrap">
                        {props.tags.map(tag => {
                            return <li className="rounded-full bg-white py-1 px-2" key={tag.id}>
                                {tag.name}
                            </li>
                        })}
                </ul>
                <p className="my-3">
                    {props.excerpt}
                </p>
                <Link href="/read" className="">
                    <span className="cursor-pointer text-lg opacity-75 inline-block uppercase font-medium bg-accent px-4 py-2 text-black shadow-md mb-8 bg-white">
                        Read
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default PostCard
