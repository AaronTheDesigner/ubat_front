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

    //console.log(projects)

    return (
        <section id="experience" className="flex flex-col gap-5">
                {/* Projects */}
                <div className="px-6 py-4 md:mx-8 lg:mx-16">
                    {projects.map(project => {
                    return (<div className="my-8 md:mx-8 lg:mx-16" key={project.id}>
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

    // return (
    //     <section id="experience" className="px-4 pt-20 pb-24 bg-gray-100 md:px-20 lg:px-40 lg:pt-48">
    //         {/* Conteiner */}
    //         <div className="relative rounded-3xl py-8 shadow-lg overflow-hidden bg-white md:py-16 xl:max-w-screen-xl xl:mx-auto">
    //             <div className="relative text-center px-2">
    //                 <h2 className="relative text-2xl font-bold z-10 md:text-3xl lg:text-4xl">
    //                     Several Projects I Enjoyed
    //                 </h2>
    //                 <p className="relative text-sm mx-auto mt-5 z-10 lg:mt-6 lg:text-sm">
    //                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida rhoncus volutpat congue mattis sed mollis mollis.
    //                 </p>
    //             </div>
    //             {/* Projects */}
    //             <div className="px-6 py-4 md:mx-8 lg:mx-16">
    //                 {projects.map(project => {
    //                     return (<div className="my-8 md:mx-8 lg:mx-16" key={project.id}>
    //                         <Project 
    //                             title={project.title} 
    //                             image={project.feature_image} 
    //                             custom_excerpt={project.custom_excerpt} 
    //                             author={project.primary_author}
    //                             slug={project.slug}
    //                             tags={project.tags}
    //                         />
    //                     </div>)
    //                 })}
    //                 {/* <Project image={logo} title="Project Name" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh gravida gravida elementum consectetur facilisis vel quam ullamcorper. Condimentum sed ultricies tellus et augue. Lacus eu lobortis scelerisque vitae et. Vestibulum arcu maecenas imperdiet egestas lectus." services="Design + Development + CMS" />
    //                 <Project image={logo} title="Project Name" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh gravida gravida elementum consectetur facilisis vel quam ullamcorper. Condimentum sed ultricies tellus et augue. Lacus eu lobortis scelerisque vitae et. Vestibulum arcu maecenas imperdiet egestas lectus." services="Design + Development + CMS" />
    //                 <Project image={logo} title="Project Name" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh gravida gravida elementum consectetur facilisis vel quam ullamcorper. Condimentum sed ultricies tellus et augue. Lacus eu lobortis scelerisque vitae et. Vestibulum arcu maecenas imperdiet egestas lectus." services="Design + Development + CMS" /> */}
    //             </div>
    //         </div>
    //     </section>
    // )
}

export default Experience
