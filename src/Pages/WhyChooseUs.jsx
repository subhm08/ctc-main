import React from 'react'

const WhyChooseUs = () => {
    return (
        <>
            <section id="about" className="  m-4 rounded-md bg-gray-100 font-marcellus  py-8" >

                <h2 className=' text-lg text-center text-amber-700'>Why Choose Us</h2>
                <p className='text-center text-3xl mt-4' data-aos="fade-up" data-aos-delay="300">How Care 2 Cure Physiotherapy stands out</p>
                <div className='grid grid-flow-row sm:grid-flow-col sm:grid-rows-2 gap-4 m-4'>
                    <div className='bg-blue-100 rounded-3xl px-4 py-4 flex flex-col justify-between h-auto ' data-aos="fade-left" data-aos-delay="300">
                        <p className=' text-gray-600'> Our clients consistently report positive outcomes and experiences.</p>
                        <h2 className='text-2xl text-gray-800 pt-8'> 95% Patient Satisfaction Rate</h2>
                    </div>
                    <div className='bg-amber-200 rounded-3xl px-4 py-4 flex flex-col justify-between h-auto' data-aos="fade-right" data-aos-delay="300">
                        <p className=' text-gray-600'> Delivering expert physiotherapy care to our community since.</p>
                        <h2 className='text-2xl text-gray-800 pt-8'> 2+ years of Trusted Experience</h2>
                    </div>
                    <div className='row-span-2 rounded-3xl bg-cover bg-center ' style={{backgroundImage:"url(treat.jpg)"}} data-aos="fade-left" data-aos-delay="300">
                        <div className='bg-slate-400/90 rounded-3xl p-4 text-white w-full h-full flex justify-between flex-col'>
                        <p className=' text-gray-100'> Over 500 patients have trusted us to help them recover, move batter.</p>
                        <h2 className='text-2xl  pt-8'> 500+ Patients Treated</h2>
                        </div>
                    </div>
                    <div className='bg-pink-200 rounded-3xl px-4 py-4 flex flex-col justify-between h-auto' data-aos="fade-right" data-aos-delay="300">
                        <p className='text-gray-600'> Compassionate care by experienced female physiotherapists for female patients.</p>
                        <h2 className='text-2xl text-gray-800 pt-8'> Female Physio Available</h2>
                    </div>
                    <div className='bg-slate-200 rounded-3xl px-4 py-4 flex flex-col justify-between h-auto' data-aos="fade-right" data-aos-delay="300">
                        <p className='text-gray-600'> Home visit facility for disabled patients for convenient recovery.</p>
                        <h2 className='text-2xl text-gray-800 pt-8'> Home Visit Also Available</h2>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyChooseUs