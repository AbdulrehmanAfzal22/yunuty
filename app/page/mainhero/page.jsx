import React from 'react'
import AboutSection from '../about/page'
import Navbar from '../navbar/page'
import Hero from '../hero/page'
import FeatureGrid from '../featuregrid/page'
import Indicator from '../indicator/page'
import TestimonialCards from '../testimonial/page'
import Feature from '../feature/page'
import Footer from '../footer/page'
function Mainhero() {
  return (
<>
<Navbar />
      <Hero />
      <AboutSection />
       
<Feature/>
<FeatureGrid/>
 <Indicator/>
       <TestimonialCards/> 
<Footer/>


</>
  )
}

export default Mainhero
