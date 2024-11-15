import React, { useState } from 'react'
import Herosection from '../../components/Herosection/Herosection'
import HowItWorks from '../../components/HowitWorks/HowItWorks'
import Discover from '../../components/Discover/Discover'
import Filter from '../../components/Filter/Filter'
import Deals from '../../components/Deals/Deals'

const Home = () => {
  return (
    <div>
      <Herosection />
      <HowItWorks />
      <Discover />
      <Filter />
      <Deals />
    </div>
  )
}

export default Home