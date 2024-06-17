import { Swiper, SwiperSlide } from 'swiper/react';
import Trial from './ImageTimer'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import gsap,{Power2} from 'gsap';

import './index.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useGSAP } from '@gsap/react';
const images =[{}]

const Slider = () => {
  useGSAP(()=>{
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
      duration:3,
      delay:0.2,
    })
    gsap.from(".img",{
      y:500,
      duration:2,
      delay:2,
      rotateY:-180,
      rotateZ:-30,
      stagger:3,
      opacity:0,
    })
  })
  return (
    <>
      <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay:3000
          ,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-screen"
      ><SwiperSlide>
        <div className="swiper-slide-div flex w-full h-full">
          <div className='home-img  w-[50%] bg-purple-900 font-[900] uppercase flex flex-col justify-center items-center'>
            <h1 className='text-purple-100 text-[4vw] title'>Sweetness is</h1>
            <h1 className='text-purple-100 text-[4vw] title'> must </h1>
            <h1 className='text-purple-100 text-[4vw] title'>after dinner</h1>
          </div>
          <div className='home-img-2 h-full w-[50%] bg-purple-300 flex items-center justify-center'>
            <Trial/>
          </div>
        </div>
       
      </SwiperSlide>
        
        <SwiperSlide className='swiper-slide bg-no-repeat bg-cover bg-[url("https://images.pexels.com/photos/6985127/pexels-photo-6985127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")]'>
          <img className='img'src="https://images-tastehub.mdlzapps.cloud/images/fdcef990-b423-48b1-81ea-fe805a95b652.png?fm=webp&q=80" alt="" />
          <h1 className=' text-[5vh] bold'>Cadbury Bournville Dark Chocolate</h1>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide bg-no-repeat capitalize bg-cover bg-[url("https://images.pexels.com/photos/13015815/pexels-photo-13015815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")]'>
          <img  className='img'src="https://images-tastehub.mdlzapps.cloud/images/537c3b21-25ca-44f2-b166-e847592f4755.png?fm=webp&q=80" alt="" />
          <h1 className='text-white text-[5vh] '>cadbury nutty paraline crisp</h1>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide bg-no-repeat bg-cover caitalize bg-[url("https://images.pexels.com/photos/6188059/pexels-photo-6188059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")]'>
          <img className='img' src="https://images-tastehub.mdlzapps.cloud/images/2086e203-9317-4ed6-96f2-13d4225ceac8.png?fm=webp&q=80" alt="" />
          <h1 className='text-white text-[5vh] '>cadbury caramilk</h1>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide bg-no-repeat bg-cover capitalize bg-[url("https://images.pexels.com/photos/7002969/pexels-photo-7002969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")]'>
          <img  className='img'src="https://images-tastehub.mdlzapps.cloud/images/f78f3090-48b9-435d-9a96-61339033657b.png?fm=webp&q=80" alt="" />
          <h1 className='text-white text-[5vh]  '>cadbury white</h1>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide bg-no-repeat bg-cover capitalize bg-[url("https://media1.tenor.com/images/34237e8d87ffc8981b9565fa438c04d0/tenor.gif?itemid=14461454")]'>
          <img  className='img'src="https://images-tastehub.mdlzapps.cloud/images/f8caa5e5-3927-4dc6-9aba-0e03359e94dd.png?fm=webp&q=80" alt="" />
          <h1 className='text-white text-[5vh]  '>CADBURY DAIRY MILK OREO CHOCOLATE BAR</h1>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide bg-no-repeat bg-cover capitalize bg-[url("https://images.pexels.com/photos/20265204/pexels-photo-20265204/free-photo-of-close-up-of-a-pink-roll-of-paper.jpeg?auto=compress&cs=tinysrgb&w=600")]'>
          <img className='img' src="https://images-tastehub.mdlzapps.cloud/images/c6e5841c-3f47-47ff-9110-e4c33757917a.png?fm=webp&q=80" alt="" />
          <h1 className='text-white text-[5vh]'>cadbury carael nut crunch</h1>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slider
