import React from 'react'

const Education = () => {
    return (
        <div className='text-white' id="Education">
            <div className='max-w-[900px] md:mt-[96px] w-full mx-auto'>
                <div className='gap-4 p-2'>
                    <div className='p-6 bg-transparent rounded-lg shadow-md'>
                        <h1 className='text-3xl font-bold mb-4 text-[#CD853F]'>Education</h1>
                        <div className='border-t-2 border-[#CD853F] pt-4 leading-[50px]'>
                            <p className='mb-2 text-white uppercase font-bold'>Grace Matric Hr sec school (HSC), 2014-2018 with <span className='text-[#CD853F]'>57%</span> of mark</p>
                            <p className='mb-2 text-white uppercase font-bold'>Grace Matric hr sec school (SSLC), 2018-2020 with <span className='text-[#CD853F]'>65%</span> of mark</p>
                            <p className='mb-2 text-white uppercase font-bold'>K.L.N arts and sciences college, 2020-2023 with <span className='text-[#CD853F]'>71%</span> of mark</p>
                        </div>
                    </div>
                    <div className='p-6 bg-transparent rounded-lg shadow-md'>
                        <h1 className='text-3xl font-bold mb-4 text-[#CD853F]'>Skills</h1>
                        <ul>
                            <li className='flex justify-between items-center py-2 border-b border-[#CD853F]'>
                                <span className='text-white'>Tailwind CSS</span>
                                <span className='bg-[#CD853F] text-white px-2 py-3 rounded-full'>92%</span>
                            </li>
                            <li className='flex justify-between items-center py-2 border-b border-[#CD853F]'>
                                <span className='text-white'>JavaScript</span>
                                <span className='bg-[#CD853F] text-white px-2 py-3 rounded-full'>88%</span>
                            </li>
                            <li className='flex justify-between items-center py-2 border-b border-[#CD853F]'>
                                <span className='text-white'>React</span>
                                <span className='bg-[#CD853F] text-white px-2 py-3 rounded-full'>78%</span>
                            </li>
                            <li className='flex justify-between items-center py-2 border-b border-[#CD853F]'>
                                <span className='text-white'>Python</span>
                                <span className='bg-[#CD853F] text-white px-2 py-3 rounded-full'>80%</span>
                            </li>
                            <li className='flex justify-between items-center py-2'>
                                <span className='text-white'>Django</span>
                                <span className='bg-[#CD853F] text-white px-2 py-3 rounded-full'>75%</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Education
