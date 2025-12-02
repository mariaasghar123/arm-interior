import React from 'react'
import Logo from './Logo'

function Footer() {
  return (
    <>
      <div className='bg-black w-full'>
        {/* Top Section */}
        <div className='container mx-auto px-4 py-12 md:py-16'>
          {/* CTA Section */}
          <div className='text-center mb-12 md:mb-16'>
            <p className='text-yellow-400 text-xl md:text-2xl font-medium mb-2'>
              WE WILL MAKE YOUR DREAM
            </p>
            <p className='text-white text-2xl md:text-4xl font-bold mb-6 md:mb-8'>
              WE TAKE CARE OF YOUR HOME
            </p>
            <button className='bg-yellow-400 hover:bg-black text-black hover:text-white font-semibold px-8 py-3 md:px-10 md:py-4 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer'>
  Connect With Us
</button>

          </div>

          {/* Main Footer Content */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12'>
            
            {/* Logo Section */}
            <div className='flex flex-col items-center md:items-start'>
              <div className='mb-6'>
                <Logo size={180} className="" />
              </div>
            </div>

            {/* Address Section */}
            <div className='text-center md:text-left'>
              <h3 className='text-yellow-400 text-lg md:text-xl font-semibold mb-4'>
                Visit Us
              </h3>
              <p className='text-white/90 text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0'>
                Showroom #02, Apple Garden, Jamal ud din Afghani Road, 
                Behind PTV Station, Adjacent Dubai Islamic Bank, 
                Sharfabad Near Imtiaz Store, Karachi 74800
              </p>
              
              {/* Contact Info */}
              <div className='mt-6 space-y-2'>
                <p className='text-white/80 text-sm'>
                  <span className='text-yellow-400'>Phone:</span> +92 300 1234567
                </p>
                <p className='text-white/80 text-sm'>
                  <span className='text-yellow-400'>Email:</span> info@example.com
                </p>
                <p className='text-white/80 text-sm'>
                  <span className='text-yellow-400'>Hours:</span> Mon-Sat 10AM - 8PM
                </p>
              </div>
            </div>

            {/* Account Section */}
            <div className='text-center md:text-left'>
              <h3 className='text-yellow-400 text-lg md:text-xl font-semibold mb-4'>
                Account
              </h3>
              <div className='space-y-4'>
                <button className='block w-full md:w-auto bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-400 border border-yellow-400/30 py-3 px-6 rounded-lg transition-all duration-300'>
                  Sign In / Register
                </button>
                
               
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className='bg-white text-black py-4'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
            <p className='text-sm text-black'>
              © {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer