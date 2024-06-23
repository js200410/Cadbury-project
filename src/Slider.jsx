import { Swiper, SwiperSlide } from "swiper/react";
import { useState,useEffect } from "react";
import ImageTimer from "./ImageTimer";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import gsap, { Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useGSAP } from "@gsap/react";

const images2 = [
  'https://www.sparscotland.co.uk/images/products/brandbank/01eed78d-eaf2-00d4-be1e-47ea0b184e92.png',
  'https://infotone.co.uk/wp-content/uploads/2023/03/cadbury-Mini-eggs.png',
  'https://yummo.pl/environment/cache/images/500_500_productGfx_2545/Cadbury-Mini-Eggs-Pouch.webp', // Add your image URLs here
  'https://www.ukproductsonline.com/wp-content/uploads/2023/03/cadbury-mini-eggs-80g_Barcelona_Home_delivery.png', // Add your image URLs here
  'https://cdn.entertainmentdaily.com/2020/01/29155433/Cadbury-Caramel-Shell-Egg-RRP-%C2%A33.49-1024x1024.png', // Add your image URLs here
  'https://th.bing.com/th/id/R.6253cd4012c476571252d27a0443ab33?rik=pe4wjX3tezgfxg&riu=http%3a%2f%2fwww.dhamecha.com%2fsysimgdocs%2frszimages%2f688108-Cadbury-4-Mini-Eggs-Nest-Cakes_sp45296_1.png&ehk=DecnZRywfWA%2bFU6v%2fzgtBLWB218lptvCX77%2bZTYEMvQ%3d&risl=&pid=ImgRaw&r=0', // Add your image URLs here
];
const images3 = [
  'https://images-tastehub.mdlzapps.cloud/images/374384c2-fa11-4a65-8ef9-e484a715bb7a.png?fm=webp&q=80',
  'https://images-tastehub.mdlzapps.cloud/images/fdcef990-b423-48b1-81ea-fe805a95b652.png?fm=webp&q=80',
  'https://images-tastehub.mdlzapps.cloud/images/fdcef990-b423-48b1-81ea-fe805a95b652.png?fm=webp&q=80', // Add your image URLs here
  'https://images-tastehub.mdlzapps.cloud/images/400b4c4a-5c06-4557-ab80-cefb32373642.png?fm=webp&q=80', // Add your image URLs here
  'https://images-tastehub.mdlzapps.cloud/images/47ca7387-31b4-41ca-8c46-7a5a612871fd.png?fm=webp&q=80', // Add your image URLs here
  'https://images-tastehub.mdlzapps.cloud/images/47ca7387-31b4-41ca-8c46-7a5a612871fd.png?fm=webp&q=80', // Add your image URLs here
];
const images4 = [
  'https://images-tastehub.mdlzapps.cloud/images/6d5137de-8ae6-41e8-a273-fc0697481431.png?fm=webp&q=80',
  'https://images-tastehub.mdlzapps.cloud/images/0d17d127-f1a2-4f5f-9747-5bada0d62713.png?fm=webp&q=80',
  'https://images-tastehub.mdlzapps.cloud/images/d484ba52-990d-43fc-a21c-8fe2b4f82078.png?fm=webp&q=80', // Add your image URLs here
  'https://i0.wp.com/allspares123.com/wp-content/uploads/2022/02/S17113_1.png?fit=1021%2C1024&ssl=1', // Add your image URLs here
  'https://www.dairymaid.co.za/media/1180/cruchie-blast-multi.png', // Add your image URLs here
  'https://assets-global.website-files.com/610ad3ad234b4037b59c37dd/640e66fa0b24543c9c2be6e0_crunchie%20tub.png', // Add your image URLs here
];


const EggImageTimer= () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images2.length);  //images.length returns the first index after completion of displaying of all indexes 
    }, 1000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="img-changer w-[26vw] -rotate-12">
      <img src={images2[currentIndex]} alt="Slider" className=" w-[40vw] "/>
    </div>
  );
};
const Bourneville = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images3.length);  //images.length returns the first index after completion of displaying of all indexes 
    }, 1000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="img-changer w-[35vw] -rotate-12">
      <img src={images3[currentIndex]} alt="Slider" className=" w-[40vw] "/>
    </div>
  );
};
const Crunchie= () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images4.length);  //images.length returns the first index after completion of displaying of all indexes 
    }, 1000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="img-changer w-[35vw] -rotate-12">
      <img src={images4[currentIndex]} alt="Slider" className=" w-[40vw] "/>
    </div>
  );
};


const Slider = () => {
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(".breakTextParent",{
      y:"100%",
      stagger:0.5,
      opacity:0,
      scale:0,
      duration:0.8,
     
      scrollTrigger:{
        trigger:".breakTextParent",
        scrub:0.5,
        ease:Power2.easeInOut,
     
        scroller:"body",
        start:"top bottom",
        
        toggleActions: 'play none none reverse',
      }
      
     })
     gsap.to(".breakTextParent",{
      y:"0",
      
      opacity:1,
      scale:1,
      stagger:0.05,
      scrollTrigger:{
        trigger:".breakTextParent",
        scrub:0.5,
        ease:Power2.easeInOut,
  
        scroller:"body",
        start:"top bottom",
        
     
      }
    
  
     })
  })
  
  useGSAP(() => {
    gsap.from(".title", {
      y: "20%",
      opacity: 0,
      ease: Power2.easeInOut,
      duration: 1,
    });
    gsap.to(".title", {
      y: 0,
      opacity: 1,
      stagger: 1,
      ease: Power2.easeInOut,
      duration: 3,
      delay: 0.2,
    });
    gsap.from(".img", {
      y: 500,
      duration: 2,
      delay: 2,
      rotateY: -180,
      rotateZ: -30,
      stagger: 3,
      opacity: 0,
    });
  });
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-screen"
      >
        <SwiperSlide>
          <div className="swiper-slide-div flex w-full h-full">
            <div className="home-img  w-[50%] bg-purple-900 font-[900] capitalize flex flex-col justify-center items-center">
              <h1 className="text-purple-100 text-[4vw] title">Sweetness is</h1>
              <h1 className="text-purple-100 text-[4vw] title"> must </h1>
              <h1 className="text-purple-100 text-[4vw] title">after dinner</h1>
            </div>
            <div className="home-img-2 h-full w-[50%] bg-purple-300 flex items-center justify-center">
              <ImageTimer/>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="swiper-slide-div flex w-full h-full">
            <div className="home-img  w-[50%] bg-yellow-300 font-[900]  flex flex-col justify-center items-center">
              <h1 className="text-purple-900 flex z-[1] text-[3vw]  breakTextParent">Share The Joy</h1>
              <h1 className="text-purple-900 flex z-[1] text-[3vw]  breakTextParent">With Family and </h1>
              <h1 className="text-purple-900 flex z-[1] text-[3vw]  breakTextParent">Friends With Easter eggs</h1>
            </div>
            <div className="home-img-2 h-full w-[50%] bg-yellow-100 flex items-center justify-center">
              <EggImageTimer/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="swiper-slide-div flex w-full h-full">
            <div className="home-img  w-[60%]   bg-yellow-900  font-[900]  flex flex-col justify-center items-center">
              <h1 className="text-yellow-600 breakTextParent flex z-[1] text-[4vw] ">Bournville</h1>
              <h1 className="text-yellow-600 breakTextParent flex z-[1] text-[4vw] "> Dark Chocolates</h1>
              <h1 className="text-yellow-600 breakTextParent flex z-[1] text-[4vw] ">The King's Coronation</h1>
            </div>
            <div className="home-img-2 h-full w-[50%] flex bg-[url('https://s3images.coroflot.com/user_files/individual_files/original_580156_6ucbrctarimzl7mdpd8bt55me.jpg')]  items-center justify-center">
              <Bourneville/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-div crunchiee flex w-full h-full">
            <div className="home-img  w-[50%] bg-purple-900 font-[900] capitalize flex flex-col justify-center items-center">
              <h1 className="text-yellow-500 text-[3vw] breakTextParent">savour it sollow</h1>
              <h1 className="text-yellow-500 text-[3vw] breakTextParent"> or share </h1>
              <h1 className="text-yellow-500 text-[3vw] breakTextParent">with someone you cherish</h1>
            </div>
            <div className="home-img-2 h-full w-[50%] flex bg-[url('https://cdn.pixabay.com/photo/2021/03/28/11/51/honeycomb-6131087_1280.jpg')]  items-center justify-center">
              <Crunchie/>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
