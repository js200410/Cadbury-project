import React ,{useEffect} from 'react'
import './index.css'
import LocomotiveScroll from 'locomotive-scroll'
import { Link } from 'react-router-dom'


const KnowProducts = () => {
    useEffect(()=>{
        const scroll = new LocomotiveScroll()
    })
  return (
    <div className='products-desc flex justify-center flex-col bg-cover bg-no-repeat gap-[10vh] w-full bg-[url("https://cdn.pixabay.com/photo/2017/08/16/20/59/chocolate-2649129_1280.jpg")]'>
        <div data-scroll data-scroll-speed='.3' className="Product-cadbury flex justify-center gap-[4vw]">
            <div className="cadbury-img w-[90vw] p-10 h-[70vh] flex justify-center items-center rounded-bl-[6vw] rotate-12 rounded-tr-[8vw] bg-purple-900">
                <img data-scroll data-scroll-speed='.2' src="https://images.ctfassets.net/pmzhtobns06n/DvtMJzydeMdrgRC51zUqx/27f5b1bae2232529f10811e7f4c517db/DESKTOP-2003-CDM_PACK_SHOT.png?fm=webp&q=80" alt=""/>
            </div>
            <div className="cadbury-details w-[60vw] capitalize flex flex-col gap-[2vh] tracking-wider">
                <h2>cadbury</h2>
                <h1>Cadbury Dairy Milk</h1>
                <p>To celebrate our 200th anniversary, we're bringing back some of the classic Cadbury Dairy Milk packs. Available in stores nationwide for a limited time only.</p>
               <Link to="/OurProducts"> <button>Shop Now</button></Link>
            </div>
        </div>
        <div data-scroll data-scroll-speed='.3' className="Product-cadbury flex justify-center gap-[5vw]">
            <div className="cadbury-details w-[60vw] capitalize flex flex-col gap-[2vh] tracking-wider">
                <h2>cadbury</h2>
                <h1>Cadbury Twirl</h1>
                <p>To celebrate our 200th anniversary, we're bringing back some of the classic Cadbury Dairy Milk packs. Available in stores nationwide for a limited time only.</p>
                <Link to="/OurProducts"><button>Shop Now</button></Link>            </div>
            <div className="cadbury-img w-[90vw] p-10 h-[70vh] flex justify-center items-center rounded-bl-[6vw] rotate-12 rounded-tr-[8vw] bg-yellow-400">
                <img data-scroll data-scroll-speed='.2' src="https://images.ctfassets.net/pmzhtobns06n/4hp5CMLltS0HXUy0cWmHY8/ffffd6b04f07bf796eb06a2b498ef50b/Mask_group-3.png?fm=webp&q=80" alt="" />
            </div>
        </div>
        <div data-scroll data-scroll-speed='.3' className="Product-cadbury flex justify-center gap-[4vw]">
            <div className="cadbury-img w-[90vw] p-10 h-[70vh] flex justify-center items-center rounded-bl-[6vw] rotate-12 rounded-tr-[8vw] bg-purple-900">
                <img data-scroll data-scroll-speed='.3' src="https://images.ctfassets.net/pmzhtobns06n/76dQDQugxQArtPGWtXMdsz/a5e2133abc588f288d9a6f8d0382edd3/cq5dam.web.1280__5_.png?fm=webp&q=80" alt="" />
            </div>
            <div className="cadbury-details w-[60vw] capitalize flex flex-col gap-[2vh] tracking-wider">
                <h2>cadbury</h2>
                <h1>Cadbury Wispa</h1>
                <p>To celebrate our 200th anniversary, we're bringing back some of the classic Cadbury Dairy Milk packs. Available in stores nationwide for a limited time only.</p>
               <Link to="/OurProducts"> <button>Shop Now</button></Link>
            </div>
        </div>
        <div data-scroll data-scroll-speed='.3'className="Product-cadbury flex justify-center gap-[4vw]">
            <div className="cadbury-details capitalize w-[60vw] flex flex-col tracking-wider gap-[2vh]">
                <h2>cadbury</h2>
                <h1>Cadbury Crunchie</h1>
                <p>To celebrate our 200th anniversary, we're bringing back some of the classic Cadbury Dairy Milk packs. Available in stores nationwide for a limited time only.</p>
                <Link to="/OurProducts"><button>Shop Now</button></Link>            </div>
            <div className="cadbury-img w-[90vw] p-10 h-[70vh] flex justify-center items-center rounded-bl-[6vw] rotate-12 rounded-tr-[8vw] bg-yellow-400">
                <img data-scroll data-scroll-speed='.4' src="https://images-tastehub.mdlzapps.cloud/images/0d17d127-f1a2-4f5f-9747-5bada0d62713.png?fm=webp&q=80" alt="" />
            </div>
        </div>
      
        <div data-scroll data-scroll-speed='.3' className="Product-cadbury flex justify-center  gap-[4vw]">
            <div  className="cadbury-img w-[90vw] p-10 h-[70vh] flex justify-center items-center rounded-bl-[6vw] rotate-12 rounded-tr-[8vw] bg-red-700 ">
                <img data-scroll data-scroll-speed='.3' src="https://images.ctfassets.net/pmzhtobns06n/5DAShH8ObaXrtkxa8DGnIZ/335558b5df5881c761d632d407dadeae/Bournville_bottom.png?fm=webp&q=80" alt="" />
            </div>
            <div className="cadbury-details w-[60vw] capitalize flex flex-col gap-[2vh] tracking-wider">
                <h2>cadbury</h2>
                <h1>Cadbury Bournville</h1>
                <p>To celebrate our 200th anniversary, we're bringing back some of the classic Cadbury Dairy Milk packs. Available in stores nationwide for a limited time only.</p>
               <Link to="/OurProducts"> <button>Shop Now</button></Link>
            </div>
        </div>
      
    </div>
  )
}

export default KnowProducts
