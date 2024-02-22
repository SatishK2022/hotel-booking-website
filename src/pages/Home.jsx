import React from 'react'
import { Hero, OurFacilities, PopularHotels, OurHistory, Contact } from '../components'

function Home() {
  return (
    <div>
        <Hero />
        <PopularHotels />
        <OurFacilities />
        <OurHistory />
        <Contact />
    </div>
  )
}

export default Home