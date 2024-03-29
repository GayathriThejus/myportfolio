import React from 'react'
import linkedin from "../assets/linkedin.png"
import github from "../assets/social.png"
const Footer = () => {
  return (
    <>
    <div className='text-black mx-auto text-center mt-6 flex justify-center items-center gap-2 '>
        <p className='font-light'>Check me on </p><a href="https://www.linkedin.com/in/gayathri-thejus-59503a251/"><img className='w-[15px] h-[15px]' src={linkedin}/></a>
        <a href="https://github.com/GayathriThejus"><img className='w-[22px] h-[22px]' src={github}/></a>
    </div>
     <p className='font-light text-[13px] text-center pt-2 text-rose-800 mb-[80px]'>gayathrithejus@gmail.com</p>
     </>
  )
}

export default Footer