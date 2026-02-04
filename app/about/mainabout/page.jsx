import React from 'react'
import DiscoverSection from '../discover/page'
import Hero1 from '../hero/page'
import FeaturesTags from '../feature1/page'
import Vision from '../vision/page'
import Navbar from '../../page/navbar/page'
import Footer from '@/app/page/footer/page'
function Mainabout() {
  return (
   <>
   
      <Navbar />
      <Hero1 />
      
         <FeaturesTags/> 
       <DiscoverSection/>
       <Vision/>
       <Footer/>
   </>
  )
}

export default Mainabout
