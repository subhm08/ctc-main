import React from 'react'
import CountUp from 'react-countup'

const Features = () => {
    const features = [
        {
            id: 1,
            title: 'Pain Relief Theraphy',
            desc: "Our pain relief theraphy focuses reducing discomfort.",
            image: "icon-feature-1.svg"
        },
        {
            id: 2,
            title: 'Flexible Scheduling',
            desc: "Our flexible scheduling (9AM - 9PM) allows you to choose the time that suits you best.",
            image: "icon-feature-3.svg"
        },
        {
            id: 3,
            title: 'Free Consultation on Sunday',
            desc: "Our free consultation on Sunday is a great opportunity to discuss your needs with our experts.",
            image: "icon-feature-2.svg"
        },
        {
            id: 4,
            title: 'Expert Male and Female Therapists',
            desc: "Our expert male and female therapists are here to help you according to your comfort.",
            image: "doctor-f.svg"
        },
        {
            id: 5,
            title: 'Personalized Treatment Plans',
            desc: "Our personalized treatment plans are designed to meet your unique needs and goals.",
            image: "icon-service-1.svg"
        }
    ]
    return (
        <div>
           <section id="about" className="  m-4 rounded-md bg-cover bg-center font-marcellus" style={{ backgroundImage: "url(treatment.webp)" }}>
            <div className='w-full h-full bg-gray-500/95 rounded-lg backdrop-blur-md opacity-80 font-marcellus  px-4 py-8'>
                <h2 className=' text-lg text-center text-amber-200'>Our Features</h2>
                <p className='text-center text-3xl mt-4 text-gray-50' data-aos="fade-up" data-aos-delay="300">Our feature as means choosing exceptional Features</p>
                <div className='grid grid-cols-1 md:grid-cols-5 my-8'>
                    {features.map((feature) =>(  
                        <div className='bg-slate-600/85 m-4 rounded-xl p-4 font-marcellus' data-aos="fade-down" data-aos-delay="300">
                            <img src={feature.image} alt="" className='text-white size-12'/>
                            <h3 className='text-2xl text-white py-4'>{feature.title}</h3>
                            <p className='text-gray-300'>{feature.desc}</p>
                        </div>
                        )
                    )}
                    
                </div>
                
                <div className='grid md:grid-cols-4 border border-gray-50 rounded-2xl items-center gap-x-6 gap-y-8 p-4 my-8' data-aos="fade-up" data-aos-delay="300">
                <h3 className='text-white text-3xl text-center my-8'>Interesting facts about Care 2 Cure</h3>
                    <div>
                        <h3 className='text-white text-xl text-center'>
                            <CountUp end={500} duration={50} />+ <br/>Patients Treated
                        </h3>
                    </div>
                    <div>
                    <h3 className='text-white text-xl text-center'>
                            <CountUp end={2} duration={100} />+ <br/>Years of Experience
                        </h3>
                    </div>
                    <div >
                    <h3 className='text-white text-xl text-center'>
                            <CountUp end={95} duration={50} />% <br/>Positive Customer Review
                        </h3>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Features