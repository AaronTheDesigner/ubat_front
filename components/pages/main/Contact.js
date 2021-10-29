import React from 'react'

const Contact = () => {
    return (
        <section id="contact" className="relative mb-8 md:justify-center md:pb-16">
            {/* Text and Form Container */}
            <div className="relative">
                <h2 class="relative text-2xl font-bold text-center my-16 md:pl-12 md:text-3xl xl:pl-0">
                    Let's Get to Work Today
                </h2>
            </div>
            {/* Form Container */}
            <div className="px-12">
                {/* Form */}
                <form action="" className="flex flex-col gap-y-6 md:flex-row md:gap-x-6 justify-center">
                    <div className="flex flex-col gap-y-6">
                        <input type="text" name="name" id="name" placeholder="Name" />
                        <input type="email" name="email" id="email" placeholder="Email" />
                    </div>
                    <div className="flex flex-col">
                        <textarea name="message" id="message" cols="30" rows="10"></textarea>
                    </div>
                    <div className="">
                        <button type="submit" id="submit-button" class="inline-block uppercase font-medium px-6 py-2 bg-black text-white shadow-md">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
