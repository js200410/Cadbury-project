import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div classNameNameNameName=' w-[85vw]  h-[10vh] absolute z-10 -translate-x-1/2  flex  left-1/2  items-center  justify-between '> 
   
    <div classNameNameNameName='flex   w-1/2 gap-10  items-center ml-[10vw]'>
    <Link to="/"><img  classNameNameNameName= ' navbar  ' src='https://1000logos.net/wp-content/uploads/2022/08/Cadbury-Dairy-Milk-Logo-2003.png' alt='logo'/></Link>
    <Link to="/OurProducts"> <h3 classNameNameNameName='navbar Lato text-zinc-100 font-bold w-full   '>
    Our Products</h3></Link>
    <Link to="/OurRecipes">  <h3 classNameNameNameName='navbar Lato text-zinc-100 font-bold w-full'>Our Recipes</h3></Link>
    </div>

    {/* <div classNameNameNameName='flex   w-1/2  ml-[30vw] items-center'>
    <div classNameNameNameName='user flex gap-4 border-r-[.8px] border-zinc-700 pr-2'>
        <img  classNameNameNameName= 'text-zinc-700 navbar' src='https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg'/>
     <h3 classNameNameNameName='navbar Lato text-zinc-100 font-bold w-full   '>Sign In</h3>
    </div>
    <div classNameNameNameName=' flex items-center'>
        <h4 classNameNameNameName="text-xl navbar text-zinc-200  pl-2">0</h4>
        <img classNameNameNameName=" navbar h-[9vh] w-[7vw] "  src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg"/>
      </div>
    </div> */}
    
 
 </div>
  )
}

export default Navbar
