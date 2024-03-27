import React from 'react'
import me from '../assets/gayathri.jpg'
import {motion} from 'framer-motion'
import {fadeIn} from '../components/variants'
const Aboutme = () => {
  return (
    <div className='w-[98%] mx-auto md:py-8 px-4  border-top rounded-2xl mt-[16px] mb-[30px]'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 items-center mt-[10px]'>
      <div className='lg:border lg:border-gray-400 lg:border-b-0 lg:border-l-0 lg:border-t-0 flex justify-center mr-8 p-3'>
            <h1 className='font-bold text-4xl md:text-5xl py-3 dm text-center text-rose-900 '>About </h1>
            </div>
            
            <motion.div 
              variants={fadeIn("left",0.02)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:true,amount:0.7}}>
                <div className='rounded-xl bg-gray-100 p-7 shadow-xl '>
            <p className='quicksand text-rose-800 text-[17px] md:text-[20px]'> I'm Gaythri Thejus, somebody who adheres to the motto of 'miles to go before I sleep' or a passionate learner. 
            I lead a technical campus community, Tinkerhub & am into building cool projects and stuffs. I am an aspiring Web Developer, a content creator, an orator & a consistent learner.
             <br/><br/>I'm a third year Computer Science student at Government Engineering College, Thrissur & also part of few technical communities
              where I organize events, take part in hackathons & mentor for learning programs.
            </p>
            </div></motion.div>
    </div>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 items-center mt-[10px] '>
      <div className='lg:border lg:border-gray-400 lg:border-b-0 lg:border-l-0 lg:border-t-0 flex justify-center mr-8 p-12'>
      <motion.div 
              variants={fadeIn("right",0.02)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:true,amount:0.7}}>
      <div className='rounded-xl bg-gray-100 p-7 shadow-xl '>
            <p className='quicksand text-rose-800 text-[17px] md:text-[20px]'> I have soft skill experiences in ReactJS, Python Fast API, Tailwind CSS, Django, HTML5, CSS, Javascript & have experience in programming languages 
            like C, Java, Python & SQL.
             <br/><br/>
            </p>
            </div>
            </motion.div>
            </div>
            <img src={me} className='h-[280px] rounded-3xl mx-auto'/>
           
    </div>

</div>
  )
}

export default Aboutme


// A web developer,a community lead,a content curator,a designer & moreover, someone Passionate!