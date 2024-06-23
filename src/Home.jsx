import React,{ useRef, useLayoutEffect } from 'react'
import Slider from './Slider'
import gsap from 'gsap';
import { motion,animate, easeInOut } from "framer-motion"
import ScrollTrigger from 'gsap/ScrollTrigger';
import CabduryWorld from './CabduryWorld';
import Footer from './Footer';
import Navbar from './Navbar';
import KnowProducts from './KnowProducts';
import Choices from './Choices';

function Home() {
  
  const bg = useRef(null) 
  useLayoutEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    const t1 = gsap.timeline({
      scrollTrigger:{
        trigger:".section",
        scrub:true,
        start:"top 30%",
        end:"+=400",
      }
    })

    t1.from(bg.current,{
      opacity:0,
      clipPath:`inset(30%)`,
      duration:1
    })
    t1.to(bg.current,{
      opacity:1,
      clipPath:`inset(0%)`,
      duration:1
    })
  },[])

  return (
    <div className='home'>
      <Navbar/>
      <Slider/>
      <KnowProducts/>
      <Choices/>
      <CabduryWorld/>
      <Footer/>
    </div>
  )
}

export default Home
