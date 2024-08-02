import React from 'react'

const Footer = () => {
  return (
    <div className='bg-stone-700 text-white p-4 '>
        <div>
            <h1 className='text-center text-3xl font-bold'>Readnus</h1>
            <p className='text-center mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>

        </div>
        <div className="row mt-4 mx-auto">
            <div className="col-md-4">
                <h1 className='text-3xl font-semibold '>Readnus</h1>
                <ul>
                    <li className='hover:text-lg'>About Us</li>
                    <li className='hover:text-lg'>Our Services</li>
                    <li className='hover:text-lg'>Privacy Policy</li>
                    <li className='hover:text-lg'>Terms & Conditions</li>
                </ul>
            </div>
            <div className="col-md-4">
                <h1 className='text-2xl font-semibold'>Quick Links</h1>
                <ul>
                    <li className='hover:text-lg'>Home</li>
                    <li className='hover:text-lg'>Blog</li>
                    <li className='hover:text-lg'>Write</li>
                    <li className='hover:text-lg'>Sign Up</li>
                </ul>
            </div>
            <div className="col-md-4">
                <h1 className='text-2xl font-semibold'> Links</h1>
                <ul>
                    <li className='hover:text-lg'>Subscription</li>
                    <li className='hover:text-lg'>Membership</li>
                    <li></li>
                    <li> </li>
                </ul>
            </div>
          

            
        </div>
    </div>
  )
}

export default Footer