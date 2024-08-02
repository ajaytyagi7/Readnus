import React , { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const List = () => {
    const [storyList, setstoryList] = useState([])

    const fetchstoryData=async() =>{
        const res=await fetch('http://localhost:5000/write/getall')
        console.log(res.status);

        const data= await res.json();
        console.log(data);
 
        setstoryList(data);
    }
    useEffect(()=>{
        fetchstoryData();
    },[]);

  return (
    <div className='container-fluid bg-secondary-subtle'>
        <div className="row p-5">
            <div className="col-md-8 ">
            <div className="card p-4">
            {storyList.map((item)=>{
                return( <div className='row'>
                   
                         <div className="col-md-9">
                            <div className="row">
                            <div className="col-md-11 mt-1">
                                <h1>Readnus</h1>
                            </div>
                        </div>
                        <div>
                            <h1 className='mt-3 mb-3 text-3xl font-bold'>{item.title}</h1>
                        </div>
                        <div>
                            <h1 className=''>{item.description}</h1>
                        </div>
                             <Link to={'/Details/'+ item._id}> <button className='bg-blue-300 rounded-3xl mb-3 w-28 mt-3 p-2 '>Read</button></Link>
                        <hr />
                        </div>

                         <div className="col-md-3">
                            <img className='img-fluid' src={'http://localhost:5000/' + item.image}alt="" />
                        </div>
                </div>)
                })}
            
            </div>
            </div>
            <div className="col-md-3">
                <div className="card p-5">
                    <h1 className='mb-3 text-2xl font-semibold'>Recommended </h1>
                    <h1 className='mb-3 '>React.js</h1>
                    <h1 className='mb-3 '>Node.js</h1>
                    <h1 className='mb-3 '>Express.js</h1>
                    <h1 className='mb-3 '>JavaScript</h1>
                    <h1 className='mb-3'>HTML</h1>

                    
 

                    
                </div>
            </div>
        </div>
        .
    </div>
  )
}

export default List