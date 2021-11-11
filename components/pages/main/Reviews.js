import React from 'react';
import Image from 'next/image';
import Review from './Review';
import person from '../../../public/assets/person_icon.svg';

const Reviews = () => {
    return (
        <section id="reviews" className="my-10 mx-5 flex flex-col gap-y-8">
            <div className="relative text-center px-2">
                <h2 className="relative text-2xl font-bold z-10 md:text-3xl lg:text-4xl">
                    Hear From Others
                </h2>
                <p className="relative text-sm mx-auto mt-5 z-10 lg:mt-6 lg:text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida rhoncus volutpat congue mattis sed mollis mollis.
                </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-x-10 lg:gap-y-0">
                <Review image={person} quote="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt veritatis quo quidem nulla expedita, reiciendis illum possimus eaque corporis distinctio eligendi voluptatum unde officiis magni vel quos sunt quia tempora."/>
                <Review image={person} quote="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt veritatis quo quidem nulla expedita, reiciendis illum possimus eaque corporis distinctio eligendi voluptatum unde officiis magni vel quos sunt quia tempora."/>
                <Review image={person} quote="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt veritatis quo quidem nulla expedita, reiciendis illum possimus eaque corporis distinctio eligendi voluptatum unde officiis magni vel quos sunt quia tempora."/>
            </div>
            
        </section>
    )
}

export default Reviews
