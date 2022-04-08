import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../Button';

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

    const modedTags = tags.filter(tag => tag.name != 'Blog');

    return (
        <div className="w-full flex flex-col rounded-lg bg-lighterblue" style={{}}>
            <div className="feature-pres rounded-t-lg" style={{
                background: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'grey',
                backgroundBlendMode: 'multiply'
                
            }}>
                <div className="text-white equinox-bold capitalize w-full text-center text-2xl my-24 tracking-wide">{title}</div>
            </div>
            <div className="feature-info flex flex-col">
                <p className="my-3 px-3 text-white dosis-semibold tracking-wider lg:text-lg">
                    {excerpt}
                </p>
                <span className='px-3 my-2 flex gap-2'>
                    {modedTags.map(tag => {
                        return (
                            <div className="bg-gradient-to-b from-blue text-white dosis-medium px-2 py-1 rounded-lg" key={tag.id}>{tag.name}</div>
                        )
                    })}
                </span>
                <div className="flex items-center w-full mb-3 px-3">
                    <Button href={`/post/${slug}`} name="read" />
                </div>                
            </div>
        </div>
    )
}

export default PostCard
