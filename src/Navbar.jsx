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
    <Link to="/">
    <img  className='w-[20vw] navLogo nav' src='https://th.bing.com/th/id/R.025796500d23a9f3eafb9f0566d8b224?rik=tokLRyhFevJcOw&riu=http%3a%2f%2fwww.techsys.co.za%2fImageLibrary%2fprojects%2fcampaign-banner%2fCadbury_Logo.png&ehk=0BchF5GubvbfebEHNE4pZP7viObgXduEICPcnEftiZY%3d&risl=&pid=ImgRaw&r=0' alt='logo'/></Link>
    <Link to="/OurProducts"> <h3 className=' navContent nav Lato  text-white font-bold text-[3vh] w-[10vw] p-1 border-1 rounded-xl'>
    Our Products</h3></Link>
    <Link to="/OurRecipes">  <h3 className='navContent nav Lato text-white font-bold text-[3vh]  w-[10vw] p-1 border-1 rounded-xl '>Our Recipes</h3></Link>
    <a><img className='w-[10vh] cup  ml-[40vh] border-1 rounded-xl' src="https://toppng.com/public/uploads/thumbnail/cadbury-dairy-milk-choco-snack-cadbury-11563134298xobbdagqr8.png" alt="" /></a>
    </div>
 </div>
  )
}

export default Navbar
