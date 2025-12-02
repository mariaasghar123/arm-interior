import React from 'react'
import HeroSection from './HeroSection'
import Logo from '../Logo'
import Navbar from '../Navbar'
import VideoBackground from '../Video'
import WallpaperCategories from './wallpapercategories'
import ThreeCardSlider from './Threecards'
import AboutUs from './AboutUs'
import ProductSlider from '@/app/shop/component/ProductSlider'
import CustomerReviews from './Review'
import FAQ from './FAQ'

function LandingPage() {
  return (
    <div>
      {/* <Logo/>
      <Navbar/> */}
      <VideoBackground>
        {/* <Logo size={180}/> */}
        <Navbar/>
        <HeroSection/>
      </VideoBackground>
      <div className="bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/media/bg-arm.jpg')",
  }}>
      <WallpaperCategories/>
      <ThreeCardSlider/>
      <AboutUs/>
      </div>
      <ProductSlider/>
      <CustomerReviews/>
      <FAQ/>
    </div>
  )
}

export default LandingPage
