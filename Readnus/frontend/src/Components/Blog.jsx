import React,{ useState,useEffect }  from 'react'

const Blog = () => {
  const [blogList, setblogList] = useState([])


  const fetchblogData=async() =>{

   
    const res=await fetch('http://localhost:5000/blog/getall')
    console.log(res.status);

    const data= await res.json();
    console.log(data);

    setblogList(data);
}
useEffect(()=>{
    fetchblogData();
},[]);
  return (
    <div className='container-fluid'>
      <div>
        <header className='bg-stone-300 '>
          <div className='p-16'>
            <h1 className='text-center text-5xl  font-bold'>Welcome to our Blogs</h1>
            <h1 className='text-center mt-3 font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta blanditiis veritatis, debitis quidem asperiores harum magnam doloribus voluptates unde,.</h1>
          </div>
        </header>
     </div>
     <div>
        <div className="col-md-3 mt-3">
          {
            blogList.map((item)=>{
              return (<div className="shadow p-3 ">
                <div className="card-body">
                  <div>
                    <img className='img-fluid' src={'http://localhost:5000/' + item.image} alt="" />
                  </div>
                  <h1 className='text-2xl font-semibold'>{item.title}</h1>
                  <p>{item.date}</p>
                </div>
              </div>)
            })
          }
        </div>
     </div>
    </div>  
  )
}

export default Blog