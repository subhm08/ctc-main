import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Pain Relief Therapy',
            description: 'Our pain relief therapy is designed to help you manage chronic pain and improve your overall quality of life.',
            image: 'icon-service-1.svg',
        },
        {
            id: 2,
            title: 'Sports Injury Rehabilitation',
            description: 'Our sports injury rehabilitation program is designed to help you recover from injuries and get back to your favorite activities.',
            image: 'icon-service-2.svg',
        },
        {
            id: 3,
            title: 'Exercise Theraphy',
            description: 'Our exercise therapy program is designed to help you improve your strength, flexibility, and range of motion.',
            image: 'icon-service-3.svg',
        },
        {
            id: 4,
            title: 'Pediatric Physiotheraphy',
            description: 'Our pediatric physiotherapy program is designed to help children with physical disabilities or developmental delays.',
            image: 'icon-service-4.svg',
        }
    ]
   
    return (
        <>
        <section id="about" className="  m-4 rounded-md bg-cover bg-center" style={{ backgroundImage: "url(treatmentBg.jpg)" }}>
            <div className='w-full h-full bg-white rounded-lg backdrop-blur-md opacity-80 font-marcellus text-black px-4 py-8'>
                <h2 className=' text-lg text-center text-amber-700' >Our Services</h2>   
                <p className='text-center text-3xl mt-4' data-aos="fade-left" data-aos-delay="300">Tailored physiotherapy services for every need</p>

                <div className='grid md:grid-cols-4 grid-cols-1 mt-8'>
                    {services.map((service) =>
                    (
                        <div className='bg-gray-800/95  px-4 flex flex-col text-white font-marcellus m-4 rounded-xl py-8 hover:bg-amber-100 hover:text-black' data-aos="fade-down" data-aos-delay="300">
                            <img src={service.image} alt="" className='size-16' />
                            <h3 className='font-bold tracking-wide text-xl pt-4'>{service.title}</h3>
                            <p className=' pt-2 '>{service.description}</p>
                            <Link to='/services' className='mt-4 hover:underline'>Read More <i className='bi bi-arrow-right-circle ml-1'></i></Link>
                        </div>
                    )
                    )}
                </div> 
                    
            </div>
        </section>
        </>
    )
}



export default Services