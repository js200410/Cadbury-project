import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import gsap from 'gsap';

import './index.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useGSAP } from '@gsap/react';
const images =[{}]

const Slider = () => {
  useGSAP(()=>{
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
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        classNameNameNameName="mySwiper h-screen"
      ><SwiperSlide classNameNameNameName='bg-no-repeat bg-cover relative bg-[url("https://mir-s3-cdn-cf.behance.net/project_modules/1400/1c7e77128954427.6160b3c820d33.jpg")]'>
        <h1 classNameNameNameName='top-[10vh] w-[50vw] text-[] absolute font-bold'>Our chocolate makers are always inventing new ways to enjoy Cadbury chocolate. Take a look at our latest products here!</h1>
      </SwiperSlide>
        
        <SwiperSlide classNameNameNameName='bg-no-repeat bg-cover bg-[url("https://images.pexels.com/photos/6985127/pexels-photo-6985127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")]'>
          <img classNameNameNameName='img'src="https://images-tastehub.mdlzapps.cloud/images/fdcef990-b423-48b1-81ea-fe805a95b652.png?fm=webp&q=80" alt="" />
          <h1 classNameNameNameName='text-[hotpink] font-bold text-[5vh] bold '>Cadbury Bournville classNameNameNameic Dark Chocolate</h1>
        </SwiperSlide>
        <SwiperSlide classNameNameNameName='bg-no-repeat capitalize bg-cover bg-[url("https://images.pexels.com/photos/13015815/pexels-photo-13015815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")]'>
          <img  classNameNameNameName='img'src="https://images-tastehub.mdlzapps.cloud/images/537c3b21-25ca-44f2-b166-e847592f4755.png?fm=webp&q=80" alt="" />
          <h1 classNameNameNameName='text-white text-[5vh] font-bold '>cadbury nutty paraline crisp</h1>
        </SwiperSlide>
        <SwiperSlide classNameNameNameName='bg-no-repeat bg-cover caitalize bg-[url("https://images.pexels.com/photos/6188059/pexels-photo-6188059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")]'>
          <img classNameNameNameName='img' src="https://images-tastehub.mdlzapps.cloud/images/2086e203-9317-4ed6-96f2-13d4225ceac8.png?fm=webp&q=80" alt="" />
          <h1 classNameNameNameName='text-white text-[5vh] font-bold '>cadbury caramilk</h1>
        </SwiperSlide>
        <SwiperSlide classNameNameNameName='bg-no-repeat bg-cover capitalize bg-[url("https://images.pexels.com/photos/7002969/pexels-photo-7002969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")]'>
          <img  classNameNameNameName='img'src="https://images-tastehub.mdlzapps.cloud/images/f78f3090-48b9-435d-9a96-61339033657b.png?fm=webp&q=80" alt="" />
          <h1 classNameNameNameName='text-white text-[5vh] font-bold '>cadbury white</h1>
        </SwiperSlide>
        <SwiperSlide classNameNameNameName='bg-no-repeat bg-cover capitalize bg-[url("https://media1.tenor.com/images/34237e8d87ffc8981b9565fa438c04d0/tenor.gif?itemid=14461454")]'>
          <img  classNameNameNameName='img'src="https://images-tastehub.mdlzapps.cloud/images/f8caa5e5-3927-4dc6-9aba-0e03359e94dd.png?fm=webp&q=80" alt="" />
          <h1 classNameNameNameName='text-white text-[5vh] capitalize font-bold '>CADBURY DAIRY MILK OREO CHOCOLATE BAR</h1>
        </SwiperSlide>
        <SwiperSlide classNameNameNameName='bg-no-repeat bg-cover capitalize bg-[url("https://images.pexels.com/photos/12693047/pexels-photo-12693047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")]'>
          <img classNameNameNameName='img' src="https://images-tastehub.mdlzapps.cloud/images/c6e5841c-3f47-47ff-9110-e4c33757917a.png?fm=webp&q=80" alt="" />
          <h1 classNameNameNameName='text-white text-[5vh] font-bold '>cadbury carael nut crunch</h1>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slider
