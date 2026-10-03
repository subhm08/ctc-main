import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
   <>
    <div className='bg-gray-200  sm:mx-6 mx-2 my-12  bg-cover bg-center rounded-2xl  ' style={{backgroundImage: "url(clinic.jpg)"}}>
        <div className=' bg-gray-800  h-full opacity-90 rounded-2xl flex flex-col justify-center sm:items-center text-white font-marcellus p-4 '>
          <div className='flex flex-col sm:items-center'>
          <img data-aos='zoom-out' data-aos-delay='300' src="logo.jpg" alt="" className='rounded-full size-28 my-4 sm:size-36'/>
            <h1 className='mb-4 text-xl' data-aos='fade-down'>WELCOME TO CARE 2 CURE PHYSIOTHERAPHY AND REHAB CENTER</h1>
            <h2 className='font-semibold text-2xl opacity-70 mb-12'  data-aos='fade-up' data-aos-delay='100'>A Complete Unit of Physiotheraphy for Kids and Adults</h2>
            <p className='text-lg' data-aos='fade-up' data-aos-delay='200'>At our physiotherapy clinic were dedicated to helping you heal, move better & feel your best. With personalized treatment plans, expert therapists.</p>
            <Link to='/appointment' data-aos='zoom-in' data-aos-delay='300' className=' rounded-2xl text-white bg-amber-900 py-4 px-8 my-4 text-xl hover:bg-amber-950 w-fit'>Book an Appoinment <i className='bi bi-arrow-right-circle'></i></Link>
            
          </div>
          <div className='bg-gray-600 rounded-lg bg-clip-padding backdrop-blur-md bg-opacity-40 w-fit py-2 px-4 flex flex-col mt-auto self-start ' data-aos='fade-up' data-aos-delay='300'>
                <i className='bi bi-clock-fill text-2xl'></i>
                <p>Working Hours</p>
                <p>Mon - Sun ( 9AM - 9PM )</p>
                <p className='mt-2 text-lg'>Home visit also available!</p>
            </div>
        </div>
    </div>
   </>
  )
}

export default Hero