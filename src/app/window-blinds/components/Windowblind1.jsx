import React from 'react'
import Link from 'next/link'

function Windowblind1() {
  return (
    <div className="w-full flex justify-center mt-10 px-4">
      
      <div  
        className="relative w-full max-w-7xl bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: "url('/media/windowblind.jpg')",
        }}
      >

        {/* Black Overlay for good readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <Link href="/window-blinds/window-blinds-videos">
        <div className="relative z-10 flex flex-col items-center justify-center text-center py-20 px-5">

          <p className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white">
            WINDOW BLINDS VIDEOS
          </p>

          <p className="text-yellow-400 text-lg sm:text-xl mt-3">
            For Window Blinds Videos Click Here
          </p>

        </div>
        </Link>
      </div>

    </div>
  )
}

export default Windowblind1
