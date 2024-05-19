
import React, { useState, useRef, useEffect } from 'react';
import gsap ,{Power2} from 'gsap';
import Footer from './Footer';
import Navbar from './Navbar';

const OurProducts=()=> {
  const [isHover, setHover] = useState(Array(6).fill(false));
  const imgContainers = useRef([]);
  const images = useRef([]);

  useEffect(() => {
    
    imgContainers.current.forEach((container, index) => {
      gsap.to(container, {
        duration: 0.3,
        translateY: isHover[index] ? '-25%' : '0%',
        ease: 'linear',
      });

      gsap.to(images.current[index], {
        duration: 0.3,
        translateY: isHover[index] ? '-40%' : '0%',
        ease: 'linear',
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

  useEffect(()=>{
    gsap.from(".title",{
      y:"20%",
      opacity:0,
      
      ease:Power2.easeInOut,
      duration:1,
      
    })
    gsap.to(".title",{
      y:0,
      opacity:1,
      
      stagger:1,
      ease:Power2.easeInOut,
      duration:1,
      delay:0.2,
    })
   
  },[])

  return (
    <>
    <Navbar/>
    <div className="w-screen">
      <div className='w-screen h-[85vh] relative '>
      <img className=' w-full h-full object-cover' src='https://i.pinimg.com/564x/de/97/a8/de97a8a67a138833ea26d1217aa7e15a.jpg'/>
      <div className='z-9 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-screen '>
      <h1 className='text-[#dbb667] text-[10vh] uppercase whitespace-nowrap text-center title'>cadbury chocolate</h1>
      <p className='z-9 text-[4vh] py-8   text-center title '>Think Cadbury, think chocolate. Chocolate bars, blocks and bites - all different types of chocolate and chocolate flavours. So delicious, so moreish.</p>
      
      </div></div>
      <div className='w-screen flex justify-center py-10'>
      <h1 className='text-[#4b0983] uppercase text-[5vh] tilt-neon'>all Chocolate products</h1>
      </div>
      
      <div className="grid grid-cols-3 gap-x-[0.8vw] gap-y-[15vh] mx-[10%] max-w-screen pb-[10vh] ">
        {[
         {image:"https://images-tastehub.mdlzapps.cloud/images/e5c91e06-08f0-49b4-bad0-18193c27c141.png?fm=webp&q=80" ,
               para:"CADBURY CHOCOLATE BUTTONS SELECTION BOX 375G",
               h4:"cadbury"},
             
                 {image:"https://images-tastehub.mdlzapps.cloud/images/d7f58346-e1cf-436c-8c6a-a0c478d6e29e.png?fm=webp&q=80",
               para:"CADBURY CHOCOLATE CHRISTMAS LARGE STOCKING SELECTION BOX 179G",
               h4:"cadbury "},

                 {image:"https://images-tastehub.mdlzapps.cloud/images/a77445ac-e384-43e5-bb8d-707a189ac9a2.png?fm=webp&q=80",
               para:"CADBURY CREME EGG 40G",
               h4:"creme egg",
               
             },
                 {image:"https://images-tastehub.mdlzapps.cloud/images/d570e1cd-6e56-4a52-91cb-003785c625eb.png?fm=webp&q=80",
               para:"CADBURY CURLY WURLY SQUIRLIES CHOCOLATE BAG, 110G",
               h4:"curly wurly"},

                 {image:"https://images-tastehub.mdlzapps.cloud/images/6f9ee28d-583b-4396-abc8-e28661c72961.png?fm=webp&q=80",
               para:"CADBURY DELIGHTS HAZELNUT & CARAMEL 91 CALORIE CHOCOLATE NOUGAT BAR 5 PACK MULTIPACK 110G",
               h4:"Cadbury",
             },
                 {image:"https://images-tastehub.mdlzapps.cloud/images/8026f442-0355-4241-969c-ffdf5cddd551.png?fm=webp&q=80",
               para:"CADBURY WHITE CHOCOLATE CREME EGG, 40G",
               h4:"cadbury dairy milk"
             },].map((item, index) => (
          <div
            key={index}
            className={`w-[22vw] h-[60vh] relative bg-purple-300 rounded-xl img-container shadow-gray-400 shadow-xl${
              isHover[index] ? 'hovered' : ''
            }`}
            onMouseEnter={() => toggleHover(index)}
            onMouseLeave={() => toggleHover(index)}
            ref={(element) => (imgContainers.current[index] = element)}
          >
            <div className='absolute w-[22vw] h-[15vw] bg-[#4b0983] top-1/2 rounded-tl-[60%] rounded-b-xl '></div>
            <h5 className="absolute left-[5%] bg-[#ebc373] rounded-xl px-2 top-2 text-white ">{item.h4}</h5>
            <img
              key={index}
              className={`w-[18vw] h-[35vh] z-9 absolute top-[15%] left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                isHover[index] ? 'hovered' : ''
              }`}
              ref={(elem) => (images.current[index] = elem)}
              src={item.image}
              alt="White Chocolate"
            />
            <p className="text-[2vh] absolute bottom-[5%] px-2" >{item.para}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="w-screen">
      <div className='w-screen h-[85vh] relative '>
      <img className=' w-full h-full object-cover' src='https://i.pinimg.com/564x/de/97/a8/de97a8a67a138833ea26d1217aa7e15a.jpg'/>
      <div className='z-9 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-screen'>
      <h1 className='text-[#dbb667] text-[10vh] uppercase whitespace-nowrap text-center title'>cadbury milk <br/>chocolate</h1>
      <p className='z-9 text-[4vh] py-8  text-center title '>Our classNameNameNameic, Cadbury milk chocolate recipe always goes down a treat - milk chocolate bars, biscuits and chocolate bites. Anyone fancy a chunk of Cadbury Dairy Milk?</p>
      
      </div></div>
      <div className='w-screen flex justify-center py-10'>
      <h1 className='text-[#4b0983] uppercase text-[5vh] tilt-neon'>all milk Chocolate products</h1>
      </div>
      
      <div className="grid grid-cols-3 gap-x-[0.8vw] gap-y-[15vh] mx-[10%] max-w-screen pb-[10vh]">
        {[
         {image:"https://images-tastehub.mdlzapps.cloud/images/d666a851-6294-4346-952a-25b6ce861742.png?fm=webp&q=80" ,
               para:"CADBURY DAIRY MILK CHOCOLATE CHRISTMAS COINS MONEY TIN 230G",
               h4:"cadbury dairy milk"},
             
                 {image:"https://images-tastehub.mdlzapps.cloud/images/2b088430-9f38-4dc4-81e2-9bb0ebd0f25c.png?fm=webp&q=80",
               para:"CADBURY DAIRY MILK CHOCOLATE CHRISTMAS COINS NET 70G",
               h4:"cadbury dairy milk"},
                 {image:"https://images-tastehub.mdlzapps.cloud/images/dfcbe2bc-9d46-4b8d-a183-f48fa48ebf42.png?fm=webp&q=80",
               para:"CADBURY BRUNCH OATS BAR CHOCOLATE CHIP CEREAL BAR 5 PACK MULITPACK, 160G",
               h4:"brunch",
               
             },
                 {image:"https://images-tastehub.mdlzapps.cloud/images/8e101e29-28b5-428a-8b5b-43731ad6aa6f.png?fm=webp&q=80",
               para:"CADBURY BRUNCH OATS BAR PEANUT CHOCOLATE CEREAL BAR 5 PACK MULTIPACK, 160G",
               h4:"brunch"},
                 {image:"https://images-tastehub.mdlzapps.cloud/images/d2e54501-aaba-42a4-b63a-2c0318a53d88.png?fm=webp&q=80",
               para:"CADBURY BRUNCH OATS BAR RAISIN CHOCOLATE CEREAL BAR 5 PACK MULTIPACK, 160G",
               h4:"brunch",
             },
                 {image:"https://images-tastehub.mdlzapps.cloud/images/0c350e62-d802-4836-b26f-c6dd5d37b012.png?fm=webp&q=80",
               para:"CADBURY DOUBLE CHOCOLATE CUSTARD CREAM CHEESE BUTTERCREAM CAKE",
               h4:"cadbury "
             },].map((item,index) => (
              <div
              key={index}
              className={`w-[22vw] h-[60vh] relative bg-purple-300 rounded-xl img-container shadow-gray-400 shadow-xl${
                isHover[index] ? 'hovered' : ''
              }`}
              onMouseEnter={() => toggleHover(index)}
              onMouseLeave={() => toggleHover(index)}
              ref={(element) => (imgContainers.current[index] = element)}
            >
              <div className='absolute w-[22vw] h-[15vw] bg-[#4b0983] top-1/2 rounded-tl-[60%] rounded-b-xl'></div>
              <h5 className="absolute left-[5%] bg-[#ebc373] rounded-xl px-2 top-2 text-white ">{item.h4}</h5>
              <img
                key={index}
                className={`w-[18vw] h-[35vh] z-9 absolute top-[15%] left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                  isHover[index] ? 'hovered' : ''
                }`}
                ref={(elem) => (images.current[index] = elem)}
                src={item.image}
                alt="White Chocolate"
              />
              <p className="text-[2vh] absolute bottom-[5%] px-2" >{item.para}</p>
            </div>
        ))}
      </div>
    </div>
    <div className="w-screen">
      <div className='w-screen h-[85vh] relative '>
      <img className=' w-full h-full object-cover' src='https://i.pinimg.com/564x/de/97/a8/de97a8a67a138833ea26d1217aa7e15a.jpg'/>
      <div className='z-9 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-screen '>
      <h1 className='text-[#dbb667] text-[10vh] uppercase whitespace-nowrap text-center title'>cadbury white <br/>chocolate</h1>
      <p className='z-9 text-[4vh] py-8   text-center title '>White chocolate bars, white chocolate buttons… however it comes, it’s the creamiest, dreamiest taste of the Cadbury white chocolate we all love.</p>
      
      </div></div>
      <div className='w-screen flex justify-center py-10'>
      <h1 className='text-[#4b0983] uppercase text-[5vh] tilt-neon'>all white Chocolate products</h1>
      </div>
      
      <div className="grid grid-cols-3 gap-x-[0.8vw] gap-y-[15vh] mx-[10%] max-w-screen pb-[10vh]">
        {[
         {image:"https://images-tastehub.mdlzapps.cloud/images/b218226f-6e8d-4165-89a1-1f2e8fd71a08.png?fm=webp&q=80" ,
               para:"CADBURY CREME EGG 5 PACK MIXED CHOCOLATE BOX 200G",
               h4:"creme egg"},
             
                 {image:"https://images-tastehub.mdlzapps.cloud/images/0568f93a-f57d-4524-bd0e-9db514742e68.png?fm=webp&q=80",
               para:"CADBURY DAIRY MILK TWISTED MILK & WHITE CHOCOLATE BUTTONS BAG, 105G",
               h4:"cadbury dairy milk"},

                 {image:"https://images-tastehub.mdlzapps.cloud/images/b065c01a-3111-44e9-8b89-415f5d77d7b2.png?fm=webp&q=80",
               para:"CADBURY WHITE BUTTONS CHOCOLATE BAG, 110G",
               h4:"cadbury",
               
             },
                 {image:"https://images-tastehub.mdlzapps.cloud/images/d85d9ccc-1199-4978-bc57-bb03977b26ba.png?fm=webp&q=80",
               para:"CADBURY WHITE CHOCOLATE BUTTONS, 14.4G",
               h4:"cadbury"},

                 {image:"https://images-tastehub.mdlzapps.cloud/images/f6ed8794-4bba-4bcd-a714-898478262adb.png?fm=webp&q=80",
               para:"CADBURY WHITE CHOCOLATE BAR 180G",
               h4:"bournville",
             },
                 {image:"https://images-tastehub.mdlzapps.cloud/images/f6ed8794-4bba-4bcd-a714-898478262adb.png?fm=webp&q=80",
               para:"CADBURY WHITE CHOCOLATE CREME EGG, 40G",
               h4:"creme egg"
             },].map((item,index) => (
          <div
            key={index}
            className={`w-[22vw] h-[60vh] relative bg-purple-300 rounded-xl img-container shadow-gray-400 shadow-xl${
              isHover[index] ? 'hovered' : ''
            }`}
            onMouseEnter={() => toggleHover(index)}
            onMouseLeave={() => toggleHover(index)}
            ref={(element) => (imgContainers.current[index] = element)}
          >
            <div className='absolute w-[22vw] h-[15vw] bg-[#4b0983] top-1/2 rounded-tl-[60%] rounded-b-xl'></div>
            <h5 className="absolute left-[5%] bg-[#ebc373] rounded-xl px-2 top-2 text-white ">{item.h4}</h5>
            <img
              key={index}
              className={`w-[18vw] h-[35vh] z-9 absolute top-[15%] left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                isHover[index] ? 'hovered' : ''
              }`}
              ref={(elem) => (images.current[index] = elem)}
              src={item.image}
              alt="White Chocolate"
            />
            <p className="text-[2vh] absolute bottom-[5%] px-2" >{item.para}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default OurProducts;