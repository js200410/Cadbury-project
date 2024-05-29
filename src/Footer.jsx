import React from 'react'

const Footer = () => {
  return (
    <div className='h-screen bg-white'>
      <div  className='bg-purple-900 h-[40vh]'>
        <img className=" float-right h-[40vh]" src="https://images.ctfassets.net/pmzhtobns06n/FylNgIq5k8uYLgdPsRNC3/2d5134c6f611132106fcd3229a9f416e/Cadbury_MilkPourMaster.png?fm=webp&q=80&fm=webp&q=80" alt="" />
      </div>
      <div className='border-b-2 border-purple-900 h-[30vh] flex justify-between items-center p-4'>
            <div><img src="https://images.ctfassets.net/pmzhtobns06n/2kEDmwTjEX4J1azHCiCS0a/ee9d70f71b52352d684fd59240ce3113/Mondelez_Logo_White.svg?q=80" alt="" /></div>
            <div className='flex h-[6vh] gap-[3vh]'>
              <img src="https://images.ctfassets.net/pmzhtobns06n/JZ2DrEB2dzVa54lm84S9J/09b5d6efef8bb4ebd95c2bef08f5cdb2/Social_Facebook.svg?q=80" alt="" />
              <img src="https://images.ctfassets.net/pmzhtobns06n/5GAnl5vMpeeMZdhWqvbljQ/2e17077ee5f7d4cf39518eabb7eb48b3/Social_Instagram.svg?q=80" alt="" />
              <img src="https://images.ctfassets.net/pmzhtobns06n/57FipyJjLjAlnu0s8PUzdw/18e9b38e9f00388131efa272442ff21f/Social_Tiktok.svg?q=80" alt="" />
            </div>
      </div>
      <div className='footer-links font-sans flex justify-between '>
        {["© 2024 Mondelez United Kingdom","TERMS OF USE","PRIVACY NOTICE","COOKIE NOTICE","ACCESSIBILITY","T&Cs",
"CONTACT US"].map((index,value)=>{
    return <a key={index} href="" className="font-sans mt-[10vh] font-semibold">{index}</a>
})}
      </div>
    </div>
  )
}

export default Footer
