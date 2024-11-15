import React, { useState } from 'react'
import Herosection from '../../components/Herosection/Herosection'
import HowItWorks from '../../components/HowitWorks/HowItWorks'
import Discover from '../../components/Discover/Discover'
import Filter from '../../components/Filter/Filter'
import Deals from '../../components/Deals/Deals'
import GoogleForm from '../../components/GoogleForm/GoogleForm'

const Home = () => {
  return (
    <div>
      <Herosection />
      <HowItWorks />
      <Discover />
      <Filter />
      <Deals />
      <GoogleForm />
    </div>
  )
}

export default Home