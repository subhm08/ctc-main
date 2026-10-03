import React from 'react'
import TestimonialSection from './TestimonialSection';

const Testimonials = () => {
  const review = ["Friendly Environment", "Holistic Healing", "Excellent Service", "Professional Staff", "Great Experience"];
  return (
    <div>
      <section className="grid grid-cols-1 items-center lg:grid-cols-2  m-4 rounded-md bg-zinc-200 font-marcellus py-8">
        <div className="flex flex-col px-4">
          <h2 className='text-lg tracking-wider text-amber-700'>TESTIMONIALS</h2>
          <p className='text-3xl mt-4'>See what peoples think about us</p>
          {
            review.map((item, index) =>
              <>
                <div className="flex mt-4 gap-4 text-lg" data-aos="fade-down" data-aos-delay={index+1*100} >
                  <i className='bi bi-check-circle'></i>
                  <p>{item}</p>
                </div>
                <hr className='h-full text-gray-400 mt-2' />
              </>
            )
          }
           <div
            className=" mt-6 w-full bg-cover bg-center rounded-xl "
            style={{
              backgroundImage: "url('clinic.jpg')",
            }}
          >
            <div className=" w-full h-full rounded-xl bg-linear-to-t from-black to-gray-900 opacity-70 backdrop-blur-md p-6 text-white flex flex-col justify-end-safe font-marcellus">
              <h3 className="text-2xl mb-2">Trusted by many through patient stories</h3>
              <div className='mt-6 flex gap-4'>
                <div>
                  <p className=' text-amber-400'>
                    {
                      [...Array(4)].map((_, index)=>
                        <i className='bi bi-star-fill mx-0.5'></i>
                      ) 
                    }
                    <i className='bi bi-star-half mx-0.5'></i>
                  </p>
                  <p >4.8 Based on Google Review</p>
                </div>
              </div>
              <div className='mt-6 flex  items-center gap-4'>
                <a href="https://maps.app.goo.gl/RSCiSFGQfS957SR9A" target='blank' className='rounded-md text-gray-100 font-semibold py-2 text-lg border px-4 border-amber-300'>Find Us <i className='bi bi-geo-alt-fill ml-2 text-center'></i></a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <TestimonialSection/>
        </div>

      </section>
    </div>
  )
}

export default Testimonials