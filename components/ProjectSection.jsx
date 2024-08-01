'use client';

import React from 'react';
import ProjectSectionData from '../data/ProjectSection';
import Image from 'next/image';

function ProjectSection() {
  return (
    <>
      <div id='projects' className='Project-Section w-full h-auto bg-black'>
        <h1 className="text-white text-3xl md:text-4xl p-4 rounded-md text-center">Tech Stack and Tools</h1>
        <div className='Bentogrid mx-6 md:mx-12 flex flex-wrap items-center justify-center py-12 gap-8'>
          {ProjectSectionData.map((project, index) => (
            <div key={index} className="Project-Item flex items-center justify-center">
              <Image 
                src={project.image} 
                alt={`Image_number${index}`} 
                width={64} // specify width
                height={64} // specify height
                className="object-contain" // ensure image fits within container
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectSection;
