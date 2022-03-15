import React from 'react';

const website = {
    title: `websites that work`,
    description: `You want a low maintenance website that will grow your business. It has to look good, and convert users into leads. I'll design to your specifications, live-build so you can see the work, and deploy to the domain of your choice.`
}

const code = {
    title: `custom code`,
    description: `Drag-and-drop web builders can be a... drag. The learning curve may not be worht the time. Unused features may not be worth the price. I will provide a custom code solution that fits your company's exact needs. Pick and choose your features.`
}

const asset = {
    title: `expense to asset`,
    description: `Is your company's website outdated, buggy, or broken? My free web analysis will diagnose exactly what needs to be done, and I can rebuild to meet your needs.`
}

const Services = () => {

    
    return (
        <section id="services" className="my-20 px-5 sm:px-10 md:px-16 lg:px-28 xl:px-60">
            <div className="equinox-bold text-white w-full text-4xl text-center uppercase my-9">How I Can Help You</div>
            <div className="flex flex-col gap-7">
                {/* service */}
                <div className="gap-5 service flex flex-col sm:flex-row sm:items-center">
                    <div className="flex flex-col gap-y-3">
                        <div className="text-white equinox-bold tracking-wider uppercase text-xl md:text-2xl 2xl:text-3xl">
                            1. {website.title}   
                        </div>
                        <p className="dosis-medium text-white md:text-lg 2xl:text-2xl 2xl:pr-4">
                            {website.description}    
                        </p>
                    </div>
                    <div className="pic p-4 grid place-items-center">
                        <svg className='w-48 h-48' width="551" height="516" viewBox="0 0 551 516" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M320.773 405.796H229.123V314.147H320.773V405.796ZM436.715 405.796H345.065V314.147H436.715V405.796ZM204.831 405.796H113.181V314.147H204.831V405.796ZM436.715 115.941V284.885H113.182V115.941H436.715ZM483.091 67.3561H67.9089V448.308H483.092L483.091 67.3561ZM0 515.664V0H551V515.665L0 515.664Z" fill="url(#paint0_linear_225_25)"/>
                            <defs>
                                <linearGradient id="paint0_linear_225_25" x1="551" y1="246.5" x2="-5.92826e-06" y2="246.5" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#F46737"/>
                                    <stop offset="0.50498" stopColor="#945DD6"/>
                                    <stop offset="1" stopColor="#13ADC7"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>                    
                </div>
                {/* service */}
                <div className="gap-5 service flex flex-col sm:flex-row-reverse sm:items-center">
                    <div className="flex flex-col gap-y-3 2xl:pl-4">
                        <div className="text-white equinox-bold tracking-wider uppercase text-xl md:text-2xl 2xl:text-3xl">
                            2. {code.title}
                        </div>
                        <p className="dosis-medium text-white md:text-lg 2xl:text-2xl">
                            {code.description}    
                        </p>
                    </div>
                    <div className="pic p-4 grid place-items-center">
                        <svg className='w-48 h-48' width="270" height="270" viewBox="0 0 270 270" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M236.25 16.875C240.726 16.875 245.018 18.6529 248.182 21.8176C251.347 24.9822 253.125 29.2745 253.125 33.75V236.25C253.125 240.726 251.347 245.018 248.182 248.182C245.018 251.347 240.726 253.125 236.25 253.125H33.75C29.2745 253.125 24.9822 251.347 21.8176 248.182C18.6529 245.018 16.875 240.726 16.875 236.25V33.75C16.875 29.2745 18.6529 24.9822 21.8176 21.8176C24.9822 18.6529 29.2745 16.875 33.75 16.875H236.25ZM33.75 0C24.7989 0 16.2145 3.55579 9.88515 9.88515C3.55579 16.2145 0 24.7989 0 33.75L0 236.25C0 245.201 3.55579 253.785 9.88515 260.115C16.2145 266.444 24.7989 270 33.75 270H236.25C245.201 270 253.785 266.444 260.115 260.115C266.444 253.785 270 245.201 270 236.25V33.75C270 24.7989 266.444 16.2145 260.115 9.88515C253.785 3.55579 245.201 0 236.25 0L33.75 0Z" fill="url(#paint0_linear_226_27)"/>
                            <path d="M115.662 78.4012C116.447 79.185 117.071 80.116 117.496 81.1411C117.922 82.1662 118.141 83.2651 118.141 84.3749C118.141 85.4848 117.922 86.5837 117.496 87.6088C117.071 88.6338 116.447 89.5649 115.662 90.3487L70.9936 135L115.662 179.651C117.246 181.236 118.136 183.384 118.136 185.625C118.136 187.866 117.246 190.014 115.662 191.599C114.077 193.183 111.929 194.073 109.688 194.073C107.447 194.073 105.299 193.183 103.714 191.599L53.0892 140.974C52.3034 140.19 51.68 139.259 51.2547 138.234C50.8293 137.209 50.6104 136.11 50.6104 135C50.6104 133.89 50.8293 132.791 51.2547 131.766C51.68 130.741 52.3034 129.81 53.0892 129.026L103.714 78.4012C104.498 77.6154 105.429 76.992 106.454 76.5667C107.479 76.1413 108.578 75.9224 109.688 75.9224C110.798 75.9224 111.897 76.1413 112.922 76.5667C113.947 76.992 114.878 77.6154 115.662 78.4012V78.4012ZM154.339 78.4012C153.553 79.185 152.93 80.116 152.505 81.1411C152.079 82.1662 151.86 83.2651 151.86 84.3749C151.86 85.4848 152.079 86.5837 152.505 87.6088C152.93 88.6338 153.553 89.5649 154.339 90.3487L199.007 135L154.339 179.651C152.755 181.236 151.865 183.384 151.865 185.625C151.865 187.866 152.755 190.014 154.339 191.599C155.924 193.183 158.072 194.073 160.313 194.073C162.554 194.073 164.702 193.183 166.287 191.599L216.912 140.974C217.697 140.19 218.321 139.259 218.746 138.234C219.172 137.209 219.391 136.11 219.391 135C219.391 133.89 219.172 132.791 218.746 131.766C218.321 130.741 217.697 129.81 216.912 129.026L166.287 78.4012C165.503 77.6154 164.572 76.992 163.547 76.5667C162.522 76.1413 161.423 75.9224 160.313 75.9224C159.203 75.9224 158.104 76.1413 157.079 76.5667C156.054 76.992 155.123 77.6154 154.339 78.4012V78.4012Z" fill="url(#paint1_linear_226_27)"/>
                            <defs>
                                <linearGradient id="paint0_linear_226_27" x1="3.5" y1="140.5" x2="267.5" y2="140.5" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#239FC7"/>
                                    <stop offset="0.499108" stopColor="#8166BA"/>
                                    <stop offset="1" stopColor="#F46737"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_226_27" x1="52.7982" y1="137.404" x2="217.828" y2="137.404" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#239FC7"/>
                                    <stop offset="0.499108" stopColor="#8166BA"/>
                                    <stop offset="1" stopColor="#F46737"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>                    
                </div>
                {/* service */}
                <div className="gap-5 service flex flex-col sm:flex-row sm:items-center">
                    <div className="flex flex-col gap-y-3">
                        <div className="text-white equinox-bold tracking-wider uppercase text-xl md:text-2xl 2xl:text-3xl">
                            3. {asset.title}
                        </div>
                        <p className="dosis-medium text-white md:text-lg 2xl:text-2xl 2xl:pr-4">
                            {asset.description}    
                        </p>
                    </div>
                    <div className="pic p-4 grid place-items-center">
                        <svg className='w-48 h-48' width="68" height="129" viewBox="0 0 68 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M67.9839 82.9807C67.9839 63.7474 54.4491 58.2326 39.8074 55.1285L32.0468 53.5543C20.5709 51.2947 19.6853 47.9608 19.6853 43.4982C19.6853 37.7072 24.896 34.2464 33.6246 34.2464C43.9614 34.2464 46.61 39.4467 47.7089 43.3531L47.8135 43.6776C49.1137 47.084 52.1346 49.1158 55.9042 49.1158C56.8803 49.1158 57.7578 48.9667 58.4139 48.8336C62.4593 48.0274 65.2769 44.8023 65.2769 40.9827C65.2769 40.0353 65.1059 39.096 64.7617 38.1829C62.6887 31.5071 56.8642 20.9995 40.7251 18.6009V7.15203C40.7251 -2.38401 25.8117 -2.38401 25.8117 7.15203V18.6694C8.47509 21.3865 2.0911 33.1982 2.0911 43.4942C2.0911 62.2276 15.1167 67.4502 27.8404 70.0786L36.235 71.8644C48.1899 74.2993 50.2971 77.4216 50.2971 83.0775C50.2971 89.9891 44.4625 94.1091 34.6813 94.1091C21.9837 94.1091 19.3955 88.3827 17.6647 81.9548C16.6523 78.3971 13.4422 76.1053 9.48341 76.1053C8.62 76.1053 7.92766 76.2202 7.09243 76.3634L6.84086 76.4117C2.74721 77.3853 0 80.6144 0 84.4421C0 85.1697 0.128807 85.7885 0.233463 86.2884L0.36227 86.8608C2.20381 93.0953 6.26928 106.711 26.5463 109.749V121.732C26.5463 126.503 30.2938 129 34.001 129C37.7082 129 41.4597 126.503 41.4597 121.732V109.958C57.5606 107.858 68 97.5559 68 82.9827" fill="url(#paint0_linear_227_31)"/>
                            <defs>
                                <linearGradient id="paint0_linear_227_31" x1="-15.5" y1="83.5" x2="83.5" y2="85" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#239FC7"/>
                                    <stop offset="0.519942" stopColor="#8166BA"/>
                                    <stop offset="1" stopColor="#BB4848"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>                    
                </div>
            </div>
        </section>
    )
}

export default Services;