import React from 'react'

const Home = () => {
  return (
    <div className='container-fluid bg-secondary-subtle'>
        <div className= ' row p-5'>
         <div className='mt-5 col-md-8'>
          <h1 className='text-9xl 	font-semibold; text- display-1'>Human <br />stories & ideas</h1>
          <h2 className='mt-3 text-4xl'>A place to read,write,and deepan  your understanding</h2>
          <button className='btn btn-dark rounded-pill mt-5 p-3 '>Start Reading</button>
         </div>
         <div className="col-md-4 mt-5">
            <img className='img-fluid' src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png" alt="" />
         </div><hr />
        </div>
      
        
    </div>
  )
}

export default Home