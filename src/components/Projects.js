import React from 'react'
import data from "../assets/dataweb.png"
import exp from "../assets/Expense.png"
import decentra from "../assets/decentralaw.jpg"
import ipl from "../assets/ipl.png"
import {motion} from 'framer-motion'
import {fadeIn} from '../components/variants'

const Projects = () => {
  const handleClick = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div className='w-full py-[5rem] bg-white '>
      <h1 className='font-bold text-4xl md:text-5xl py-3 dm mx-auto text-rose-900 text-center mb-[80px]'>projects.</h1>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8'>
        <motion.div 
              variants={fadeIn("top",0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:true,amount:0.7}}>
        <div className='w-[90%] mx-auto shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        <img className='w-20 mx-auto mt-[-3rem] w-[250px] h-[160px]'src={data} alt='/'/>
        <h2 className='text-2xl font-bold text-center py-8'>Grow with Data</h2>
        <div className=' font-sm'>
          <p className='text-gray-600 mx-8 pb-11'>A frontend website application to show the data analytics for various platforms. </p>
        </div>
        <button onClick={()=>handleClick("https://dataweb-sand.vercel.app/")} className='bg-rose-100 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Demo</button>
        <button onClick={()=>handleClick("https://github.com/GayathriThejus/dataweb")} className='border border-rose-200 w-[200px] rounded-md font-medium my-1 mx-auto px-6 py-3 text-black'>Github link</button>
        </div>
        </motion.div>

        <motion.div 
              variants={fadeIn("top",0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:true,amount:0.7}}>
        <div className='w-[90%] mx-auto shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        <img className='w-20 mx-auto mt-[-3rem] w-[250px] h-[160px]'src={exp} alt='/'/>
        <h2 className='text-2xl font-bold text-center py-8'>Expense Tracker</h2>
        <div className=' font-sm'>
          <p className='text-gray-600 mx-8 '>Expense Tracker is a an expense & income tracker showing transaction histories and add on transaction features.</p>
        </div>
        <button onClick={()=>handleClick("https://expensetracker-lilac-eta.vercel.app/")} className='bg-rose-100 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black' >Demo</button>
        <button onClick={()=>handleClick("https://github.com/GayathriThejus/Expensetracker")} className='border border-rose-200 w-[200px] rounded-md font-medium my-1 mx-auto px-6 py-3 text-black'>Github link</button>
        </div>
        </motion.div>

        <motion.div 
              variants={fadeIn("top",0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:true,amount:0.7}}>
        <div className='w-[90%] mx-auto shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        <img className='w-20 mx-auto mt-[-3rem] w-[250px] h-[160px]'src={decentra} alt='/'/>
        <h2 className='text-2xl font-bold text-center py-8'>DecentraLaw</h2>
        <div className=' font-sm'>
          <p className='text-gray-600 mx-8 '>A dApp that decentralizes the procedure of acquiring BAR Council licenses through on-chain relaying .</p>
        </div>
        <button onClick={()=>handleClick("https://github.com/GayathriThejus/Decentra-Law")} className='bg-rose-100 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Demo</button>
        <button onClick={()=>handleClick("https://github.com/GayathriThejus/Decentra-Law")} className='border border-rose-200 w-[200px] rounded-md font-medium my-1 mx-auto px-6 py-3 text-black'>Github link</button>
        </div>
        </motion.div>

        <motion.div 
              variants={fadeIn("top",0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:true,amount:0.7}}>
        <div className='w-[90%] mx-auto shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        <img className='w-20 mx-auto mt-[-3rem] w-[250px] h-[160px]'src={ipl} alt='/'/>
        <h2 className='text-2xl font-bold text-center py-8'>IPL 3.0</h2>
        <div className='font-sm'>
          <p className='text-gray-600 mx-8 py-3 '>Website for IPL 3.0 by IEDC (Innovation & Entrepreneurship Development Centre) Kerala.</p>
        </div>
        <button onClick={()=>handleClick("https://ipl-final-git-newbranch-gayathri-thejus-projects.vercel.app/")}  className='bg-rose-100 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Demo</button>
        <button onClick={()=>handleClick("https://github.com/GayathriThejus/IPL_IEDC")} className='border border-rose-200 w-[200px] rounded-md font-medium my-1 mx-auto px-6 py-3 text-black'>Github link</button>
        </div>
        </motion.div>
        
       
        </div>

    </div>
  )
}

export default Projects




// import React from 'react'
// import data from "../assets/dataweb.png"
// import exp from "../assets/Expense.png"
// import decentra from "../assets/decentralaw.jpg"
// import ipl from "../assets/ipl.png"
// import Card from "./Card"

// const Projects = () => {
  
//   const projects =[
//     {
//       id:1,
//       image:data,
//       title:"Grow with data",
//       description:"A frontend website application to show data analytics for various platforms.",
//       demolink:"https://dataweb-sand.vercel.app/",
//       githublink:"https://github.com/GayathriThejus/dataweb"
//     },
//     {
//       id:2,
//       image:exp,
//       title:"Expense Tracker",
//       description:"Expense Tracker is a an expense & income tracker showing transaction histories and add on transaction features.",
//       demolink:"https://expensetracker-lilac-eta.vercel.app/",
//       githublink:"https://github.com/GayathriThejus/Expensetracker"
//     },
//     {
//       id: 3,
//       image: decentra,
//       title: "DecentraLaw",
//       description: "A dApp that decentralizes the procedure of acquiring BAR Council licenses through on-chain relaying.",
//       demolink: "https://github.com/GayathriThejus/Decentra-Law",
//       githublink: "https://github.com/GayathriThejus/Decentra-Law"
//     },
//     {
//       id: 4,
//       image: ipl,
//       title: "IPL 3.0",
//       description: "Website for IPL 3.0 by IEDC (Innovation & Entrepreneurship Development Centre) Kerala.",
//       demolink: "https://ipl-final-git-newbranch-gayathri-thejus-projects.vercel.app/",
//       githublink: "https://github.com/GayathriThejus/IPL_IEDC"
//     }
//   ]
//   return (
//     <div className='w-full py-[5rem] bg-white '>
//       <h1 className='font-bold text-4xl md:text-5xl py-3 dm mx-auto text-rose-900 text-center mb-[80px]'>projects.</h1>
//         <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8'>
//           {projects.map(project=>(
//             <Card
//               key= {project.id}
//               image={project.image}
//               title={project.title}
//               description={project.description}
//               demolink={project.demolink}
//               githublink={project.githublink}
//             />
//           ))}
//                     </div>
//       </div>
//   )
// }

// export default Projects



