import React from 'react'
import data from "../assets/dataweb.png"
import exp from "../assets/Expense.png"
   
const Projects = () => {
  return (
    <div className='w-full py-[10rem] bg-white'>
      <h1 className='font-bold text-4xl md:text-5xl py-3 dm mx-auto text-rose-900 text-center mb-[80px]'>Projects</h1>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8'>
        <div className='w-[90%] mx-auto shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        <img className='w-20 mx-auto mt-[-3rem] w-[250px] h-[160px]'src={data} alt='/'/>
        <h2 className='text-2xl font-bold text-center py-8'>Finance</h2>
        <div className='text-center font-medium'>
          <p className='text-gray-600 mx-8 '>Finance app showing relevant details about finance market.</p>
        </div>
        <button className='bg-rose-100 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Check out</button>
        </div>

        <div className='w-[90%] mx-auto shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        <img className='w-20 mx-auto mt-[-3rem] w-[250px] h-[160px]'src={exp} alt='/'/>
        <h2 className='text-2xl font-bold text-center py-8'>Expense Tracker</h2>
        <div className='text-center font-medium'>
          <p className='text-gray-600 mx-8 '>Finance app showing relevant details about finance market.</p>
        </div>
        <button className='bg-rose-100 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Check out</button>
        </div>

        <div className='w-[90%] mx-auto shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        <img className='w-20 mx-auto mt-[-3rem] w-[250px] h-[160px]'src={data} alt='/'/>
        <h2 className='text-2xl font-bold text-center py-8'>Finance</h2>
        <div className='text-center font-medium'>
          <p className='text-gray-600 mx-8 '>Finance app showing relevant details about finance market.</p>
        </div>
        <button className='bg-rose-100 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Check out</button>
        </div>

        <div className='w-[90%] mx-auto shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        <img className='w-20 mx-auto mt-[-3rem] w-[250px] h-[160px]'src={data} alt='/'/>
        <h2 className='text-2xl font-bold text-center py-8'>Finance</h2>
        <div className='text-center font-medium'>
          <p className='text-gray-600 mx-8 '>Finance app showing relevant details about finance market.</p>
        </div>
        <button className='bg-rose-100 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Check out</button>
        </div>
            
        
       
        </div>

    </div>
  )
}

export default Projects



