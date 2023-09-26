import React from 'react'
import NavBar from './NavBar'
import ImageCarouselSlider from './Slider'
import ImageCarousel from './CarouselSlider'
import OurDream from './OurDream'
import Countup from './Countup'
import Testimonials from './Testimonials'

const Landing = () => {
  return (
    <div>
      {/* <NavBar/> */}
     
      <ImageCarousel />
      <OurDream />
      
      <Countup />
      <ImageCarouselSlider />
      <Testimonials />
    </div>
  );
}

export default Landing