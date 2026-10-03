import React from 'react'
import Appointment from '../Pages/Appointment'
import Location from '../Pages/Location'
import ContectForm from './ContectForm'

const Contact = () => {
  return (
    <div className="contact  rounded-md bg-amber-100 font-marcellus  py-8">
        <div className='bg-amber-50  px-8 py-8 shadow-xl rounded-xl my-6'>
                <h2 className=' text-2xl  text-amber-700 text-center md:text-4xl md:py-12'>Contact Us</h2>
            </div>
        <section id="contect" className="grid grid-col-1 md:grid-cols-2 m-4 " >
            <div className='px-4 flex flex-col mt-8'>    
                <h2 className=' text-lg  text-amber-700'><i className='bi bi-dot'></i> CONTACT US</h2>
                <p className=' text-xl mt-2' >We are ready to help you move stronger , faster, and further.<br/> Let us know how we can assist you.</p>
                <p className='mt-4 text-gray-700 desc'> Whether you're dealing with pain or just need guidance, we're here to support you. <br/>Reach out today and take the first step toward better movement and lasting relief .</p>
                <img src='contact.jpg' className='mt-8 rounded-xl  opacity-65 h-80' />
                
            </div>

            <div className='px-4  grid grid-cols-1 md:grid-cols-2 mt-8 gap-8'>
                <div className='bg-white  p-8 flex flex-col justify-between'>
                    <i className='bi bi-geo-alt text-4xl'></i>
                    <div>
                        <h2 className='text-2xl mt-6 mb-2'>Location</h2>
                        <a href='https://maps.app.goo.gl/RSCiSFGQfS957SR9A' className=' hover:text-amber-700 text-slate-700 text-lg'> Vastu state colony, Law college road RPS more Danapur, Patna, India, Bihar</a>
                    </div>
                </div>
                <div className='bg-white  p-8 flex flex-col justify-between'>
                    <i className='bi bi-telephone text-4xl'></i>
                    <div>
                        <h2 className='text-2xl mt-6 mb-2'>Contact Us</h2>
                        <a href="tel:8789383727" className=' hover:text-amber-700 text-slate-700 text-lg block'>+91 87893 83727</a>
                        {/* <a href="tel:9204203871" className=' hover:text-amber-700 text-slate-700 text-lg'>+91 92042 03871</a> */}
                    </div>
                </div>
                <div className='bg-white p-8 flex flex-col justify-between'>
                    <i className='bi bi-envelope text-4xl'></i>
                    <div>
                        <h2 className='text-2xl mt-6 mb-2'>Email</h2>
                        <a href="mailto:care2curephysiotherapy71@gmail.com" className=' hover:text-amber-700 text-slate-700 text-lg w-full'>care2curephysiotherapy71@gmail.com</a>
                    </div>
                </div>
                <div className='bg-white  p-8 flex flex-col justify-between'>
                    <i className='bi bi-clock text-4xl '></i>
                    <div>
                    <h2 className='text-2xl mt-6 mb-2'>Opening Hours</h2>
                    <p className=' text-slate-700 text-lg'>Mon - Sun (9AM - 9PM)</p>
                    <p className='text-amber-700 text-lg'>Home Visit Also Available</p>
                    </div>
                </div>
            </div>
        </section>
        <Appointment/>
        <div className='grid md:grid-cols-2 grid-cols-1  bg-slate-100 rounded-xl  m-4'>
            <ContectForm/>
            <Location/>
        </div>
    </div>
  )
}

export default Contact