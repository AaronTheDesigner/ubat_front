import React from 'react'
import Service from './Service'
import Image from 'next/image';
import design from '../public/assets/design_icon.svg';
import cms from '../public/assets/cms_icon.svg';
import dev from '../public/assets/dev_icon.svg';
import social from '../public/assets/social_icon.svg';

const Services = () => {

    
    return (
        <section id="#services" className="leading-loose relative">
            <div>
                Funn lil'banner
            </div>
            {/* Headings and Text Container */}
            <div className="text-center pt-8 pb-24 px-4 md:pt-12 lg:flex lg:flex-col lg:items-center lg:pb-48">
                <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
                    How I'll Upgrade Your Business
                </h2>
                <p className="text-sm mt-5 md:mx-auto lg:text-md lt:mt-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida rhoncus volutpat congue mattis sed mollis mollis.
                </p>
                {/* Value Propositions */}
                <div className="text-left mt-10 grid gap-y-12 md:grid-cols-2 md:gap-x-12 md:px-4 lg:gap-x-20 lg:mt-16">
                    {/* <Image 
                        src={design}
                    /> */}
                    <Service icon={design} title="Web Design" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, accusantium magni similique dolore blanditiis quam natus et vero quod labore facere, deserunt nesciunt doloremque repudiandae pariatur eligendi dolor commodi soluta."/>
                    <Service icon={dev} title="Web Development" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, accusantium magni similique dolore blanditiis quam natus et vero quod labore facere, deserunt nesciunt doloremque repudiandae pariatur eligendi dolor commodi soluta." />
                    <Service icon={social} title="Social Media Integration" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, accusantium magni similique dolore blanditiis quam natus et vero quod labore facere, deserunt nesciunt doloremque repudiandae pariatur eligendi dolor commodi soluta."/>
                    <Service icon={cms} title="Content Management Systems" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, accusantium magni similique dolore blanditiis quam natus et vero quod labore facere, deserunt nesciunt doloremque repudiandae pariatur eligendi dolor commodi soluta."/>
                </div>
            </div>
        </section>
    )
}

export default Services;