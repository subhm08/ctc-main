import React from 'react'
import { FcGoogle } from "react-icons/fc";

const SocialLinks = () => {
  return (
    <div><div className=" px-4 py-2 sm:col-span2 items-center bg-white m-4 rounded-md t-8">
    <p className="text-2xl mt-4 text-center">
      Connect us on
    </p>
    <div className='flex justify-around my-6'>
        <a href="https://www.facebook.com/profile.php?id=61577576155598" target='blank'><i className='bi bi-facebook text-4xl hover:text-blue-600'></i></a> 
        <a href="https://www.instagram.com/care2cure.physio/" target='blank'> <i className='bi bi-instagram text-4xl transition duration-300 rounded-md p-0.5 hover:text-red-400'></i></a>
        <a href="https://www.linkedin.com/in/dr-akhil-kumar-gupta-b32677323" target='blank'>  <i className='bi bi-linkedin text-4xl hover:text-blue-700'></i></a>
        <a href="https://g.co/kgs/ZunZ4NY" target='blank'><i className='bi bi-google text-4xl hover:text-amber-600'></i></a>
        <a href="https://wa.me/919204203871" target='blank'><i className='bi bi-whatsapp text-4xl hover:text-green-700'></i></a>
    </div>
  </div></div>
  )
}

export default SocialLinks