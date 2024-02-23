import React from 'react'
import '../components/Hero.css'
const Hero = () => {
    return (
       <div className='max-w-[1200px] flex flex-col mx-auto justify-center items-center'>
         <svg viewBox='0 0 1350 600' className=" mx-auto text-center ml-[80px] ">
  <text x='0' y="50%" fill="black" className='text-[120px] ' >
    I speak.
  </text>
  <text x='0' y="70%" fill="black" className='text-[120px] '>
    I code.
  </text>
  <text x='0' y="90%" fill="black" className='text-[120px]  '>
    I design.
  </text>
</svg>  
<div className=''><h6 className=' font-light text-lg mx-auto'>By Gayathri Thejus</h6></div>
       </div>
      )
    }
    
    export default Hero
    
    