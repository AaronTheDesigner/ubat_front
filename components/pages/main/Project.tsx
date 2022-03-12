import React from 'react';
import Image from 'next/image';
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
        <div className='gap-3 bg-gradient-to-b from-lightblue to-blue flex flex-col p-2 rounded-xl max-w-xs sm:max-w-6xl sm:flex-row 2xl:p-6'>
            {/* present */}
            <div className="flex flex-col sm:justify-start sm:w-2/5">
                <h1 className="text-white w-full mb-4 text-2xl truncate equinox-bold text-center 2xl:text-3xl">{title}</h1>
                <div className="block">                    
                        <Image 
                            src={image}
                            layout="responsive"
                            // sizes="50vh"
                            height={6}
                            width={10}
                            className="rounded-md"
                        />                        
                </div>
            </div>
            {/* content */}
            <div className="flex flex-col w-full gap-y-3 justify-center sm:w-3/5 sm:justify-evenly 2xl:justify-center 2xl:ml-10 2xl:pr-0 2xl:mt-5">
                <div className="flex justify-evenly flex-wrap gap-x-2 gap-y-2 sm:justify-start sm:gap-x-3">
                    {modedTags.map(tag => {
                        return <span className='text-sm tracking-wider py-1 px-2 text-white bg-lighterblue dosis-medium rounded-lg sm:text-base xl:text-lg' key={tag.id} >{tag.name}</span>
                    })}
                </div>
                <p className="dosis-medium text-base text-white md:text-lg 2xl:text-2xl">
                    {custom_excerpt}   
                </p>
                <div className="flex justify-evenly sm:justify-start">
                    <Button href="#" name="more"/>
                </div>
            </div>
        </div>
    )
}

export default Project;
