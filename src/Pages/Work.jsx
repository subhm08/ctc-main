import React from 'react'
import { Link } from "react-router-dom"

const Work = () => {
    const steps = [
        {
            id: 1,
            title: "1. Initial Assessment & consultation",
            description: "Your journey begins with a thorough evaluation by one of physiotherapists time to understand your symtom goal.",
            icon: "icon-work-step-3.svg"
        },
        {
            id: 2,
            title: "2. Personalized Treatment Planz",
            description: "Based on your assessment, we create a customized treatment plan tailored to your specific needs and goals.",
            icon: "icon-work-step-2.svg"
        },
        {
            id: 3,
            title: "3. Hands-On Therapy & Guided Exercises",
            description: "Our experienced physiotherapists will work with you to implement your treatment plan , providing hands-on therapy and guided exercises to help you achieve optimal results.",
            icon: "icon-work-step-1.svg"
        }
    ]
  return (
    <div>
        <section id="work" className="grid grid-col-1 md:grid-cols-2  m-4 rounded-md bg-gray-100 font-marcellus  py-8" >
            <div className='px-4 flex flex-col mt-8'>    
                <h2 className=' text-lg  text-amber-700'>HOW IT WORK</h2>
                <p className=' text-3xl mt-4' >Step-by-step care for lasting recovery</p>
                <img data-aos="fade-right" data-aos-delay="300" src='machines.jpg' className='mt-8 rounded-xl  opacity-65' />
                
            </div>

            <div className='px-4 flex flex-col mt-8'>
                {
                    steps.map((step, index) =>
                        <div className='flex  gap-8 m-4' data-aos="fade-down" data-aos-delay={index*100}>
                            <div>
                                <img src={step.icon} alt="" className='size-12'/>
                            </div>
                            <div>
                                <h2 className='text-xl mb-2'>{step.title}</h2>
                                <p className='text-gray-600'>{step.description}</p>
                            </div>
                        </div>
                    )
                }
                <Link to='/contact' className=' px-2 py-2 bg-amber-700  rounded-xl text-white w-fit text-xl mt-8'><i className='bi bi-telephone'></i> Contect us <i className='bi bi-arrow-right-circle ml-8'></i></Link>
            </div>
        </section>
    </div>
  )
}

export default Work