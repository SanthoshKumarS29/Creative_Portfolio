import React from 'react'
import bgimg from '../assets/Background.jpg'

const Hero = () => {
    return (
        <div className="text-white" id='hero'>
            <div className='max-w-[900px] md:mt-[96px]  w-full h-screen mx-auto'>
                <div className='relative'>
                    <img src={bgimg} alt='background' className='object-cover w-full h-[500px]' />
                    <div className='absolute inset-0 flex flex-col items-start justify-center p-9 text-white leading-relaxed'>
                        <p className='text-[#CD853F] font-bold text-base md:text-lg'>Hi, I am a</p>
                        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 mb-3'>SANTHOSH KUMAR</h1>
                        <p className='md:text-lg'>My goal is always the same: to create a website that resonates with my client and leaves a lasting impression.</p>
                        <button className='bg-transparent border-2 border-[#CD853F] w-[100px] md:w-[120px] rounded-md font-bold my-6 py-3 text-white hover:bg-[#CD853F] hover:text-black ease-in-out duration-500'>Hire Me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
