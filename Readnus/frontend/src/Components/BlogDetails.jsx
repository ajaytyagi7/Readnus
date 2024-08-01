import React,{useState,useEffect} from 'react'


const BlogDetails = () => {
    const [blogDetails, setblogDetails] = useState([])

    const fetchblogDetalis=async() =>{
        const res=await fetch('http://localhost:5000/blog/getall')
        console.log(res.status);

        const data= await res.json();
        console.log(data);
 
        setblogDetails(data);
    }

    useEffect(()=>{
        fetchblogDetalis();
    },[]);
  return (
    <div className='bg-secondary-subtle'>
        <div className='col-md-10 mx-auto '>
            {
                blogDetails.map((item)=>{
                    return (<div className='py-5'>
                        <img className='img-fluid mx-auto ' src={'http://localhost:5000/' + item.image} alt="" />
                        <h1 className='mt-5 text-3xl font-semibold mb-3 text-center'>{item.title}</h1>
                        <p>{item.date}</p>
                        <h1 className='mt-3'>{item.details}</h1>
                    </div>)
                })
            }
        </div>
    </div>
  )
}

export default BlogDetails

