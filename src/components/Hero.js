import React from 'react'
import img from "../assets/video-calling.png"
import '../components/Hero.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Hero = () => {
  return (
    <div className='text-black' >
        <div className='max-w-[800px] flex flex-col w-full text-center mt-[126px] h-screen mx-auto '>

            <h1 className='md:text-7xl sm:text-6xl text-5xl font-bold  md:py-6 bg-gradient-to-r from-cyan-500 to-lime-200 bg-clip-text text-transparent'>I Speak.<br/>I Code.<br/>I Design.</h1>
            <p className='comforter md:2xl text-2xl font-light text-gray-500 pt-5'>Gayathri Thejus</p>
            <div>
            <img className=' mx-auto pt-9 h-[340px]'  src={img}/>
            </div>
            <div className='flex justify-center gap-4 mx-auto mt-[30px] bg-white items-center w-[150px] h-[40px] py-3 rounded-xl mb-[50px]'>
           <FaGithub className='w-[30px] h-[30px]'/>
           <FaLinkedin className='w-[30px] h-[30px]'/></div>
        </div>
    </div>
  )
}

export default Hero