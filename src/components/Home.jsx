import React from 'react'

import Hero from '../Pages/Hero'
import About from '../Pages/About'
import Services from '../Pages/Services';
import WhyChooseUs from '../Pages/WhyChooseUs';
import Features from '../Pages/Features';
import Appointment from '../Pages/Appointment';
import Testimonials from '../Pages/Testimonials';
import Work from '../Pages/Work';
import ContectForm from './ContectForm'
import Location from '../Pages/Location';


const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Services/>
      <Work/>
      <WhyChooseUs/>
      <Features/>
      <Appointment/>
      <Testimonials/>
      <div className='grid md:grid-cols-2 grid-cols-1  bg-amber-50 rounded-xl  m-4'>
            <ContectForm/>
            <Location/>
        </div>
    </div>
  )
}

export default Home