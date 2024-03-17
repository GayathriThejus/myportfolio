import React from 'react'
import data from "../assets/dataweb.png"
import exp from "../assets/Expense.png"
import decentra from "../assets/decentralaw.jpg"
import ipl from "../assets/ipl.png"
   
const Projects = () => {
  const handleClick = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div className='w-full py-[5rem] bg-white '>
      <h1 className='font-bold text-4xl md:text-5xl py-3 dm mx-auto text-rose-900 text-center mb-[80px]'>projects.</h1>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8'>
        <div className='w-[90%] mx-auto shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        <img className='w-20 mx-auto mt-[-3rem] w-[250px] h-[160px]'src={data} alt='/'/>
        <h2 className='text-2xl font-bold text-center py-8'>Finance</h2>
        <div className=' font-sm'>
          <p className='text-gray-600 mx-8 '>Expense Tracker is a an expense & income tracker showing transaction histories and add on transaction features.</p>
        </div>
        <button onClick={()=>handleClick("https://dataweb-sand.vercel.app/")} className='bg-rose-100 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Demo</button>
        <button onClick={()=>handleClick("https://dataweb-sand.vercel.app/")} className='border border-rose-200 w-[200px] rounded-md font-medium my-1 mx-auto px-6 py-3 text-black'>Github link</button>
        </div>

        <div className='w-[90%] mx-auto shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        <img className='w-20 mx-auto mt-[-3rem] w-[250px] h-[160px]'src={exp} alt='/'/>
        <h2 className='text-2xl font-bold text-center py-8'>Expense Tracker</h2>
        <div className=' font-sm'>
          <p className='text-gray-600 mx-8 '>Expense Tracker is a an expense & income tracker showing transaction histories and add on transaction features.</p>
        </div>
        <button onClick={()=>handleClick("https://expensetracker-lilac-eta.vercel.app/")} className='bg-rose-100 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black' >Check out</button>
        <button onClick={()=>handleClick("https://dataweb-sand.vercel.app/")} className='border border-rose-200 w-[200px] rounded-md font-medium my-1 mx-auto px-6 py-3 text-black'>Github link</button>
        </div>

        <div className='w-[90%] mx-auto shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        <img className='w-20 mx-auto mt-[-3rem] w-[250px] h-[160px]'src={decentra} alt='/'/>
        <h2 className='text-2xl font-bold text-center py-8'>DecentraLaw</h2>
        <div className=' font-sm'>
          <p className='text-gray-600 mx-8 '>A dApp that decentralizes the procedure of acquiring BAR Council licenses through on-chain relaying .</p>
        </div>
        <button onClick={()=>handleClick("https://github.com/GayathriThejus/Decentra-Law")} className='bg-rose-100 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Check out</button>
        <button onClick={()=>handleClick("https://dataweb-sand.vercel.app/")} className='border border-rose-200 w-[200px] rounded-md font-medium my-1 mx-auto px-6 py-3 text-black'>Github link</button>
        </div>

        <div className='w-[90%] mx-auto shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        <img className='w-20 mx-auto mt-[-3rem] w-[250px] h-[160px]'src={ipl} alt='/'/>
        <h2 className='text-2xl font-bold text-center py-8'>IPL 3.0</h2>
        <div className='font-sm'>
          <p className='text-gray-600 mx-8 py-3 '>Website for IPL 3.0 by IEDC (Innovation & Entrepreneurship Development Centre) Kerala.</p>
        </div>
        <button onClick={()=>handleClick("https://ipl-final-git-newbranch-gayathri-thejus-projects.vercel.app/")}  className='bg-rose-100 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Check out</button>
        <button onClick={()=>handleClick("https://dataweb-sand.vercel.app/")} className='border border-rose-200 w-[200px] rounded-md font-medium my-1 mx-auto px-6 py-3 text-black'>Github link</button>
        </div>
            
        
       
        </div>

    </div>
  )
}

export default Projects



