import React from 'react'
import Appointment from '../Pages//Appointment'

const AppointmentPage = () => {
  return (
    <section id="about" className=" w-sv  rounded-b-md font-marcellus  bg-center bg-cover " style={{backgroundImage:"url(appointment.webp)"}}>
        <div className='bg-amber-100/65 w-full h-full py-8'>
        <div className="flex flex-col px-4  ">
        <div className='bg-amber-50  px-8 py-8 shadow-xl rounded-xl my-6'>
                <h2 className=' text-2xl  text-amber-700 text-center md:text-4xl md:py-12'>Book Your Appointment</h2>
            </div>
          
      <Appointment/>
      </div>
    </div>
    </section>
  )
}

export default AppointmentPage