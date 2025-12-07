
import Navbar from '@/components/Navbar'
import React from 'react'
import ImageGallery from '../../featured/components/ImageGallery';

function page() {
 
  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/media/bg-arm.jpg')",
        }}
      >
        <div className='absolute inset-0 bg-black/0'></div>
        <Navbar />
        <div>
           <div className='text-center p-10'>
          <p className="wavy-underline inline-block text-4xl lg:text-6xl font-bold text-center text-black mx-auto">
          SHANGRI LA BLINDS
          </p>
          </div>
          <ImageGallery images={[
            '/media/3d1.webp',
            '/media/3d2.webp',
            '/media/3d3.webp',
            '/media/3d4.webp',
            '/media/3d5.webp',
            '/media/3d6.webp',]} />
        </div>

      </div>
        
    </div>
  );
}


export default page
