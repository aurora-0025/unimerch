import React from 'react'
import tShirt from '../assets/t-shirt.png'

function Features() {
  return (
    <div className='w-full min-h-[100vh] align-middle flex flex-col items-center text-white justify-center bg-[#ef9a9a]'>
        <div className='flex items-center font-bold text-md md:text-xl lg:text-4xl'>
            <div>DELIVERED TO YOU</div> 
            <img className='-mx-[3.3em] pl-3 z-[10] w-[250px] md:w-[300px] lg:w-[450px]' src={tShirt} alt="t-shirt" />
            <div>STRAIGHT FROM EARTH</div>
        </div>
        <p className='text-center mt-10 max-w-[500px]'>
            Our products are ethically sourced and packaged from earth.So get your favourite wear and share it to us.
        </p>
    </div>
  )
}

export default Features