import React from 'react'
import Chocolate from './Chocolate'
import DarkChoco from './DarkChoco'
import MilkChoco from './MilkChoco'
import WhiteChoco from './WhiteChoco'
import Navbar from './Navbar'
import Footer from './Footer'
import './index.css'

const OurProducts = () => {
  return (
    <div className='overflow-hidden our-products'>
      <Navbar/>
      <Chocolate/>
      <DarkChoco/>
      <MilkChoco/>
      <WhiteChoco/>
      <Footer/>
      
    </div>
  )
}

export default OurProducts
