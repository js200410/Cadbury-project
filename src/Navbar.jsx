import React , {useEffect} from 'react'
import { Link } from 'react-router-dom';
import gsap,{Power2} from 'gsap';
import './index.css'

const Navbar = () => {
  useEffect(()=>{
    gsap.from(".nav",{
      y:"20%",
      opacity:0,
      ease:Power2.easeInOut,
      duration:1,
      
    })
    gsap.to(".nav",{
      y:0,
      opacity:1,    
      stagger:1.5,
      ease:Power2.easeInOut,
      duration:1.5,
      delay:0.2,
    })
   
  },[])
  return (
    <div className=' h-[10vh] navbar absolute z-10 flex top-[3vh] '> 
   
    <div className='navbarCont flex gap-[10vh] items-center'>
    <Link to="/"><img  className='w-[30vw] navLogo nav' src='https://1000logos.net/wp-content/uploads/2022/08/Cadbury-Dairy-Milk-Logo-2003.png' alt='logo'/></Link>
    <Link to="/OurProducts"> <h3 className=' navContent nav Lato text-white font-bold text-[3vh]   w-[10vw] p-1 border-1 rounded-xl'>
    Our Products</h3></Link>
    <Link to="/OurRecipes">  <h3 className='navContent nav Lato  text-white font-bold text-[3vh]  w-[10vw] p-1 border-1 rounded-xl '>Our Recipes</h3></Link>
    <a><img className='w-[10vh] cup  ml-[40vh] border-1 rounded-xl' src="https://th.bing.com/th/id/R.9245cfdab5eb2e9396ade92dac935027?rik=KrU%2fI470yQqP6g&riu=http%3a%2f%2f1.bp.blogspot.com%2f-jHg6dC7ruw0%2fTVb8jjMI4vI%2fAAAAAAAAJFY%2f1WrHtq2YU7U%2fs1600%2fCadbury_Logo26.jpg&ehk=G5JsMSC5wldMNe9uqNDcn1sux%2fMDWJYncDWHALP%2f4YU%3d&risl=&pid=ImgRaw&r=0" alt="" /></a>
    </div>
 </div>
  )
}

export default Navbar
