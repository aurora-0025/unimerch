import React from 'react'

function Banner() {
  return (
    <div className='flex mt-10 items-center justify-center min-h-[200px] bg-gray-200 w-full'>
        <div className='flex-1 flex justify-center'>
            <p className='max-w-[300px] text-3xl lg:text-4xl font-bold'>A brand you will want to wear.</p>
        </div>
        <div className='flex flex-1'>
            <div className='flex flex-col mx-10 items-center justify-between'>
                <h1 className='text-4xl text-[#e57373] font-bold'>5.0</h1>
                <h2 className='text-xs'>3000+ Customer Ratings</h2>
            </div>
            <div className='flex flex-col mx-10 items-center justify-between'>
                <h1 className='text-4xl text-[#e57373] font-bold'>70,000+</h1>
                <h2 className='text-xs'>SALES</h2>
            </div>
        </div>
    </div>
  )
}

export default Banner