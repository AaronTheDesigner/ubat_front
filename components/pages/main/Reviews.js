import React from 'react';
import Image from 'next/image';
import Review from './Review';
import person from '../../../public/assets/person_icon.svg';

const One = {
    image: `url(../assets/jayrequard.jpg)`,
    quote: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi soluta aliquam officiis porro impedit pariatur mollitia!`,
    name: `Jay Requard`,
    company: `Author`
} 

const Two = {
    image: `url(../assets/obed.jpg)`,
    quote: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi soluta aliquam officiis porro impedit pariatur mollitia!`,
    name: `Obed Arguedas`,
    company: `Inside Out Home Improvement`
} 

const Three = {
    image: `url(../assets/darrell.jpg)`,
    quote: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi soluta aliquam officiis porro impedit pariatur mollitia!`,
    name: `Darrell Zamora`,
    company: `Agora Window Cleaning`
} 

const Reviews = () => {
    return (
        <section id="reviews" className="bg-lighterblue py-10 px-5 sm:px-10 md:px-16 lg:px-28 xl:px-60">
            <div className="equinox-bold text-white w-full text-4xl text-center uppercase my-9">Hear from others</div>
            <div className="flex flex-wrap justify-center items-center gap-10 w-full">
                <Review name={One.name} quote={One.quote} image={One.image} company={One.company} />
                <Review name={Two.name} quote={Two.quote} image={Two.image} company={Two.company} />
                <Review name={Three.name} quote={Three.quote} image={Three.image} company={Three.company} />
            </div>
        </section>
    )
}

export default Reviews
