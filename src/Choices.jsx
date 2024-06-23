import React, { useRef, useState ,useEffect} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import LocomotiveScroll from 'locomotive-scroll';
import {gsap} from 'gsap';
import { Power2 } from 'gsap';

import {ScrollTrigger} from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './index.css';

// import required modules
import { Autoplay,Pagination, Navigation } from 'swiper/modules';
import VideoHover from './VideoHover';
const title=['Ice-Cream','Hot-Chocolate','Chocolate','Biscuit']
const ChoicesImg = [
    'https://www.sparscotland.co.uk/images/products/brandbank/b8a9a87f-a5cc-41fa-ac49-b629fd5cd538.png',
    'https://images-tastehub.mdlzapps.cloud/images/7e835efc-6b54-4bf4-bb92-31671e3653e7.png?fm=webp&q=80',
    'https://images-tastehub.mdlzapps.cloud/images/0efcaa0e-fcba-49c5-8ee5-3cbebeb006d6.png?fm=webp&q=80', // Add your image URLs here
    'https://images-tastehub.mdlzapps.cloud/images/d5da6806-8f01-455f-b552-a6a27fc78c48.png?fm=webp&q=80', // Add your image URLs here // Add your image URLs here
  ];
  const choices =
   [{img:"https://images-tastehub.mdlzapps.cloud/images/77d0af40-4e36-4d59-9ebe-54f72838f7ec.png?fm=webp&q=80",
    h1:"Brunch",
    p:"CADBURY BRUNCH LIGHT ORANGE CHOCOLATE CEREAL BAR 5 PACK MULTIPACK 130G"
   },
    {img:"https://images-tastehub.mdlzapps.cloud/images/59219dd9-be21-4f71-a9c3-0d7d8eb4ec8a.png?fm=webp&q=80",
      h1:"Brunch",
      p:"CADBURY BRUNCH LIGHT HONEY & OAT CHOCOLATE CEREAL BAR 5 PACK MULTIPACK 130G"
    },
    {img:"https://images-tastehub.mdlzapps.cloud/images/537c3b21-25ca-44f2-b166-e847592f4755.png?fm=webp&q=80",
      h1:"Cadbury Dairy Milk",
      p:"CADBURY DAIRY MILK &MORE NUTTY PRALINE CRISP MILK CHOCOLATE BAR 180G"
    },
    {img:"https://images-tastehub.mdlzapps.cloud/images/c6e5841c-3f47-47ff-9110-e4c33757917a.png?fm=webp&q=80",
      h1:"Caramel Milk",
      p:"CADBURY DAIRY MILK &MORE CARAMEL NUT CRUNCH MILK CHOCOLATE BAR 200G"
    },
    {img:"https://images-tastehub.mdlzapps.cloud/images/7c99d51e-0353-4657-bdf0-86f2ea3a2223.png?fm=webp&q=80",
      h1:"Vegetarian Chocolate",
      p:"LIMITED EDITION 200 ANNIVERSARY CADBURY DAIRY MILK CHOCOLATE BAR 180G"
    },
    {img:"https://images-tastehub.mdlzapps.cloud/images/9cda0d83-e805-46db-a61d-50fc1b331909.png?fm=webp&q=80",
      h1:"Salted Caramel",
      p:"CADBURY DAIRY MILK SALTED CARAMEL CHOCOLATE BAR, 120G"
    },
    {img:"https://images-tastehub.mdlzapps.cloud/images/784749c6-9f27-446e-a4f8-99c4bc72efe9.png?fm=webp&q=80",
      h1:"Cadbury Delights",
      p:"CADBURY DELIGHTS ORANGE & CARAMEL 91 CALORIE CHOCOLATE NOUGAT BAR 5 PACK MULTIPACK, 110G"
    },
    {img:"https://images-tastehub.mdlzapps.cloud/images/8ee17957-7566-43a6-960c-a3ab6abb1869.png?fm=webp&q=80",
      h1:"Soft Nogout",
      p:"CADBURY DELIGHTS SALTED CARAMEL 91 CALORIE CHOCOLATE NOUGAT BAR 5 PACK MULTIPACK, 110G"
    },
    {img:"https://images-tastehub.mdlzapps.cloud/images/c1474e6b-a438-49a1-acb2-285b098760d7.png?fm=webp&q=80",
      h1:"Cadbury Delights",
      p:"CADBURY DELIGHTS HAZELNUT & CARAMEL 91 CALORIE CHOCOLATE NOUGAT BAR 5 PACK MULTIPACK 110G"
    },
    {img:"https://images-tastehub.mdlzapps.cloud/images/03b4becd-9ff8-465b-b881-94de4b8c826e.png?fm=webp&q=80",
      h1:"Fruit and Nuts Button",
      p:"CADBURY DAIRY MILK FRUITIER & NUTTIER ORANGE TRAIL MIX, 100G"
    },
    {img:"https://images-tastehub.mdlzapps.cloud/images/f0f5a81a-af09-4a03-892e-0d4386ca0ada.png?fm=webp&q=80",
      h1:"Fruit and Nuts Trial mix",
      p:"CADBURY DAIRY MILK FRUITIER & NUTTIER ORANGE TRAIL MIX, 100G"
    },
    {img:"https://images-tastehub.mdlzapps.cloud/images/f803e0e8-a46f-4d26-aff1-959f1c8ada02.png?fm=webp&q=80",
      h1:"Milk and White ChocolateButtons",
      p:"CADBURY DAIRY MILK TWISTED MILK & WHITE CHOCOLATE BUTTONS BAG, 105G"
    },
  ]
    const ChoicesTimer = () => {
      gsap.registerPlugin(ScrollTrigger)
      
    const [currentIndex, setCurrentIndex] = useState(0);
     
     
    useEffect(() => {
      gsap.from(".breakText",{
        translateY:200,
        stagger:.5,
        duration:.8,

       opacity:0,
        scrollTrigger:{
          trigger:".breakText",
          scroller:"body",
          start:"top 8%",
          scrub:.1,
        }
        
       })
       gsap.to(".breakText",{
        translateY:0,
        duration:8,
        opacity:1,
        stagger:.5,
        scrollTrigger:{
          trigger:".breakText",
          scroller:"body",
          scrub:.1,   
       
        }
       })
    
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % ChoicesImg.length);  //images.length returns the first index after completion of displaying of all indexes 
      }, 2000); // Change image every 3 seconds
  
      return () => clearInterval(interval); // Clean up the interval on component unmount
    }, []);
  
    return (
        
      <div data-scroll data-scroll-speed=".2" className="choices-img-changer rounded-[4vw] w-[26vw] flex flex-col g-[2vw] justify-center items-center h-[50vh] p-10 bg-purple-900">
        <img  src={ChoicesImg[currentIndex]} alt="Slider" className=" w-[20vw] "/>
         <h1  className='font-[900] text-[3vh] text-center '>{title[currentIndex]}</h1>
        
      </div>
    );
  };

