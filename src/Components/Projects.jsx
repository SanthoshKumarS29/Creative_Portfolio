import React from 'react'
import img1 from '../assets/First.png';
import img2 from '../assets/Second.png';
import img3 from '../assets/Third.png';
import img4 from '../assets/six.png';
import img5 from '../assets/Fourth.png';
import img6 from '../assets/Fiveth.png';

const Projects = () => {
    const config = {
        proj: [
            {
                id: 1,
                imag: img1,
                des: 'I will start learning HTML and CSS, and then I will create this portfolio.',
                link: 'https://santhoshkumars29.github.io/my-portfolio/',
                type: 'Portfolio',
            },
            {
                id: 2,
                imag: img2,
                des: 'Next, I learn javascript add some specification in My portfolio',
                link: 'https://santhoshkumars29.github.io/UpgradeMyPortfolio/',
                type: 'Portfolio',
            },
            {
                id: 3,
                imag: img3,
                des: 'Next, I create a project and its based on my Video Editing Instgram Profile ',
                link: 'https://santhoshkumars29.github.io/VEPortfolio',
                type: 'Portfolio',
            },
            {
                id: 4,
                imag: img4,
                des: "I create large site using html css and js its is big project",
                link: "https://santhoshkumars29.github.io/Hotel-BookingManagement/",
                type: 'Website',
            },
            {
                id: 5,
                imag: img5,
                des: "I will start learn React that time I will create this webiste ",
                link: "https://cartprj.netlify.app",
                type: 'ReactWebsite',
            },
            {
                id: 6,
                imag: img6,
                des: "And I will Create Another Static Website using React ",
                link: "https://reactsmallwebsite.netlify.app",
                type: 'ReactWebsite',
            }
        ]
    };
    return (
        <div id='Project'>
            <div className='max-w-[900px] md:mt-[96px] w-full mx-auto p-2'>
                <div>
                    <h1 className='text-3xl font-bold mb-6 text-[#CD853F]'>Projects</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {config.proj.map((project) => (
                        <div key={project.id} className='bg-[#CD853F] rounded-lg shadow-md overflow-hidden'>
                            <img src={project.imag} alt={project.title} className='w-full h-48 object-cover' />
                            <div className='p-4 flex flex-col items-center justify-center'>
                                <h2 className='text-lg font-bold mb-2 text-white'>{project.title}</h2>
                                <p className='text-white mb-4'>{project.des}</p>
                                <a className='bg-white text-[#CD853F] px-4 py-2 rounded-md hover:bg-[#F0E68C] transition-colors duration-300' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    )
}

export default Projects
