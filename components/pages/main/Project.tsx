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
        <div className='gap-3 bg-lightblue flex flex-col p-2 rounded-xl max-w-xs sm:max-w-none sm:flex-row 2xl:p-10'>
            {/* present */}
            <div className="flex flex-col justify-evenly sm:w-2/5">
                <h1 className="text-white 2xl:text-green-300 text-2xl truncate equinox-bold text-center 2xl:text-3xl">{title}</h1>
                <div className="block">                    
                        <Image 
                            src={image}
                            layout="responsive"
                            // sizes="50vh"
                            height={2}
                            width={3}
                            className="rounded-md"
                        />                        
                </div>
            </div>
            {/* content */}
            <div className="flex flex-col w-full gap-y-3 justify-center sm:w-3/5 sm:justify-evenly 2xl:justify-center 2xl:gap-y-14 2xl:pl-10 2xl:pr-5">
                <div className="flex justify-evenly flex-wrap gap-y-2 sm:justify-start sm:gap-x-3">
                    {modedTags.map(tag => {
                        return <span className='text-sm py-1 px-2 odd:bg-teal even:bg-orange dosis-medium rounded-lg sm:text-base' key={tag.id} >{tag.name}</span>
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

    // return (
    //     <div className="flex flex-col items-center md:py-12 md:gap-y-10 md:mx-10 md:gap-x-14 lg:gap-y-0 xl:flex-row even:xl:flex-row-reverse">
    //         {/* Project Image */}
    //         <div className="w-72 h-92 mb-10 sm:w-full m:w-1/2 ">
    //             <div className=" h-48 sm:h-96 w-auto relative">
    //             <Image 
    //                 src={image}
    //                 layout='fill'
    //             />
    //             </div>
                
    //         </div>
    //         {/* Project Details */}
    //         <div className="w-full flex flex-col gap-y-6 m:w-1/2">
    //             <h3>
    //                 {title}
    //             </h3>
    //             <p>
    //                 {custom_excerpt}
    //             </p>
    //             <ul className="flex justify-evenly my-2 gap-2 flex-wrap">
    //                     {modedTags.map(tag => {
    //                         return <li className="rounded-full bg-white py-1 px-2" key={tag.id}>
    //                             {tag.name}
    //                         </li>
    //                     })}
    //             </ul>
    //             {/* <p className="from-transparent italic">
    //             </p> */}
    //             <a href="#" className="inline-block uppercase font-medium bg-accent px-4 py-2 text-black shadow-md ml-auto lg:ml-0 lg:w-max">
    //                 <span className="text-sm opacity-75">
    //                     Visit Project
    //                 </span>
    //             </a>
    //         </div>
    //     </div>
    // )
}

export default Project;
