import React,{ useRef, useLayoutEffect } from 'react'
import Slider from './Slider'
import gsap from 'gsap';
import { motion,animate, easeInOut } from "framer-motion"
import ScrollTrigger from 'gsap/ScrollTrigger';
import NewCreation from './NewCreation';
import CabduryWorld from './CabduryWorld';
import Footer from './Footer';
import Navbar from './Navbar';

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
     <div className="bg-no-repeat  justify-center place-content-center bg-cover bg- w-full bg-[url('https://th.bing.com/th/id/OIP.joal2x99E0IEJkN7fIL-vwHaEi?w=720&h=441&rs=1&pid=ImgDetMain')]">
          <div  ref={bg} className=' section  h-[100vh]  bg  w-[100%z] rounded-[50%] overflow-hidden border-white flex justify-center flex-col place-items-center bg-no-repeat bg-cover bg-[url("https://www.mariachristofi.com/wp-content/uploads/2013/07/render.jpg")]'>
          <h1 className='intro text-white font-extrabold text-[5vh] capitalize'>give your loved one a sweet moment</h1>
                {[{
                  img:"https://media0.giphy.com/media/ZGHfYRurzAXUrRbHmW/source.gif"
                },
                {
                img:"https://media0.giphy.com/media/lp7kH8Zj448tYYeVgh/source.gif"
                },
                {
                img:"https://media.giphy.com/media/lSgj9y0NRRZWPS5Qrb/giphy.gif"
                 }].map((items,index)=>{
                     return  < span key={index} className= 'h-[30vh]'>
                        <img key={index} data-scroll data-scroll-speed="-0.2"  src={items.img} alt=""  className=' gif w-[30vw] h-[50vh]' />
                      </span>
                 })}
          </div>
     </div>
           <NewCreation/>
            <CabduryWorld/>
            <Footer/>
    </div>
  )
}

export default Home