export default function Choices() {
  const [isHover, setHover] = useState(Array(12).fill(false));
    const imgContainers = useRef([]);
    const images = useRef([]);
  const [swiperRef, setSwiperRef] = useState(null);
  useEffect(()=>{
    imgContainers.current.forEach((container, index) => {
      gsap.to(container, {
        ease: 'linear',
      });

      gsap.to(images.current[index], {
        duration: .6,
         rotate:isHover[index] ? '10' : '0%',
        translateY: isHover[index] ? '-40%' : '0%',
        ease: 'linear',
      });
    });
  },[isHover])
  const toggleHover = (index) => {
    setHover((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
    
  };
  return (
    <>
    <div className='flex flex-col justify-center '>
    <div className='w-full uppercase explore-div h-[80vh] flex justify-center items-center gap-[5vw]   text-yellow-500 p-20'>
        <div >
        <h1 className='text-[4.5vw] text-yellow-900 breakTextParent tracking-wide uppercase z-[1]'> {"explore our cadbury".split("").map((value,index)=>{
          return <span className='breakText font-[700] z-[1]' key={index}>{value}</span>
        })}</h1>
        <h1 className='text-[4.5vw] font-[700] tracking-wide text-yellow-900 uppercase z-[1]'> {"range".split("").map((value,index)=>{
          return <span className='breakText font-[700] z-[1]' key={index}>{value}</span>
        })}</h1>
        <img  width="70vw" src="https://images.ctfassets.net/pmzhtobns06n/2wC68NLrrsMn6Ze5WPiqvr/72a18a88506aaccbdb2041d753871e7c/Hazelnut.png?fm=webp&q=80" alt="" />
        <p className='text-purple-900'>Discover all the products and flavours you love, from chocolate blocks and bars, <br/>biscuits for your afternoon tea and boxes to gift.</p>
        <img data-scroll data-scroll-speed="-.6" src="https://images.ctfassets.net/pmzhtobns06n/11Y4kZLo4aRblqfQIM3NhO/6cdd48230b6aee544cdb3aba06008c58/Group_2.png?fm=webp&q=80" className='w-[15vw] mt-5' alt="" />
        </div>
        <ChoicesTimer/>
    </div>
    
    <div className=' choices-swiper-div  h-[120vh] flex justify-center flex-col bg-purple-900'>
      <div className='flex choices-div justify-center items-center'>
        <img data-scroll data-scroll-speed="-.4"  src="https://images.ctfassets.net/pmzhtobns06n/2wC68NLrrsMn6Ze5WPiqvr/72a18a88506aaccbdb2041d753871e7c/Hazelnut.png?fm=webp&q=80" className='w-[15vw]'  alt="" />
      <h1 className='text-yellow-600 text-[3vw] flex font-[700] text-center'>{"Drag to Explore".split("_").map((value,index)=>{
        return <span className=' text-yellow-600 font-[700]' key={index}>{value}</span>
      })
    }</h1>
      <img data-scroll data-scroll-speed="-.2" src="https://images.ctfassets.net/pmzhtobns06n/11Y4kZLo4aRblqfQIM3NhO/6cdd48230b6aee544cdb3aba06008c58/Group_2.png?fm=webp&q=80" className='w-[15vw]' alt="" />
      </div>
    
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: '',
        }}
        navigation={false}
        modules={[Autoplay,Pagination, Navigation]}
        className="Choices-swiper mt-[10vh]"
      >
        
        {choices.map((value,index)=>(
                <SwiperSlide className='choices-swiper-slide flex justify-center items-center '  key={index}>
                  <div className={`${
              isHover[index] ? 'hovered' : ''
            } w-[20vw] choices-swiper-image`}
            onMouseEnter={() => toggleHover(index)}
            onMouseLeave={() => toggleHover(index)}
            ref={(element) => (imgContainers.current[index] = element)}>
                    <img src={value.img} alt={value.alt}  key={index}
              className={`${
                isHover[index] ? 'hovered' : ''
              }`}
              ref={(elem) => (images.current[index] = elem)}/>
                  </div>
                  <h2 className='text-yellow-500 leading-15 text-[2vw]'>{value.h1}</h2>
                  <p className='text-white text-[0.8vw] w-[50%]'>{value.p}</p>
                 <Link to="/OurProducts"><button className='p-2 bg-yellow-400 mt-10 text-purple-900 '>Shop Now</button></Link> 
                </SwiperSlide>
        ))}
      </Swiper>
      </div>
      <div className='z-[2] bg-[url("https://cdn.pixabay.com/photo/2017/06/20/17/15/wall-2423815_1280.jpg")] bg-no-repeat bg-cover'>
      <img src="https://images.ctfassets.net/pmzhtobns06n/2ofIZQqpde9ZNB9CoOccUj/b655ad9d55d8adeb455c9f70db380961/Cameos.png?fm=webp&q=80" alt="" />
      <h1 className='moments-text text-center text-purple-900 font-bold text-[4vw]' >Cabdury </h1>
      <h1 className='moments-text text-center text-purple-900 font-bold text-[4vw]' >sharing happiness</h1>
      <h1 className='moments-text text-center text-purple-900 font-bold text-[4vw]' >& creating moments</h1>
      <img src="https://images.ctfassets.net/pmzhtobns06n/11Y4kZLo4aRblqfQIM3NhO/6cdd48230b6aee544cdb3aba06008c58/Group_2.png?fm=webp&q=80" className='w-[10vw] float-right alt="" ' />
        <VideoHover/>
      <img data-scroll data-scroll-speed='-.4' className='absolute bottom-[10%] w-[10vw]' src="https://images.ctfassets.net/pmzhtobns06n/11Y4kZLo4aRblqfQIM3NhO/6cdd48230b6aee544cdb3aba06008c58/Group_2.png?fm=webp&q=80" alt="" />
      </div>
         
      </div>
    </>
  );
}
