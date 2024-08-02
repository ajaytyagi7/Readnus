import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {useUserContext } from '../UserContext';
import { useState } from 'react';
import { FaTimes } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";



const Navbar = () => {
  const {userloggedIn,Logout} = useUserContext();

  const [click, setclick] = useState(false);
  

  const closeNav = () => {
    setclick(false)
  };


  const handleClick = () => {
    setclick(!click);
  }

  const showSignin = () => {
    if (userloggedIn) {
      return (
        <button onClick={Logout} className="text-white bg-gradient-to-r from-orange-200 to-sky-700 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 py-2 text-sm fs-5 ">Logout</button>
      )
    } else {   
      return <>

        <NavLink
          to="/Signin"
          className=" hover:text-white rounded-md px-3  text-sm fs-5"
        >
          <button onClick={closeNav} className='text-white bg-gradient-to-r from-fuchsia-700 to-sky-700 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2  text-sm fs-5 '>SignIN</button>
        </NavLink>


      </>
    }
  }
  const content = <>
  <div className="lg:hidden block absolute top-20 w-full left-0 right-0 bg-slate-900 transition">
    <ul className="text-center text-xl p-20">
      <Link   to="Home">
      <li className="my-4 py-4 border-b border-[#638ed4] hover:bg-[#638ed4] hover:rounded" onClick={closeNav}>Home</li>
      </Link>
      <Link  to="List">
      <li className="my-4 py-4 border-b border-[#638ed4] hover:bg-[#638ed4] hover:rounded"  onClick={closeNav}>Story</li>
      </Link>
      <Link  to="payment">
      <li className="my-4 py-4 border-b border-[#638ed4] hover:bg-[#638ed4] hover:rounded" onClick={closeNav}>Membership</li>
      </Link>
      <Link  to="Blog">
      <li className="my-4 py-4 border-b border-[#638ed4] hover:bg-[#638ed4] hover:rounded" onClick={closeNav}>Blog</li>
      </Link>
     {showSignin()}
    </ul>

  </div>
</>
  return (
    <div className='bg-secondary-subtle'>
     <nav>
       <div className="h-5vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 border-b border-slate-800">
        <div className="flex items-center flex-1">
          <h1 className='text-4xl text-black font-bold '>Readnus</h1>
          <img src="" className="  object-cover" alt="" />
          {/* <span className="text-3xl font-bold">Logo</span> */}
        </div>
        <div className="lg:flex md:flex lg:flex-1 items center justify-end  font-normal hidden">
          <div className="flex-10">
          <ul className="flex gap-8 mr-16  mt-1 text-[18px]">
        <Link to="Home">
        <li className="hover:text-[#638ed4] transition border-b-2 border-slate-900 hover:border-[#638ed4] cursor-pointer text-dark">Home</li>
        </Link>
        <Link to="List">
        <li className="hover:text-[#638ed4] transition border-b-2 border-slate-900 hover:border-[#638ed4] cursor-pointer text-dark">Story</li>
        </Link>
        <Link to="payment">
        <li className="hover:text-[#638ed4] transition border-b-2 border-slate-900 hover:border-[#638ed4] cursor-pointer text-dark">Membership</li>
        </Link>
        <Link to="Blog">
        <li className="hover:text-[#638ed4] transition border-b-2 border-slate-900 hover:border-[#638ed4] cursor-pointer hover:text-pink-600 text-dark">Blog</li>
        </Link>
        {showSignin()}
      </ul>

          </div>
        </div>
        <div>
          {click && content}
        </div>
        <button  className="block sm:hidden transition dark" onClick={handleClick}>
           {click ? <FaTimes /> : <CiMenuBurger  />}
        </button>
       </div>
    </nav>

    </div>
  )
}

export default Navbar