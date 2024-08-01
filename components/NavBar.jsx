import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiBuymeacoffee } from 'react-icons/si';
import { Spotlight } from './ui/Spotlight';

function NavBar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Spotlight />
      <nav className='bg-black bg-opacity-90 fixed top-0 z-50 w-full'>
        <div className='container mx-auto px-4'>
          <div className='flex justify-between items-center py-4'>
            <div className='text-3xl text-white cursor-pointer' onClick={() => scrollToSection('home')}>
              <span className='text-red-600'>Aditya</span> Bhattacharjee<span className='text-sm font-bold'>Dev</span>
            </div>
            <ul className=' text-white hidden lg:flex items-center space-x-8'>
              <li className='cursor-pointer' onClick={() => scrollToSection('home')}>
                Home
              </li>
              <li className='cursor-pointer' onClick={() => scrollToSection('services')}>
                Services
              </li>
              <li className='cursor-pointer' onClick={() => scrollToSection('projects')}>
                Tech stack and Tools
              </li>
              <li className='cursor-pointer' onClick={() => scrollToSection('client')}>
              Clients
              </li>
              <li className='cursor-pointer' onClick={() => scrollToSection('contact')}>
                Contact
              </li>
      
              <li className='flex items-center gap-7'>
                |
                <a href='https://github.com/Adi0706' target='_blank' rel='noopener noreferrer' className='text-white'>
                  <FaGithub className='w-5 h-5' />
                </a>
                <a href='https://www.linkedin.com/in/aditya-bhattacharjee-288462215/' target='_blank' rel='noopener noreferrer' className='text-white'>
                  <FaLinkedin className='w-5 h-5' />
                </a>
                <a href='https://twitter.com/Acejumanji' target='_blank' rel='noopener noreferrer' className='text-white'>
                  <FaTwitter className='w-5 h-5' />
                </a>
                <a href='https://buymeacoffee.com/adityabhatk' target='_blank' rel='noopener noreferrer' className='text-white'>
                  <SiBuymeacoffee className='w-5 h-5' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
