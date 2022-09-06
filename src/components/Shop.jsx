import React from 'react'
import Products from './Products'

function Shop(props) {
let scrollRef = props.scrollRef;
  return (
    <div className='flex flex-col'>
        <div className='flex font-bold m-10 text-[#e57373] text-4xl justify-end mb-10'>
            CATALOG
        </div>
        <div ref={scrollRef}>
            <Products />
        </div>
        <div className='w-full flex items-center justify-center'>
            <button onClick={()=>window.open("https://instagram.com/space_unimerch?igshid=YmMyMTA2M2Y=", "_blank")} className='mt-10 border-solid font-bold text-[#e57373] hover:text-white hover:bg-[#e57373] duration-200 border-4 rounded-full border-[#e57373] px-10 py-2'>Shop Now</button>
        </div>
    </div>
  )
}

export default Shop