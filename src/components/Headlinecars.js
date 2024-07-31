import React from 'react'

const Headlinecards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
         <div className='rounded-xl relative hover:scale-95 duration-300'>
        <div className='px-4 text-white absolute w-full h-full  bg-black/40 rounded-xl '>
            <p className='text-2xl font-semibold px-2 pt-4'> HMR GRAND KITCHEN</p>
            <p className='px-2 pt-2 text-xl'>Best biriyani!</p>
            <button className='bg-black/70 mx-2 absolute bottom-4'>Order now!</button>
        </div>
        <img className='max-h-[16ppx] md:max-h[200px] w-full object-cover rounded-lg' src='https://images.pexels.com/photos/6260921/pexels-photo-6260921.jpeg?auto=compress&cs=tinysrgb&w=600' alt='biri'/>
    </div>

    <div className='rounded-xl relative hover:scale-95 duration-300'>
        <div className='px-4 text-white absolute w-full h-full  bg-black/40 rounded-xl '>
            <p className='text-2xl font-semibold px-2 pt-4'> Persian Quereshi Mandi</p>
            <p className='px-2 pt-2 text-xl'>Kuzhi mandi!</p>
            <button className='bg-black/70 mx-2 absolute bottom-4'>Order now!</button>
        </div>
        <img className='max-h-[16ppx] md:max-h[200px] w-full object-cover rounded-lg' src='https://media.istockphoto.com/id/1957888197/photo/darbar-royal-potlam-biryani-rice-wrap-with-raita-and-chili-sauce-served-in-dish-isolated-on.jpg?b=1&s=612x612&w=0&k=20&c=IWwcK3J7Pkktat16lf--I-irVY6N7Z-HjwqyGvIvlEo=' alt='biri'/>
    </div>

    <div className='rounded-xl relative hover:scale-95 duration-300'>
        <div className='px-4 text-white absolute w-full h-full  bg-black/40 rounded-xl '>
            <p className='text-2xl font-semibold px-2 pt-4'> Happy Ending</p>
            <p className='px-2 pt-2 text-xl'>Desserts :3</p>
            <button className='bg-black/70 mx-2 absolute bottom-4'>Order now!</button>
        </div>
        <img className='max-h-[16ppx] md:max-h[200px] w-full object-cover rounded-lg' src='https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600' alt='biri'/>
    </div>
    
    </div>
   
  )
}

export default Headlinecards