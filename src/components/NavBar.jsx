import React from 'react'
import Logo from '../assets/logo.svg'

function NavBar(props) {
  let scrollRef = props.scrollRef;
  function scrollToProducts(e) {
    e.preventDefault();
    scrollRef.current.scrollIntoView({behavior: 'smooth'});
  }
  return (
    <div className='flex sticky px-20 my-10 justify-between font-bold leading-tight cursor-pointer'>
        <div onClick={()=>window.open("https://instagram.com/space_unimerch?igshid=YmMyMTA2M2Y=", "_blank")} className='hover:animate-pulse'>INSTA<div className='mt-[-5px]'>GRAM</div></div>
        <img className='w-[80px] h-[80px] cursor-default animate-bounce' src={Logo} alt="Logo" />
        <button onClick={scrollToProducts}
     className='hover:animate-pulse mt-[-30px]'>CATALOG</button>
    </div>
  )
}

export default NavBar;