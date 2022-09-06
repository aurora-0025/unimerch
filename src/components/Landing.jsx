import React from 'react'

import product4 from '../assets/products/4.png'
import product5 from '../assets/products/5.png'
import product6 from '../assets/products/6.png'

function Landing() {
  return (
    <div className='flex flex-col mt-10 items-center justify-center w-full h-full'>
        <h2 className='font-400 text-l'>Interplanetory Merchandise Store</h2>
        <h1 className='font-bold my-5 text-7xl'>UNIMERCH</h1>
        <p className='text-center mx-[20%]'>Unimerch is a concept startup which aims to provide merchandise related to the universe. 
This includes t-shirts, mugs, cups and even jewellery. 
</p>
        <div className='flex justify-evenly w-full mt-5 items-center'>
            <div className='w-[300px] mx-1 h-[300px]'>
              <img src={product4} alt="product" />
            </div>
            <div className='w-[300px] mx-1 h-[300px]'>
              <img src={product5} alt="product" />
            </div>
            <div className='w-[300px] mx-1 h-[300px]'>
              <img src={product6} alt="product" />
            </div>
        </div>
    </div>
  )
}

export default Landing