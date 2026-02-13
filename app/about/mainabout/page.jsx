import React from 'react'
import DiscoverSection from '../discover/page'
import Hero1 from '../hero/page'
import FeatureChips from '../feature1/page'
import Vision from '../vision/page'
import Navbar from '../../page/navbar/page'
import Footer from '@/app/page/footer/page'
function Mainabout() {
  return (
   <>
   
      <Navbar />
      <Hero1 />
      
         <FeatureChips /> 
       
        <Vision/>
        
       <DiscoverSection/>
       <Footer/>
   </>
  )
}

export default Mainabout
