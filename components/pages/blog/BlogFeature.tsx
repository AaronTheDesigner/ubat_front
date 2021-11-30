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

const BlogFeature:React.FC<{
                        title: string, 
                        image: string, 
                        author: Author,
                        excerpt: string, 
                        tags: Tags,
                        slug: string
                    }> = (props) => {

    const { title, image, author, excerpt, tags, slug } = props;

    const modedTags = tags.filter(tag => tag.name != 'Blog');
    
    return (
        <div className="flex flex-col p-8 rounded-lg bg-gray-100 gap-3 md:mx-0 lg:mx-48 lg:my-12 lg:p-6 lg:flex-row xl:mx-36 2xl:mx-64">
            <div className="flex flex-col gap-3 lg:flex-col-reverse lg:justify-center">
                <div className="h-3/4 flex flex-col justify-center" >
                    <div className="flex justify-center">
                        <Image 
                            src={image}
                            // layout="fill"
                            height="300"
                            width="500"
                            className="rounded-lg"
                        />
                    </div>
                </div>            
                <div className="h-1/4 text-center break-words text-2xl font-extrabold uppercase flex flex-col justify-center">
                    {title}
                </div> 
            </div>
            <div className="flex flex-col items-center lg:items-start lg:justify-center lg:w-3/4">
                <span className="flex items-center gap-5" >
                    <Image 
                        src={author.profile_image}
                        height={50}
                        width={50}
                        className="rounded-full"
                    />
                    <p className="text-2xl font-bold capitalize">
                        {author.name}
                    </p>
                </span>
                <ul className="flex my-4 gap-x-4">
                        {modedTags.map(tag => {
                            return <li className="rounded-full bg-white py-1 px-2" key={tag.id}>
                                {tag.name}
                            </li>
                        })}
                </ul>
                <p className="text-base break-words text-center font-thin p-3 lg:text-left">
                    {excerpt}
                </p>
                <Link href="/post/[slug]" as={`/post/${slug}`}>
                    <span className="cursor-pointer text-lg opacity-75 inline-block uppercase font-medium bg-accent px-4 py-2 text-black shadow-md mb-8 bg-white">
                        Read
                    </span>
                </Link>
            </div>
            
        </div>
    )
}

export default BlogFeature
