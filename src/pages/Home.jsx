import React from 'react'
import { Hero, OurFacilities, PopularHotels, OurHistory } from '../components'

function Home() {
  return (
    <div>
        <Hero />
        <PopularHotels />
        <OurFacilities />
        <OurHistory />
    </div>
  )
}

export default Home