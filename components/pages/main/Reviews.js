import React from 'react';
import Review from './Review';

const One = {
    image: `url(../assets/jayrequard.jpg)`,
    quote: `Aaron Toliver's creative talent and technical expertise led the way in crafting my media platform to a professional standard. His thoughtfulness and drive to develop the best product for his clients is a rare resource.`,
    name: `Jay Requard`,
    company: `Author`
} 

const Two = {
    image: `url(../assets/obed.jpg)`,
    quote: `Aaron did a great job with my new website as I pivoted my business from one focus to another.`,
    name: `Obed Arguedas`,
    company: `Inside Out Home Improvement`
} 

const Three = {
    image: `url(../assets/darrell.jpg)`,
    quote: `Aaron did a great job on my website. He was very attentive to my needs, and very responsive when I needed him, keeping me updated on the progress of the site. Great experience and I highly recommend.`,
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
