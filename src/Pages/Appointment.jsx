import React from 'react';
import Booking from '../components/AppointmentForm';
import AppointmentForm from '../components/AppointmentForm';
import SocialLinks from './SocialLinks';

const Appointment = () => {
  return (
    <>
      <section id="about" className="grid grid-cols-1 items-center lg:grid-cols-2  m-4 rounded-md bg-zinc-200 font-marcellus py-8">
        <div className="flex flex-col px-4 ">
          <h2 className="text-lg text-amber-700">Book Your Appointment</h2>
          <p className="text-3xl mt-4">Book your Appointment with us according to your comfort</p>

          <div className=" mt-6 w-full bg-cover bg-center rounded-xl " style={{ backgroundImage: "url('appointment.webp')",}}>
            <div className=" w-full h-full rounded-xl bg-linear-to-t from-black to-gray-400 opacity-70 backdrop-blur-md p-6 text-white flex flex-col justify-end-safe font-marcellus">
              <h3 className="text-2xl mb-2">We are here to help you recover</h3>
              <p className="text-lg ">Our experts will guide you at every step of you r healing journey.</p>
              <div className='mt-6 flex gap-4'>
                <img src="icon-customer-service.svg" alt="" className='mb-2 size-11' />
                <div>
                  <p className=''>Customer Services</p>
                  <a href="tel:918789383727">+91 87893 83727</a>
                </div>
              </div>
              <div className='mt-6 flex gap-4'>
                <img src="icon-clock.svg" alt="" className='mb-2 size-11' />
                <div>
                  <p className=''>Opening Hours</p>
                  <p >Mon - Sun (9AM - 9PM)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Inputs */}
        <AppointmentForm/>
        <div className=" sm:col-span-2 items-center">
          <SocialLinks/>
        </div>
      </section>
    </>
  );
};

export default Appointment;
