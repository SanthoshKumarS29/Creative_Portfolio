import React from 'react'
import about from '../assets/Man.png'

const About = () => {
    return (
        <div className='text-white' id="About">
            <div>
            <div className='max-w-[900px] md:mt-[96px] w-full mx-auto'>
                <div className='grid md:grid-cols-2 items-center justify-center p-8'>
                    <img src={about} alt="/" className='mx-auto py-6 md:w-[300px] ' />
                    <div className='flex flex-col justify-center'>
                        <p className='text-[#CD853F] font-bold text-lg md:text-xl'>About Me</p>
                        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Lets Introduce Myself...</h1>
                        <p className='text-sm md:text-base'>
                            As a recent graduate in Computer Science.Where i can use my education and skills to achieve personal and professional growth while making the positive impact And I have a strong passion towards learning and updating my skills.Eager to learn new technologies. Looking for opportunities to uplift myself.
                        </p>
                        <button className='bg-transparent border-2 border-[#CD853F] w-[250px] md:w-[120px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-white hover:bg-[#CD853F] hover:text-black ease-in-out duration-500'>Download CV</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default About
