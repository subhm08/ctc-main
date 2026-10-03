import React from 'react'
import Location from '../Pages/Location'
import SocialLinks from '../Pages/SocialLinks'

const Footer = () => {
  return (
    <div className='bg-amber-700 rounded-t-md px-4 py-2 mt-4 font-marcellus'>
      <div className='my-8 grid grid-cols-1 md:grid-cols-2 items-center gap-4 text-gray-100 '>
        <img  src="logo.jpg" alt="" className='rounded-full size-28  sm:size-36'/>
        <h2 className="font-marcellus font-semibold text-lg mb ">Care 2 Cure Physiotheraphy and Rehab Center</h2>
        <hr className='md:col-span-2 mt-4'/>
      </div>
      <div className="grid md:grid-cols-3  grid-cols-1 gap-12 items-center text-gray-100 ">
        <div className=''>
          <p className='tracking-wider'>We provide expert physiotherapy care to relieve pain, restore mobility enhance recovery, and improve overall well-being with personalized treatment plans.</p>
        </div>
        <div className=''>
          <h2 className="text-lg mb-4">Our Services</h2>
          {["Pain Relief Therapy", "Sports injury Rehab", "Exercise Therapy", "Chronic Pain Relief", "Pediatric Physiotheraphy", "Ligament Injury"].map((item, index)=>
            <p className='text-gray-200 mb-1 hover:text-amber-500'>{item}</p>
          )} 
        </div>
        <div className='flex flex-col'>
          <a  className="text-lg mb-2 hover:text-amber-500 cursor-pointer"><i className='bi bi-geo-alt-fill pr-2'></i>RPS Law College Road, Vastu State Colony, RPS more, Patna, India </a>
          <span className="text-lg mb-2">
            <i className='bi bi-telephone-fill pr-2'></i> 
            <a href="tel:8789383727" className='hover:text-amber-500 cursor-pointer'>+91 8789383727</a> 
            {/* <a href="tel:9204203871" className='hover:text-amber-500 cursor-pointer px-4'>+91 9204203871</a> */}
          </span>
          <a href='mailto:care2curephysiotherapy71@gmail.com' className="text-lg mb-2 hover:text-amber-500 cursor-pointer"><i className='bi bi-envelope-fill pr-2'></i> care2curephysiotherapy71@gmail.com</a>
        </div>
        
      </div>
      <hr className='mt-8'/>
     <div className='bg-transparent'>
     <SocialLinks/>
     </div>
      <hr />
      <div className='mt-8 text-center flex justify-center gap-2'>
        <p >Copyright © 2025 - Made with ❤️ by  </p>
        <a href="" className='hover:text-amber-400 hover:underline'>Shubham kumar</a>
        <p>| All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer