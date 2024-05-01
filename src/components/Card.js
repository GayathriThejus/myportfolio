import React from 'react'

const Card = ({id,image,title,description,demolink,githublink}) => {
    const handleClick = (link) => {
        window.open(link, "_blank");
      };

  return (
    <div className='w-[90%] mx-auto shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
    <img className='w-20 mx-auto mt-[-3rem] w-[250px] h-[160px]'src={image} alt='/'/>
    <h2 className='text-2xl font-bold text-center py-8'>{title}</h2>
    <div className=' font-sm'>
      <p className='text-gray-600 mx-8 '>{description} </p>
    </div>
    <div >
    <button onClick={()=>handleClick({demolink})} className='bg-rose-100 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Demo</button>
    <button onClick={()=>handleClick({githublink})} className='border border-rose-200 w-[200px] rounded-md font-medium my-1 mx-auto px-6 py-3 text-black'>Github link</button>
    </div>
    </div>
  )
}

export default Card