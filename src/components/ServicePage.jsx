import React from 'react'
import Testmonials from "../Pages/Testimonials"
import Appointment from "../Pages/Appointment"
const ServicePage = () => {
    const services = [
        {
            id: 1,
            title: 'Neck Pain',
            description: 'Therapy for neck stiffness, strain, or disc-related discomfort through manual techniques and posture correction.',
            image: 'icon-neck-pain.svg',
        },
        {
            id: 2,
            title: 'Arthritis',
            description: 'Pain management and joint mobility improvement for rheumatoid and osteoarthritis conditions.',
            image: 'icon-arthritis.svg',
        },
        {
            id: 3,
            title: 'Periarthritis',
            description: 'Treatment to reduce inflammation and pain in shoulder joints, commonly known as frozen shoulder.',
            image: 'icon-periarthritis.svg',
        },
        {
            id: 4,
            title: 'Osteoarthritis',
            description: 'Customized exercises and modalities to manage knee, hip, and spine degeneration symptoms.',
            image: 'icon-osteoarthritis.svg',
        },
        {
            id: 5,
            title: 'Cerebral Palsy (C.P. Child)',
            description: 'Pediatric physiotherapy for improving motor skills, posture, and mobility in children with cerebral palsy.',
            image: 'icon-cp-child.svg',
        },
        {
            id: 6,
            title: 'Facial Palsy',
            description: 'Rehabilitation to restore facial muscle function and symmetry affected by nerve weakness or Bell’s palsy.',
            image: 'icon-facial-palsy.svg',
        },
        {
            id: 7,
            title: 'Paralysis',
            description: 'Comprehensive therapy for partial or full paralysis to promote strength, balance, and mobility.',
            image: 'icon-paralysis.svg',
        },
        {
            id: 8,
            title: 'Stroke Rehabilitation',
            description: 'Focused recovery plan to help stroke patients regain body control and functional independence.',
            image: 'icon-stroke.svg',
        },
        {
            id: 9,
            title: "Parkinson's Disease",
            description: 'Motor coordination and balance training to manage tremors, rigidity, and slow movement.',
            image: 'icon-parkinsons.svg',
        },
        {
            id: 10,
            title: 'Sports Injury',
            description: 'Rehab for athletic injuries such as sprains, muscle pulls, and overuse syndromes.',
            image: 'icon-sports-injury.svg',
        },
        {
            id: 11,
            title: 'Sciatica',
            description: 'Treatment for radiating pain from lower back to leg caused by sciatic nerve compression.',
            image: 'icon-sciatica.svg',
        },
        {
            id: 12,
            title: 'Sprain & Strain',
            description: 'Physiotherapy for ligament sprains and muscle strains due to injury or overuse.',
            image: 'icon-sprain-strain.svg',
        },
        {
            id: 13,
            title: 'Tendinitis',
            description: 'Pain relief and healing for inflamed or irritated tendons due to repetitive stress.',
            image: 'icon-tendinitis.svg',
        },
        {
            id: 14,
            title: "Tennis/Golfer’s Elbow",
            description: 'Therapy for elbow pain from repetitive arm movements, common in athletes and workers.',
            image: 'icon-tennis-elbow.svg',
        },
        {
            id: 15,
            title: 'PIVD (Disc Problem)',
            description: 'Non-surgical management of slipped disc and spinal disc bulge causing back or leg pain.',
            image: 'icon-disc-problem.svg',
        },
        {
            id: 16,
            title: 'Frozen Shoulder',
            description: 'Stretching and mobilization techniques to relieve stiffness and restore shoulder mobility.',
            image: 'icon-frozen-shoulder.svg',
        }
    ];
    
    
  return (
    <div className="contact  rounded-md bg-amber-100 font-marcellus  py-8">
        <section id="Services" className=" m-4 " >
            <div className='bg-amber-50  px-8 py-8 shadow-xl rounded-xl my-6'>
                <h2 className=' text-2xl  text-amber-700 text-center md:text-4xl md:py-12'>Treatment We Provide</h2>
            </div>
            <div className='grid md:grid-cols-4 grid-cols-1 mt-8'>
            {
                services.map((service, index) =>
                    <div className='bg-gray-600 shadow-2xl px-4 flex flex-col text-white font-marcellus m-4 rounded-xl py-8 group hover:bg-amber-100 ' data-aos="fade-down" data-aos-delay="300">
                        <h3 className='font-bold tracking-wide text-2xl  text-center group-hover:text-black'>{service.title}</h3>
                        <p className=' pt-2 text-base text-slate-200 group-hover:text-black '>{service.description}</p>
                    </div>
                )
            }
            </div>
            <Testmonials/>
            <Appointment/>
        </section>
            </div>
  )
}

export default ServicePage