import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

const title = `Let's Talk`
const ty = `We'll be in touch!`
const paragraph = `Feel free to fill out all required fields. The more information the better. I'll be sure to get back to you in a timely maner.`

const Form = () => {
    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_NEW_FORM)
    
    if (state.succeeded) {
        return (
            <div className="h-96 text-white uppercase equinox-bold flex flex-col items-center justify-center text-4xl text-center">
                Thank You
                <p className="dosis-bold text-2xl mt-5 text-white text-center">
                      {ty}  
                </p>
            </div>
        );
    }

    
    return (
        <div className='py-10 px-5 sm:px-10 md:px-16 lg:px-28 xl:px-60' id="contact">
            <div className="mb-10 flex flex-col justify-center items-center lg:px-32">
                <div className="equinox-bold text-white w-full text-4xl text-center uppercase my-9">{title}</div>
                <p className="dosis-medium tracking-wide text-white text-base text-center lg:max-w-4xl lg:text-xl">
                    {paragraph} 
                </p>
            </div>
            <form action="" onSubmit={handleSubmit} className="max-w-sm m-auto px-5 py-4 bg-lighterblue rounded-lg md:max-w-none lg:max-w-4xl">
                <div className="flex flex-col md:flex-row md:gap-7">
                    <div className="flex flex-col dosis-medium tracking-wider text-white md:w-1/2 md:text-lg" >
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" placeholder='Required' className='mb-5 rounded-lg text-lighterblue tracking-wider md:text-lg'/>
                        <ValidationError prefix='Name' field="name" errors={state.errors} />
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder='Required' className='mb-5 rounded-lg text-lighterblue tracking-wider md:text-lg'/>
                        <ValidationError prefix='Email' field="email" errors={state.errors} />
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" name="phone" placeholder='Required' className='mb-5 rounded-lg text-lighterblue tracking-wider md:text-lg'/>
                        <ValidationError prefix='Phone' field="phone" errors={state.errors} />
                        <label htmlFor="company">Company</label>
                        <input type="text" name="company" placeholder='Optional' className='mb-5 rounded-lg text-lighterblue tracking-wider md:text-lg'/>
                        <ValidationError prefix='Company' field="company" errors={state.errors} />
                        <label htmlFor="website">Website</label>
                        <input type="url" name="website" placeholder='Optional' className='mb-5 rounded-lg text-lighterblue tracking-wider md:text-lg'/>
                        <ValidationError prefix='Website' field="website" errors={state.errors} />
                    </div>    
                    <div className="flex flex-col dosis-medium tracking-wider text-white md:w-1/2 md:text-lg">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" placeholder='Required' className='mb-5 rounded-lg text-lighterblue tracking-wider md:text-lg' id="message" cols="30" rows="10"></textarea>
                    </div>  
                </div>
                <button type="submit" disabled={state.submitting} className="bg-teal lg:text-lg py-2 px-3 rounded-lg dosis-semibold uppercase tracking-wider hover:bg-purple hover:text-white transition-all">
                    Submit
                </button>  
            </form>
            
        </div>
    )
}

export default Form