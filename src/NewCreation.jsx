import React, { useLayoutEffect,useEffect, useState,useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


const NewCreation = () => { 
 useLayoutEffect(()=>{
  gsap.registerPlugin(ScrollTrigger)
  gsap.to(".marquee",{
   transform:"translate(-1000%)",
   duration:5,
   scrollTrigger:{
     trigger:".yImg",
     start:"top 30%",
     end:"+=30%",
     duration:1,
     scrub:1,
   }
  })
 })
  const [isHover, setHover] = useState(Array(6).fill(false));
  const imgContainers = useRef([]);
  const images = useRef([]);
  useEffect(() => {
    
    imgContainers.current.forEach((container, index) => {
      gsap.to(container, {
        ease: 'linear',
      });
      gsap.to(images.current[index], {
        duration: 1,
        rotate:isHover[index] ? '10' : '0%',
        translateY: isHover[index] ? '-40%' : '0%',
      });
    });
  }, [isHover]);

 

  const toggleHover = (index) => {
    setHover((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
    
  };


  return (
    <div data-scroll data-scroll-speed="0.05" className='overflow-x-hidden h-screen new-creation-container bg-cover bg-no-repeat bg-[url("https://i2-prod.dailystar.co.uk/incoming/article23661345.ece/ALTERNATES/s615/0_Untitled-2021-03-10T121435829.jpg")]'>
        <h1 className="bg text-[10vh] font-sans uppercase font-semibold text-purple-900 text-center mt-[4vh]  ">our new creation</h1>
 <div className="scroller new-creation gap-10 flex-nowrap flex w-[250vw] items-center  p-10 ">
    {[
      {
  img:"https://images-tastehub.mdlzapps.cloud/images/f0f5a81a-af09-4a03-892e-0d4386ca0ada.png?fm=webp&q=80",
  h:"cadbury"},
  {
  img:"https://images-tastehub.mdlzapps.cloud/images/537c3b21-25ca-44f2-b166-e847592f4755.png?fm=webp&q=80",
  h:"cadbury dairy milk"},
  {
  img:"https://images-tastehub.mdlzapps.cloud/images/9cda0d83-e805-46db-a61d-50fc1b331909.png?fm=webp&q=80",
  h:"cadbury dairy milk"},
  {
  img:"https://images-tastehub.mdlzapps.cloud/images/c1474e6b-a438-49a1-acb2-285b098760d7.png?fm=webp&q=80",
  h:"cadbury dairy milk"},
  {
  img:"https://images-tastehub.mdlzapps.cloud/images/f803e0e8-a46f-4d26-aff1-959f1c8ada02.png?fm=webp&q=80",
  h:"cadbury"},
  {
  img:"https://images-tastehub.mdlzapps.cloud/images/8ee17957-7566-43a6-960c-a3ab6abb1869.png?fm=webp&q=80",
  h:"cadbury"},
  {
  img:"https://images-tastehub.mdlzapps.cloud/images/f4cd4464-4f28-43a9-83fd-a2ccce32368e.png?fm=webp&q=80",
  h:"cadbury"},
  {
  img:"https://images-tastehub.mdlzapps.cloud/images/48abda56-0869-44b3-9674-048489641ea9.png?fm=webp&q=80",
  h:"brunch"},
  {
  img:"https://images-tastehub.mdlzapps.cloud/images/95f6f26e-f677-4ac2-86ff-7f0a9b4eea21.png?fm=webp&q=80",
  h:"fingers"},

].map((items,index)=>{
    return <div 
     ref={(element) => (imgContainers.current[index] = element)}
    className="new-creation-img-cont bg-purple-200 marquee  h-[60vh] border-1 rounded-xl bg overflow-hidden ">
              <h1 className="bg-yellow-600 w-[15vw]">{items.h }</h1>
              <img  
              onMouseEnter={() => toggleHover(index)}
              onMouseLeave={() => toggleHover(index)}
              ref={(elem) => (images.current[index] = elem)} key={index} src={items.img} alt="" className={`yImg mt-[10vh] w-[30vw] 
              `}/>
              <div  className="bg-purple-900 round shadow-purple-950 bg h-[50vh] w-[30vw] border-l-2 rounded-t-[50%]">
            
             </div>
             
           </div>
})}
</div>
</div>
  );
};

export default NewCreation;
