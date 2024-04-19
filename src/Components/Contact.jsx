import React from 'react'

const Contact = () => {
    return (
        <div id='Contact'>
            <div className='max-w-[900px] md:mt-[96px] w-full mx-auto p-2'>
                <div>
                    <h1 className='text-3xl font-bold mb-6 text-[#CD853F]'>Contact Me</h1>
                </div>
                <div>
                    <form className='grid grid-cols-1 gap-4'>
                        <input type="text" className='border-2 border-[#CD853F] p-2' placeholder='First Name' />
                        <input type="text" className='border-2 border-[#CD853F] p-2' placeholder='Last Name' />
                        <input type="text" className='border-2 border-[#CD853F] p-2' placeholder='Email' />
                        <textarea className='border-2 border-[#CD853F] p-2' placeholder='Enter Your Message'></textarea>
                        <button type='Submit' className=' text-white px-4 py-2 rounded-md border-2 border-black '>Submit</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Contact
