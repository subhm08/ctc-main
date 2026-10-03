import React from 'react'

const About = () => {
    return (
        <>
            <section id="about" className="  m-4 rounded-md">
                <div class="max-w-6xl mx-auto grid md:grid-cols-2 flex-col  items-center gap-8 px-4 py-8 ">
                    <div data-aos="fade-left" className='text-center font-marcellus '>
                        <h3 className="text-3xl font-bold text-amber-700 mb-4 tracking-widest">Dr. Akhil Kumar Gupta</h3>
                        <p className="text-gray-700  tracking-wider text-xl">
                            Dr. Akhil Kumar Gupta is a certified physiotherapist with over 2 years of experience in restoring mobility and reducing pain.
                            His holistic treatment plans blend manual therapy, exercise, and recovery science.
                        </p>
                    </div>
                    <div >
                        <img src="bg.jpg" className="rounded shadow-lg h-[600px] " alt="Doctor" data-aos="fade-right" />
                    </div>
                </div>
           </section>
        </>
    )
}

export default About