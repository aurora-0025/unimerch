import React from 'react'
import Logo from '../assets/logo-black.svg'

function Footer() {
  return (
    <div className='min-h-[100px] mt-20 bg-gray-100 flex justify-center items-center'>
        <img height={16} width={16} src={Logo} alt="logo" />
        <p className='ml-2'>UNIMERCH</p>
    </div>
  )
}

export default Footer