import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-400 p-4 '>
        <div>
            <h1 className='text-center text-3xl font-bold'>Readnus</h1>
            <p className='text-center mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>

        </div>
        <div className="row mt-4 mx-auto">
            <div className="col-md-4">
                <h1 className='text-3xl font-semibold '>Readnus</h1>
                <ul>
                    <li>About Us</li>
                    <li>Our Services</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
            <div className="col-md-4">
                <h1 className='text-2xl font-semibold'>Quick Links</h1>
                <ul>
                    <li>Home</li>
                    <li>Blog</li>
                    <li>Write</li>
                    <li>Sign Up</li>
                </ul>
            </div>
            <div className="col-md-4">
                <h1 className='text-2xl font-semibold'> Links</h1>
                <ul>
                    <li>Subscription</li>
                    <li>Membership</li>
                    <li></li>
                    <li> </li>
                </ul>
            </div>
          

            
        </div>
    </div>
  )
}

export default Footer