import React from 'react'
import img from "../assets/video-calling.png"
import '../components/Hero.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {motion} from 'framer-motion'
import {fadeIn} from '../components/variants'
const Hero = () => {
  return (
    <div className='text-black' >
        <div className='max-w-[800px] flex flex-col w-full text-center mt-[126px] mx-auto '>

            <h1 className='md:text-7xl sm:text-6xl text-5xl font-bold  md:py-6 bg-gradient-to-r from-cyan-500 to-lime-200 bg-clip-text text-transparent'>I Speak.<br/>I Code.<br/>I Design.</h1>
            <p className='comforter md:2xl text-2xl font-light text-gray-500 pt-5'>Gayathri Thejus</p>
            <div>
            <motion.div 
              variants={fadeIn("left",0.02)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:true,amount:0.7}}>
            <img className=' mx-auto pt-9 h-[340px]'  src={img}/></motion.div>
            </div>
            <div className='flex justify-center gap-4 mx-auto mt-[30px] bg-white items-center w-[150px] h-[40px] py-3 rounded-xl mb-[50px]'>
            <a href="https://github.com/GayathriThejus" target="_blank" rel="noopener noreferrer">
        <FaGithub className='w-[30px] h-[30px]' />
            </a>
           {/* <FaGithub className='w-[30px] h-[30px]'/> */}
           <a href="https://www.linkedin.com/in/gayathri-thejus-59503a251/" target="_blank" rel="noopener noreferrer">
           <FaLinkedin className='w-[30px] h-[30px]'/>
           </a>
           </div>
        </div>
    </div>
  )
}

export default Hero