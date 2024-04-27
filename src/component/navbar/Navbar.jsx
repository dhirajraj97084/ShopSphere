import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../searchbar/SearchBar'
function Navbar() {
    const navlist=(
        <ul className=' flex flex-wrap gap-3 sm:gap-4 font-normal text-md '>
            {/* home */}
            <Link to={'/'}><li className='cursor-pointer'>Home</li></Link>
            {/* allproducts */}
            <Link to={'/allpro'}><li className='cursor-pointer'>All Products</li></Link>
    
            <Link to={'/login'}><li className='cursor-pointer'>Login</li></Link>
            {/* signup */}
            <Link to={'/signup'}><li className='cursor-pointer'>Signup</li></Link>
            {/* cart */}
            <Link to={'/user-dashboard'}><li className='cursor-pointer'>Dhiraj</li></Link>
            <Link to={'/admin-dashboard'}><li className='cursor-pointer'>Admin</li></Link>
            <Link to={'/cart'}><li className='cursor-pointer'>Cart</li></Link>       
          
           
        </ul>
    )
  return (
    <div className=' top-0 sticky z-20'>
      <div className=" text-white items-center shadow-sm border-b border-gray-100 lg:flex  justify-between px-6 py-3 bg-[#23a5dc]">
        <div className="left  ">
           <Link to={'/'}> <h1 className='text-2xl text-center font-bold pb-1 '>ShopSphere</h1></Link>
        </div>
        <div className="mid flex justify-center pb-2">
          {navlist}
        </div>
        <div className="right flex justify-center ">
          <SearchBar/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
