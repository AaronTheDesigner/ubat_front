import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Author = {
    profile_image: string,
    name: string
}

type Tags = [{
    id: string,
    name: string,
    slug: string
}]

const PostCard:React.FC<{
                        title: string,
                        image: string,
                        author: Author,
                        excerpt: string,
                        tags: Tags,
                        slug: string
                    }> = (props) => {

    const { title, image, author, excerpt, tags, slug } = props;

    return (
        <div className="flex flex-col justify-between h-full">
            <div className="w-full h-48 relative">
                <Image 
                    src={image}
                    layout="fill"
                    className="rounded-lg"
                />
            </div>        
            <h1 className="font-bold text-xl text-center capitalize my-2">
                    {title}
            </h1>
            <span className="flex items-center justify-center gap-3" >
                    <Image 
                        src={author.profile_image}
                        height={25}
                        width={25}
                        className="rounded-full"
                    />
                    <p className="font-bold capitalize ">
                        {author.name}
                    </p>
            </span>
            <div className="flex flex-col text-center justify-between">
                <ul className="flex justify-evenly my-2 gap-2 flex-wrap">
                        {tags.map(tag => {
                            return <li className="rounded-full bg-white py-1 px-2" key={tag.id}>
                                {tag.name}
                            </li>
                        })}
                </ul>
                <p className="my-3">
                    {excerpt}
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

export default PostCard
