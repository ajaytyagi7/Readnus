import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {useUserContext } from '../UserContext';

const Navbar = () => {
  const {userloggedIn,Logout} = useUserContext();

  const showLoginOptions = () => {
    if (userloggedIn) {
      return (
        <button onClick={Logout} className="text-white bg-gradient-to-r from-orange-200 to-sky-700 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 py-2 text-sm fs-5 mt-4">Logout</button>
      )
    } else {
      return <>

        <NavLink
          to="/Signin"
          className=" hover:text-white rounded-md px-3 py-2 text-sm fs-5 mt-4"
        >
          <button className='text-white bg-gradient-to-r from-fuchsia-700 to-sky-700 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 py-2 text-sm fs-5 mt-4'>SignIN</button>
        </NavLink>


      </>
    }
  }
  return (
    <div>
        <nav className="bg-secondary-subtle ">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
        
          <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        
          <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/>
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <NavLink to={'/Home'}  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-blue-400 hover: text-dark " aria-current="page">Home</NavLink>
            <NavLink  to={'/List'}  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-blue-400 hover: text-dark">Story</NavLink>

            <NavLink to={'/Payment'}  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-blue-400 hover: text-dark">Membership</NavLink>
            <NavLink to={'/Blog'}  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-blue-400 hover: text-dark">Blog</NavLink>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
       

        <div className="relative ">
          <div>
            {showLoginOptions()}
          </div>

       
          
        </div>
      </div>
    </div>
  </div>

  
</nav>

    </div>
  )
}

export default Navbar