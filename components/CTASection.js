import React from 'react'

const CTASection = () => {
  return (
    <div className='my-20'>
        <div className="bg-lighterblue flex flex-col gap-y-6 py-14 md:flex-row md:justify-evenly px-5 sm:px-10 md:px-16 lg:px-28 xl:px-60">
            <div className="flex flex-col gap-y-5 items-center md:w-3/5">
                <div className="equinox-bold text-4xl uppercase text-white md:text-left md:w-full">
                    What I can do    
                </div>    
                <div className="dosis-medium text-base text-center text-white md:text-left md:text-lg 2xl:text-2xl">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, ipsa, placeat quas alias dolorem aliquam dolorum exercitationem officiis porro voluptatum maxime ut unde quia natus perferendis? Incidunt distinctio iure excepturi.    
                </div>
            </div> 
            <div className="grid place-items-center md:">
                <a href="#contact" className='text-lightblue text-center bg-purple hover:bg-teal py-2 px-2 rounded-lg uppercase dosis-bold tracking-wider' >
                    Free Web Analysis    
                </a>
            </div>   
        </div>
    </div>
    
  )
}

export default CTASection