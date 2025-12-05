
import Navbar from '@/components/Navbar'
import React from 'react'
import VideosCards from '../../wall-sticker-self-adhesive/self-adhesive-videos/component/VideosCards';

function page() {
  const videoList = [
    { id: 1, title: "Wall Sticker Installation", video: "/media/video1.mp4" },
    { id: 2, title: "3D Wallpaper Guide", video: "/media/video2.mp4" },
    { id: 3, title: "Kitchen Sticker Tips", video: "/media/video3.mp4" },
  ];
 
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
          <p className="text-4xl text-black lg:text-6xl text-center p-9 font-bold py-20 relative z-30">
          MARBLE-PVC-VIDEOS

          </p>
        </div>
            <VideosCards videos={videoList} />
        
      </div>
        <div className="bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/media/bg-arm.jpg')",
  }}>
      
  </div>
    </div>
  );
}


export default page
