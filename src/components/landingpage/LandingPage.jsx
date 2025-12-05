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
import WhatsAppButton from './WhatsappButton'

function LandingPage() {

  const homeCategories = [
  { id: 1, title: " WALLPAPERS", image: "/media/card1.webp", description: "Latest designs", link: "/wallpapers" },
  { id: 2, title: "FLOORING", image: "/media/card2.webp", description: "Premium quality", link: "/floorings" },
  { id: 3, title: "WINDOW BLIND", image: "/media/card3.webp", description: "Fun & colorful", link: "/window-blinds" },
];
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
      <ThreeCardSlider data={homeCategories}

      title="Home Wallpapers"
      subtitle="Trending designs curated for you"
      cols={3} 
      interval={4000}/>
      <AboutUs/>
      </div>
      <ProductSlider/>
      <CustomerReviews/>
      <FAQ/>
      <WhatsAppButton/>
    </div>
  )
}

export default LandingPage
