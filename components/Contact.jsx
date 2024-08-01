'use client'
import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { SiBuymeacoffee } from "react-icons/si";
import { useForm } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("mjvnzrao");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await handleSubmit(e);
      alert("Message sent");
      console.log(result);
    } catch (err) {
      console.log(err);
      alert("Error!");
    }
  };

  return (
    <div id='contact' className='Contact-Section w-full  bg-black flex flex-col md:flex-row items-center justify-evenly min-h-screen'>
      <div className='flex flex-col text-white mb-10 md:mb-0'>
        <span className='text-white flex text-xl md:text-2xl mr-0 md:mr-8 my-5'>
          <FaLocationDot className='w-7 h-7 mr-2'/>
          India
        </span> 
        <span className='text-white flex text-sm md:text-2xl mx-1'>
          <CiMail className='w-7 h-7 mr-1'/>
          aditya.bhattacharjee706@gmail.com
        </span>
        <div className='flex items-center gap-5 my-5 mx-1 md:mr-8'>
          <a href='https://github.com/adixb' target='_blank' rel='noopener noreferrer'><FaGithub className='w-7 h-7' /></a>  
          <a href='https://www.linkedin.com/in/aditya-bhattacharjee-288462215/' target='_blank' rel='noopener noreferrer'><FaLinkedin className='w-7 h-7' /></a> 
          <a href='https://twitter.com/Acejumanji' target='_blank' rel='noopener noreferrer'><FaTwitter className='w-7 h-7' /></a>
          <a href='https://buymeacoffee.com/adityabhatk' target='_blank' rel='noopener noreferrer'><SiBuymeacoffee className='w-7 h-7' /></a>
        </div>
      </div>
      
      <div className='Contact-Form text-white w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-center'>
        <p className='text-3xl md:text-5xl  mb-6 text-white'>Contact Me</p>
        <form className='form flex flex-col items-center w-full' onSubmit={(e) => handleFormSubmit(e)}>
          <div className='flex flex-col p-2 w-full'>
            <input type="text" id="name" className='input-field text-black p-3 rounded-xl' name='name' placeholder="Enter your name" />
          </div>
          <div className='flex flex-col p-2 w-full'>
            <input type="email" id="email" className='input-field text-black p-3 rounded-xl' placeholder="Enter your email address" name="email"/>
          </div>
          <div className='flex flex-col p-2 w-full'>
            <textarea id="message" rows="5" className='input-field text-black p-3 rounded-xl' placeholder="Enter your message" name="message"></textarea>
          </div>
          <button type="submit" className='bg-white border border-solid border-white text-black font-bold py-2 px-4 rounded hover:bg-black hover:text-white mt-6 w-36'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
