import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container-fluid bg-secondary-subtle'>
        <div className= ' row p-5 '>
         <div className='mt-5 col-md-8'>
          <h1 className='text-8xl 	font-semibold; text- '>Human <br />stories & ideas</h1>
          <h2 className='mt-3 text-4xl'>A place to read,write,and deepan  your understanding</h2>
         <Link to={'/List'}> <button className='btn btn-dark rounded-pill mt-5 p-3 '>Start Reading</button></Link>
         </div>
         <div className="col-md-4 mt-5">
            <img className='img-fluid' src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png" alt="" />
         </div><hr />
        </div>
        <h1 className='text-5xl font-semibold text-center mt-3 mb-3'>Latest</h1>
        <div className="row p-4 gap-y-4">
          <div className="col-md-3 ">
            <div className="card shadow-2xl bg-slate-300 hover:bg-blue-300">
              <div className="card-body p-3">
                <h1 className='text-4xl text-center font-semibold mb-3'>Node.js</h1><hr />
                <h1 className='text-center mt-3 fs-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum repellat commodi qui, in, facilis ipsum adipisci tempore pariatur amet libero, quasi impedit. Aliquam dolore excepturi doloremque officiis numquam? Dolorem unde reprehenderit quidem autem? Pariatur impedit numquam quis fugit odio delectus sit consequatur vitae possimus 
                </h1>
                <h1 className='text-center bg-pink-500 mt-3 p-3 font-semibold hover:text-lg'>Read More</h1>
              </div>
            </div>
          </div>  
          <div className="col-md-3">
            <div className="card shadow-2xl bg-slate-300">
              <div className="card-body p-3 hover:bg-blue-300">
                <h1 className='text-4xl text-center font-semibold mb-3 '>Angular</h1><hr />
                <h1 className='text-center mt-3 fs-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum repellat commodi qui, in, facilis ipsum adipisci tempore pariatur amet libero, quasi impedit. Aliquam dolore excepturi doloremque officiis numquam? Dolorem unde reprehenderit quidem autem? Pariatur impedit numquam quis fugit odio delectus sit consequatur vitae possimus 
                </h1>
                <h1 className='text-center bg-pink-500 mt-3 p-3 font-semibold hover:text-lg'>Read More</h1>
              </div>
            </div>
          </div>  
          <div className="col-md-3">
            <div className="card shadow-2xl bg-slate-300">
              <div className="card-body  p-3 hover:bg-blue-300" >
                <h1 className='text-4xl text-center font-semibold mb-3'>React.js</h1><hr />
                <h1 className='text-center mt-3 fs-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum repellat commodi qui, in, facilis ipsum adipisci tempore pariatur amet libero, quasi impedit. Aliquam dolore excepturi doloremque officiis numquam? Dolorem unde reprehenderit quidem autem? Pariatur impedit numquam quis fugit odio delectus sit consequatur vitae possimus 
                </h1>
                <h1 className='text-center bg-pink-500 mt-3 p-3 font-semibold hover:text-lg'>Read More</h1>
              </div>
            </div>
          </div>  
          <div className="col-md-3">
            <div className="card shadow-2xl bg-slate-300">
              <div className="card-body p-3 hover:bg-blue-300">
                <h1 className='text-4xl text-center font-semibold mb-3'>Javascript</h1><hr />
                <h1 className='text-center mt-3 fs-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum repellat commodi qui, in, facilis ipsum adipisci tempore pariatur amet libero, quasi impedit. Aliquam dolore excepturi doloremque officiis numquam? Dolorem unde reprehenderit quidem autem? Pariatur impedit numquam quis fugit odio delectus sit consequatur vitae possimus 
                </h1>
                <h1 className='text-center bg-pink-500 mt-3 p-3 font-semibold hover:text-lg'>Read More</h1>
              </div>
            </div>
          </div>  
        </div>
      <div className='col-md-10 mx-auto'>
         <img className=' img-fluid' src="https://static.wixstatic.com/media/0784b1_6e875de35784442e8cefe8a574bb28f7~mv2.jpg/v1/fill/w_1313,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Cover%20%20Copy%2010.jpg" alt="" /> 
      </div>
      <div className=' mt-3  '>
        <div className="card p-44 bg-orange-100">
        <h1 className='text-5xl mt-3 font-semibold text-center'>Welcome To Read And Understand Story In Readnus</h1>
        <h1 className='text-center mt-3 p-3 text-pink-500 text-2xl font-bold underline'>Read</h1>
        </div>
      </div>
        
    </div>
  )
}

export default Home