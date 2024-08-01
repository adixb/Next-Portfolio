import { HoverEffect } from '../components/ui/card-hover-effect';
import ServiceData from '../data/ServiceSection';

export default function ServiceSection() {
  return (
    <>
      <div id='services' className='service-section w-full h-auto bg-black flex flex-col items-center justify-center px-4 md:px-36 py-12 md:py-36'>
        <h1 className="text-white text-3xl md:text-4xl  m-2 p-2 rounded-md text-center">Services</h1>
        <div className='service-grid grid grid-cols-1  md:grid-cols-1 lg:grid-cols-4 gap-7'>
          {ServiceData.map((item) => (
            <div key={item.id} className="mb-8">
              <HoverEffect items={[item]} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
