import React from 'react'

import '../components/Hero.css'
const Hero = () => {
  return (
    <div className='text-black' >
        <div className='max-w-[800px] flex flex-col w-full text-center mt-[126px] h-screen mx-auto'>

            <h1 className='md:text-7xl sm:text-6xl text-5xl font-bold  md:py-6 bg-gradient-to-r from-cyan-500 to-lime-200 bg-clip-text text-transparent'>I Speak.<br/>I code.<br/>I design.</h1>
            <p className='comforter md:2xl text-2xl font-light text-gray-500 pt-5'>Gayathri Thejus</p>
            
        </div>
    </div>
  )
}

export default Hero