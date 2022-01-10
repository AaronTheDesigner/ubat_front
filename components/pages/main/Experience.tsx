import React from 'react';
import Project from './Project';
import logo from '../../../public/assets/logo.svg';


const Experience = (props) => {

    //console.log(props)

    return (
        <section id="experience" className="px-4 pt-20 pb-24 bg-gray-100 md:px-20 lg:px-40 lg:pt-48">
            {/* Conteiner */}
            <div className="relative rounded-3xl py-8 shadow-lg overflow-hidden bg-white md:py-16 xl:max-w-screen-xl xl:mx-auto">
                <div className="relative text-center px-2">
                    <h2 className="relative text-2xl font-bold z-10 md:text-3xl lg:text-4xl">
                        Several Projects I Enjoyed
                    </h2>
                    <p className="relative text-sm mx-auto mt-5 z-10 lg:mt-6 lg:text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida rhoncus volutpat congue mattis sed mollis mollis.
                    </p>
                </div>
                {/* Projects */}
                <div className="px-6 py-4 md:mx-8 lg:mx-16">
                    <Project image={logo} title="Project Name" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh gravida gravida elementum consectetur facilisis vel quam ullamcorper. Condimentum sed ultricies tellus et augue. Lacus eu lobortis scelerisque vitae et. Vestibulum arcu maecenas imperdiet egestas lectus." services="Design + Development + CMS" />
                    <Project image={logo} title="Project Name" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh gravida gravida elementum consectetur facilisis vel quam ullamcorper. Condimentum sed ultricies tellus et augue. Lacus eu lobortis scelerisque vitae et. Vestibulum arcu maecenas imperdiet egestas lectus." services="Design + Development + CMS" />
                    <Project image={logo} title="Project Name" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh gravida gravida elementum consectetur facilisis vel quam ullamcorper. Condimentum sed ultricies tellus et augue. Lacus eu lobortis scelerisque vitae et. Vestibulum arcu maecenas imperdiet egestas lectus." services="Design + Development + CMS" />
                </div>
            </div>
        </section>
    )
}

export default Experience
