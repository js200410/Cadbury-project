import React, { useEffect, useLayoutEffect } from 'react'
import gsap,{Power2}  from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './index.css'

const CabduryWorld = () => {
  useEffect(()=>{
   gsap.from(".cadbury-world-title",{
      translateX:"100",
      scale:0
      , scrollTrigger:{
        trigger:".cadbury-world-title",
        scrub:1,
        ease:Power2.easeInOut,
      }
   })
   gsap.to(".cadbury-world-title",{
    translateX:0,
    scale:1 , scrollTrigger:{
      trigger:".cadbury-world-title",
      scrub:1,
      ease:Power2.easeInOut,
    }
   })
  },[])
  useLayoutEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(".cards",{
      opacity:0,
      scale:0, scrollTrigger:{
        trigger:".cards",
        scrub:1,
        ease:Power2.easeInOut,
      }
    })
    gsap.to(".cards",{
      scale:1,
      opacity:1,
      duration:1,
      scrollTrigger:{
        trigger:".cards",
        scrub:1,
        ease:Power2.easeInOut,
      }
    })
    gsap.from(".thnku",{
      opacity:0,
      y:100
  })
  gsap.to(".thnku",{
    opacity:1,
    stagger:0.2,
    scrollTrigger:{
      trigger:".thnku",
      start:"top 30%",
      end:"+=30%",
      scrub:3,
      pin:"true",

    }
  })        
  })
  return (
  <div>
   {/* <div className="cont h-[70vh] mt-0 flex bg-purple-950">
      <div className='bg-purple-950 cadbury-world'>
        <h1 className='cadbury-world-title p-3 text-[8vh] mt-[10vh] text-yellow-600 '>{["NEW","CADBURY DAIRY" ,"MILK" ,"&MORE"].map((index,value)=>{
            return <span className=' font-extrabold font-sans h1 uppercase ml-[8vh] ' key={index}>{index}
            <br/>
            </span>
        })}</h1>
      </div>
      <div className='w-[50%]'>
        <img data-scroll data-scroll-speed="-0.15" className=" thnku mb-[10vh]" src="https://www.cadburygiftsdirect.co.uk/media/wysiwyg/Multi_perso_DT_V2.png" alt="" />
        <img data-scroll data-scroll-speed="-0.1"  className="thnku" src="https://www.cadburygiftsdirect.co.uk/media/wysiwyg/CGD-Home-Perso-ani-LR_2.gif" alt="" />
      </div>
      
   </div> */}
      <div   className='h-[70vh] div bg-white flex gap-[2%] justify-center items-center overflow-hidden'> {["https://images.ctfassets.net/pmzhtobns06n/3ONtvIDWHyo8PShhOTZ4jB/f0bdb7c7f76bb94f7bdcb6a713dd767a/_Brandlogos_CDM.jpg?fm=webp&q=80",
        "https://images.ctfassets.net/pmzhtobns06n/g49BVpbGtQ4YYIlSm9iv8/eccb16148eeb1477dca2191290ae7d29/_Brandlogos_Twirl.jpg?fm=webp&q=80",
        "https://images.ctfassets.net/pmzhtobns06n/3xVsx15S4GgB2Hz4MrA9t4/b5af8a86fe29d664d4fbb7f31ab6f5c7/_Brandlogos_Wispa.jpg?fm=webp&q=80",
        "https://images.ctfassets.net/pmzhtobns06n/63m8lETZDvBE3csGyEoH2T/87233f6cfa893344acce8aa7fc7997b1/Bandlogo_Freddo.png?fm=webp&q=80",
        "https://images.ctfassets.net/pmzhtobns06n/7p9EiIGCV2A7YztSHKpZAN/95962dfc915f88975b82a4b370854690/_Brandlogos_CremeEgg.jpg?fm=webp&q=80"].map((index,value)=>{
            return <div key={ index} className='cards h-[30vh] w-[30vw] bg border-1 rounded-xl'>
                        <img src={index} alt="" className=' h-full w-full border-1 rounded-xl'/>
                   </div>
        })}
      </div>
  </div>
  )  
}

export default CabduryWorld
