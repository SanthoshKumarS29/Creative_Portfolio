import React from 'react'
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
    return (
        <div>
        <div className='relative p-8'>
            <div className='absolute inset-0 z-[-1]'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 1440 320'
                    className='absolute bottom-0'
                >
                    <path
                        fill='#CD853F'
                        fillOpacity='1'
                        d='M0,32L48,53.3C96,75,192,117,288,144C384,171,480,181,576,186.7C672,192,768,192,864,176C960,160,1056,128,1152,112C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
                    ></path>
                </svg>
            </div>
            <div className='relative z-10'>
                <p className='text-white text-center'>&copy; Santhosh @ All Right Reserved </p>
                <p className='text-white text-center'>Email:santhoshvk090@gmail.com</p>
                <ScrollToTop width='40' height='20' smooth />
            </div>
        </div>
        </div>

    )
}

export default Footer
