import React from 'react';
import Project from './Project';
import logo from '../../../public/assets/logo.svg';

type Project = {
    id: string,
    title: string,
    custom_excerpt: string,
    primary_author: {
        profile_image: string,
        name: string
    },
    feature_image: string
    slug: string
    tags: [{
        id: string,
        name: string,
        slug: string
    }]
  }


const Experience:React.FC<{ projects: Project[] }> = (props) => {

    const { projects } = props;

    return (
        <section id="experience" className="my-20 px-5 sm:px-10 md:px-16 lg:px-28 xl:px-60">
            <div className="equinox-bold text-white w-full text-4xl text-center uppercase my-20">Some of My Work</div>
            {/* Container */}
            <div className="flex flex-col items-center gap-10">
                {projects.map(project => {
                    return (<div key={project.id}>
                        <Project 
                            title={project.title} 
                            image={project.feature_image} 
                            custom_excerpt={project.custom_excerpt} 
                            author={project.primary_author}
                            slug={project.slug}
                            tags={project.tags}
                        />
                    </div>)
                })}
            </div>
        </section>
    )
}

export default Experience;


