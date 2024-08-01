'use client';
import React from 'react';
import ClientSectionData from '../data/ClientSection';
import Image from 'next/image';

function ClientSection() {
  return (
    <section id="client" className="Client-Section w-full h-auto mt-0 bg-black py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-white text-3xl md:text-4xl  p-1 rounded-md text-center">Clients</h1>

        <div className='Bentogrid flex flex-wrap items-center justify-center gap-8'>
          {ClientSectionData.map((client, index) => (
            <div key={index} className="Client-Item flex flex-col items-center justify-center">
              <div className="Client-Content flex flex-col items-center justify-center">
                <div className="relative w-44 h-44">
                  <Image
                    src={client.image}
                    alt={client.client_name}
                    layout='fill'
                    objectFit='contain'
                    className='rounded-md'
                  />
                </div>
                <h2 className="text-white text-xl md:text-xl font-bold my-2">{client.client_name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientSection;
